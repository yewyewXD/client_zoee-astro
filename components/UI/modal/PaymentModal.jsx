import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import moment from "moment-timezone";
import timezones from "../../../json/timezones.json";
import { getOccupiedDates, submitBooking } from "../../../helpers/utils";
import { MoonLoader } from "react-spinners";
import { EmailBtn } from "../../../pages/disclaimer";
import { INITIAL_DATE, INITIAL_DATE_END } from "../../../helpers/config";
import { getMinDate, getWiseLink } from "../../../helpers/utils";

const USER_TIMEZONE = moment.tz.guess();

const PaymentModal = ({ productId, onClose, price, image, title, clients }) => {
  // Phase: Booking
  const [isBooking, setIsBooking] = useState(false);
  const [isShowingPicker, setIsShowingPicker] = useState(true);
  const [datePickerDate, setDatePickerDate] = useState(INITIAL_DATE.toJSDate());
  const [pickedDate, setPickedDate] = useState(
    INITIAL_DATE.setZone("Asia/Singapore", { keepLocalTime: true }).toJSDate()
  );
  const [newZone, setNewZone] = useState(USER_TIMEZONE || "Asia/Singapore");
  const userEmailRef = useRef(<input type="email" />);
  const [userEmail, setUserEmail] = useState("");
  const [isSubmittingDate, setIsSubmittingDate] = useState(false);

  // Phase: Payment
  const wiseLink = useMemo(() => {
    const link = getWiseLink(productId);
    return link;
  }, [productId]);
  const [isPaying, setIsPaying] = useState(false);
  const [hasClickedPayLink, setHasClickedPayLink] = useState(false);

  // Phase: Final step
  const [isAtFinal, setIsAtFinal] = useState(false);

  // Step 1: Validate Follow-up Customers
  const followupEmailRef = useRef();
  const [isNotEligible, setIsNotEligible] = useState(false);
  const [isPassedCheck, setIsPassedCheck] = useState(false);
  async function handleCheckFollowup(e) {
    e.preventDefault();
    const value = followupEmailRef.current.value;
    if (clients.includes(value)) {
      setIsPassedCheck(true);
      setIsNotEligible(false);
    } else {
      setIsNotEligible(true);
    }
  }

  // Step 2: Check Occupied Dates
  const [isCheckingOccupied, setIsCheckingOccupied] = useState(false);
  const [excludeDates, setExcludeDates] = useState([]);
  useEffect(() => {
    async function checkOccupiedDates() {
      setIsCheckingOccupied(true);
      const occupiedDates = await getOccupiedDates();
      setExcludeDates(occupiedDates);
      setIsCheckingOccupied(false);
      setIsBooking(true);
    }
    if ((clients && isPassedCheck) || !clients) {
      checkOccupiedDates();
    }
  }, [isPassedCheck, clients]);

  // Step 3: Picking Date
  function handlePickDate(date) {
    const luxonDate = DateTime.fromJSDate(date)
      .setZone("Asia/Singapore", {
        keepLocalTime: true,
      })
      .toJSDate();
    setDatePickerDate(date);
    setPickedDate(luxonDate);
  }

  // Step 4: Add Booking to Airtable
  const clientLocalDate = DateTime.fromJSDate(pickedDate, {
    zone: newZone,
  })
    .toFormat("dd MMMM yyyy @ hh:mm a (ZZZZ)")
    .toString();

  async function onConfirmBookingDate(e) {
    e.preventDefault();
    setIsSubmittingDate(true);

    const finalEmail = userEmailRef.current.value;
    setUserEmail(finalEmail);

    const bookingConfig = {
      name: "",
      email: finalEmail,
      title: title,

      ownerDate: DateTime.fromJSDate(pickedDate, {
        zone: "Asia/Singapore",
      })
        .toFormat("dd MMMM yyyy @ hh:mm a (ZZZZ)")
        .toString(),
      clientDate: clientLocalDate,
      orderDate: DateTime.now()
        .setZone(newZone)
        .toFormat("dd MMMM yyyy @ hh:mm a (ZZZZ)")
        .toString(),
    };

    const data = await submitBooking(bookingConfig);

    setIsSubmittingDate(false);
    setIsBooking(false);
    setIsPaying(true);
  }

  const pickerMinDate = useMemo(() => {
    const minDate = getMinDate({ productId });
    return minDate;
  }, [productId]);

  const isDateValid = useMemo(() => {
    if (!datePickerDate) return false;
    const picked = DateTime.fromJSDate(datePickerDate);
    const pickedDay = picked.get("day");
    const pickedMonth = picked.get("month");

    for (const exDate of excludeDates) {
      const excluded = DateTime.fromJSDate(exDate);
      if (
        excluded.get("day") === pickedDay &&
        excluded.get("month") === pickedMonth
      ) {
        return false;
      }
    }

    if (picked < pickerMinDate || picked > INITIAL_DATE_END) {
      return false;
    }

    return true;
  }, [datePickerDate, excludeDates, pickerMinDate]);

  // Step 5: Show final step (after payment)
  function showFinalStep() {
    setIsPaying(false);
    setIsAtFinal(true);
  }

  // Exit: Close Modal
  function handleCloseModal() {
    onClose();
  }

  return (
    <div
      className="fixed h-screen w-screen bg-opacity-40 bg-black flex justify-center items-center"
      style={{ zIndex: "99999" }}
    >
      <div
        className={`max-w-lg p-8 w-11/12 overflow-y-auto bg-white rounded-lg shadow-xl shadow-gray-800 flex flex-col justify-between relative`}
        style={{ maxHeight: "80vh" }}
      >
        <span
          className="cursor-pointer absolute top-4 right-4"
          onClick={handleCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

        {/* Content 1 - Check is existing customer before booking followup */}
        {clients && !isPassedCheck && (
          <div>
            <form onSubmit={handleCheckFollowup}>
              <div className="text-xl mb-5">
                Please enter <u> your email</u> used in the previous
                consultation
              </div>
              <input
                ref={followupEmailRef}
                className="border border-gray-500 rounded w-full p-3"
                type="email"
                placeholder="example@mail.com"
                required
              />
              {isNotEligible && (
                <div className="mt-1 text-sm text-red-600">
                  You have not done any consultation before and are not eligible
                  for a Follow-up Consultation.
                </div>
              )}
              <button className="bg-gray text-white py-2 px-6 rounded-md mt-4 hover:opacity-80 smooth">
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Content 2 - Check Occupied Dates */}
        {isCheckingOccupied && (
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-xl mb-5">Checking available dates</div>
            <MoonLoader color={"black"} loading={true} size={90} />
          </div>
        )}

        {/* Content 3 - Choose consultation date */}
        {isBooking && (
          <form
            className="block"
            style={{ minHeight: "400px" }}
            onSubmit={onConfirmBookingDate}
          >
            <div className="text-xl mb-5">
              Please select the <u>date & time</u> for the consultation.
            </div>

            <div className="relative">
              <input
                className="border border-gray-500 rounded w-full p-3 cursor-pointer"
                type="email"
                placeholder="example@mail.com"
                required
                onClick={() => {
                  setIsShowingPicker((bool) => !bool);
                }}
                readOnly
                value={clientLocalDate}
              />

              <div className="text-base leading-tight mt-1">
                <span className="font-semibold">Note:</span> Available time is
                shown in
                <span className="font-semibold"> GMT+8</span> and converted to
                your <u>local time above</u> (Incl. Daylight-Saving). Please
                confirm your <u>timezone & email below</u>.
              </div>

              {isShowingPicker && (
                <div className="sm:block flex justify-center">
                  <DatePicker
                    inline
                    excludeDates={excludeDates}
                    selected={datePickerDate}
                    onChange={handlePickDate}
                    showTimeSelect
                    minDate={pickerMinDate}
                    maxDate={INITIAL_DATE_END.toJSDate()}
                    minTime={INITIAL_DATE.toMillis()}
                    maxTime={INITIAL_DATE_END.toMillis()}
                  />
                </div>
              )}
            </div>

            <div className="mt-5">
              <div>Your timezone:</div>
              <select
                className="border rounded p-2 border-gray-500 cursor-pointer"
                value={newZone}
                onChange={(e) => {
                  setNewZone(e.target.value);
                }}
              >
                {timezones.map((tz) => (
                  <option value={tz.iana} key={tz.iana}>
                    {DateTime.fromJSDate(pickedDate, {
                      zone: tz.iana,
                    }).toFormat("(ZZZZ)")}{" "}
                    {tz.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-3">
              <div>Email to receive order confirmation:</div>
              <input
                ref={userEmailRef}
                className="border rounded p-3 border-gray-500 w-full"
                required
                type="email"
              />
            </div>

            <button
              className="bg-gray text-white py-2 px-6 rounded-md mt-5 hover:opacity-80 smooth mb-8 sm:w-max w-full"
              type="submit"
              disabled={!isDateValid || isSubmittingDate}
              style={!isDateValid ? { color: "gray" } : {}}
            >
              {isDateValid ? (
                <span>Confirm - {clientLocalDate}</span>
              ) : (
                <span>Date is not allowed, please pick another one</span>
              )}
            </button>
          </form>
        )}

        {/* Content 4 - Payment methods */}
        {isPaying && (
          <div>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-md"
                    src={image}
                    alt=""
                    height={70}
                    width={70}
                  />

                  <div className="ml-4">
                    <div className="font-semibold">{title}</div>
                    <div className="text-gray-500 font-semibold">
                      {clientLocalDate}
                    </div>
                  </div>
                </div>

                <div className="font-semibold">{price}.00 USD</div>
              </div>

              <div className="w-full border-b my-6 border-gray-500"></div>

              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span className="text-2xl">{price}.00 USD</span>
              </div>
            </div>

            <div className="mx-auto mt-10">
              <div className="text-xl font-semibold text-center mb-2">
                Methods to Pay
              </div>

              <div className="text-lg font-semibold">
                <a
                  className="flex items-center p-3 rounded smooth cursor-pointer hover:bg-gray-400"
                  href="https://www.paypal.me/easyastrologybyzoee"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    className="mr-3"
                    src="/images/icon_paypal.png"
                    alt=""
                    height={30}
                    width={30}
                  />{" "}
                  Paypal{" "}
                  <span className="ml-2 font-normal text-base">(Fastest)</span>
                </a>

                <a
                  className="flex items-center mt-3 p-3 rounded smooth cursor-pointer hover:bg-gray-400"
                  href={wiseLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    className="mr-3"
                    src="/images/icon_bank.png"
                    alt=""
                    height={30}
                    width={30}
                  />{" "}
                  Bank Transfer
                </a>
              </div>

              <div className="mt-3 flex items-center">
                <input
                  type="checkbox"
                  id="is-paid-checkbox"
                  className="cursor-pointer"
                  onChange={(e) => {
                    setHasClickedPayLink((bool) => !bool);
                  }}
                />{" "}
                <label
                  htmlFor="is-paid-checkbox"
                  className="pl-2 cursor-pointer"
                >
                  I have made the payment. (Booking will only be confirmed after
                  payment is received)
                </label>
              </div>

              <button
                className="bg-gray text-white py-2 px-6 rounded-md mt-5 hover:opacity-80 smooth sm:w-max w-full"
                disabled={!hasClickedPayLink}
                onClick={showFinalStep}
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* Success */}
        {isAtFinal && (
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-xl mb-3">Thank you!</div>
            <div className="xl:text-lg mb-6">
              <div className="mb-3">
                An order confirmation will be sent to{" "}
                <span className="font-semibold">{userEmail}</span> after the
                payment is received. Please check the spam mailbox as well!
              </div>

              <div>
                To speed up the confirmation, <EmailBtn>email me</EmailBtn> the
                receipt of your payment.
              </div>
            </div>

            <div className="border-4 rounded-full p-10 border-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="green"
                className="w-20 h-20 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <div className="xl:text-lg mt-3">
              If the email is wrong, repeat the booking process without actually
              paying.
            </div>

            <button
              className="bg-gray text-white py-2 px-6 rounded-md mt-6 hover:opacity-80 smooth sm:w-max w-full"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
