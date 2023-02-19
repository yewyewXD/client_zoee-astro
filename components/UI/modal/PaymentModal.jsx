import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import PaymentBtn from "../buttons/PaymentBtn";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import moment from "moment-timezone";
import timezones from "../../../json/timezones.json";
import { getOccupiedDates, submitBooking } from "../../../utils";
import { MoonLoader } from "react-spinners";
import { EmailBtn } from "../../../pages/disclaimer";
import { getMinDate, INITIAL_DATE, INITIAL_DATE_END } from "../../../config";

const USER_TIMEZONE = moment.tz.guess();

const PaymentModal = ({ productId, onClose, price, image, title, clients }) => {
  // configs for Followup Consultation
  const followupEmailRef = useRef();
  const [isNotEligible, setIsNotEligible] = useState(false);
  const [isPassedCheck, setIsPassedCheck] = useState(false);

  const [clientConfig, setClientConfig] = useState({
    email: "example@mail.com",
    name: "",
    orderId: "",
    orderDate: "",
  });
  const [isPaymentMade, setIsPaymentMade] = useState(false);

  const [newZone, setNewZone] = useState(USER_TIMEZONE || "Asia/Singapore");
  const [excludeDates, setExcludeDates] = useState([]);
  const [isPickingDate, setIsPickingDate] = useState(true);
  const [datePickerDate, setDatePickerDate] = useState(INITIAL_DATE.toJSDate());
  const [pickedDate, setPickedDate] = useState(
    INITIAL_DATE.setZone("Asia/Singapore", { keepLocalTime: true }).toJSDate()
  );

  const userEmailRef = useRef(<input type="email" />);
  const [userEmail, setUserEmail] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [isBookingDone, setIsBookingDone] = useState(false);

  const [hasError, setHasError] = useState(false);

  const clientLocalDate = DateTime.fromJSDate(pickedDate, {
    zone: newZone,
  })
    .toFormat("dd MMMM yyyy @ hh:mm a (ZZZZ)")
    .toString();

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

  async function handleAfterBuy({ orderId, orderDate, email, name }) {
    setClientConfig({ orderId, orderDate, email, name });

    setUserEmail(email);

    const occupiedDates = (await getOccupiedDates()).map((date) => {
      const splitDate = date.split("-");
      return DateTime.fromObject({
        year: splitDate[0],
        month: splitDate[1],
        day: splitDate[2],
        hour: 8,
      }).toJSDate();
    });
    setExcludeDates(occupiedDates);

    setIsPaymentMade(true);
  }

  function handlePickDate(date) {
    const luxonDate = DateTime.fromJSDate(date)
      .setZone("Asia/Singapore", {
        keepLocalTime: true,
      })
      .toJSDate();
    setDatePickerDate(date);
    setPickedDate(luxonDate);
  }

  async function onConfirmBookingDate(e) {
    e.preventDefault();
    setIsBooking(true);

    const finalEmail = userEmailRef.current.value;
    setUserEmail(finalEmail);

    const emailParams = {
      id: productId,
      orderId: clientConfig.orderId,
      orderDate: DateTime.fromISO(clientConfig.orderDate, {
        zone: newZone,
      })
        .toFormat("dd MMMM yyyy @ hh:mm a (ZZZZ)")
        .toString(),
      date: clientLocalDate,
    };

    const ownerLocalLuxonDate = DateTime.fromJSDate(pickedDate, {
      zone: "Asia/Singapore",
    });

    const bookingConfig = {
      title: title,
      databaseDate: ownerLocalLuxonDate.toFormat("yyyy-MM-dd"),
      ownerDate: ownerLocalLuxonDate
        .toFormat("dd MMMM yyyy @ hh:mm a (ZZZZ)")
        .toString(),
      email: finalEmail,
      name: clientConfig.name,
      emailParams,
    };

    const data = await submitBooking(bookingConfig);
    if (data.error) {
      setHasError(true);
      return;
    }

    setIsBookingDone(true);
  }

  function handleCloseModal() {
    onClose();
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
        {clients && !isPassedCheck && !isBooking && (
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

        {(!clients || isPassedCheck) && !isBooking && (
          <>
            {/* Content 2 - Payment */}
            {!isPaymentMade && (
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
                          (Date can be chosen after payment)
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

                <div className="w-10/12 mx-auto mt-10">
                  <PaymentBtn
                    amount={price}
                    onPaymentSuccess={handleAfterBuy}
                  />
                </div>
              </div>
            )}

            {/* Content 3 - Choose consultation date */}
            {isPaymentMade && (
              <form
                className="block"
                style={{ minHeight: "400px" }}
                onSubmit={onConfirmBookingDate}
              >
                <div className="text-xl mb-5">
                  Payment Succeeded! Please select the <u>date & time</u> for
                  the consultation.
                </div>

                <div className="relative">
                  <input
                    className="border border-gray-500 rounded w-full p-3 cursor-pointer"
                    type="email"
                    placeholder="example@mail.com"
                    required
                    onClick={() => {
                      setIsPickingDate((bool) => !bool);
                    }}
                    readOnly
                    value={clientLocalDate}
                  />

                  <div className="text-base leading-tight mt-1">
                    <span className="font-semibold">Note:</span> Available time
                    is shown in
                    <span className="font-semibold"> GMT+8</span> and converted
                    to your <u>local time above</u> (Incl. Daylight-Saving).
                    Please confirm your <u>timezone & email below</u>.
                  </div>

                  {isPickingDate && (
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
                    defaultValue={userEmail}
                    ref={userEmailRef}
                    className="border rounded p-3 border-gray-500 w-full"
                    required
                    type="email"
                  />
                </div>

                <button
                  className="bg-gray text-white py-2 px-6 rounded-md mt-5 hover:opacity-80 smooth mb-8 sm:w-max w-full"
                  type="submit"
                  disabled={!isDateValid}
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
          </>
        )}

        {/* Content 4 - Wait for booking */}
        {isBooking && (
          <div className="flex flex-col justify-center items-center text-center">
            {hasError && (
              <>
                <div className="text-xl">
                  A technical error occurred! If you have paid, please{" "}
                  <EmailBtn>email me</EmailBtn> for help.{" "}
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="w-24 h-24 mt-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </>
            )}

            {!hasError && (
              <>
                <div className="text-xl mb-5">
                  {isBookingDone ? (
                    <span>
                      Booking done! An order confirmation is sent to your email
                      ({userEmail}).
                    </span>
                  ) : (
                    <span>
                      Confirming your booking. Please{" "}
                      <span className="font-semibold"> do not</span> close the
                      tab.
                    </span>
                  )}
                </div>

                <MoonLoader
                  color={"black"}
                  loading={!isBookingDone}
                  size={90}
                />
              </>
            )}

            {isBookingDone && (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
