import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import SectionHead from "../components/UI/SectionHead";

const AccordRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="2xl:w-6 w-5 2xl:h-6 h-5 mb-1 inline"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const DMBtn = () => (
  <a
    href="https://www.instagram.com/easy.astrology.by.zoee/"
    rel="noreferrer noopener"
    target={"_blank"}
    className="font-bold smooth hover:opacity-80 underline"
  >
    DM
  </a>
);

export const EmailBtn = ({ children }) => (
  <a
    href={"mailto:easy.astrology.by.zoee@gmail.com"}
    className="font-bold underline smooth hover:opacity-80"
  >
    {children}
  </a>
);

const Disclaimer = () => {
  return (
    <div>
      <Head>
        <title>Disclaimers & Policies | Easy Astrology By Zoée</title>
        <meta
          name="description"
          content="Make Sure To Read This Before Booking A Consultation."
        />
        <meta name="robots" content="noindex nofollow" />
        <link rel="icon" href="/images/logo-color.png" />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"Disclaimers & Policies"} />

        <div className="bg-gray lg:py-20 py-14">
          <div className="container-deep 2xl:text-2xl sm:text-xl text-lg">
            <div>
              <div className="text-center mb-14 2xl:text-3xl sm:text-2xl text-xl font-bold">
                Make Sure To Read This Before Booking A Consultation…
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  What if I missed my consultation?
                </div>
                It counts as a <i>no-show</i> and you will{" "}
                <u>not be refunded</u>. However, you can reschedule the
                consultation
                <b> once</b> (by sending me an <EmailBtn>email</EmailBtn>)
                without needing to pay again.
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  What if I know I’m going to arrive late at the consultation?
                </div>
                If you are going to be late for your consultation, please let me
                know by <DMBtn /> or send me an <EmailBtn>email</EmailBtn> as
                soon as possible.
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  What if I arrived late at my consultation?
                </div>
                If you are <b>more than 10 minutes</b> late for the
                consultation, it will be considered as a <i>no-show</i> (not
                refunded) but you can reschedule it <b>once</b> (by sending me
                an <EmailBtn>email</EmailBtn>) without needing to pay.
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  I joined the Google Meet meeting but it shows “waiting for the
                  host to start this meeting”, what to do?
                </div>
                <div>
                  If you join the Google Meet meeting and it shows “waiting for
                  the host to start this meeting” <b>more than 3 minutes</b>{" "}
                  after our scheduled time, <DMBtn /> or{" "}
                  <EmailBtn>email me</EmailBtn> right away (it might be a
                  technical problem).
                </div>
                <div className="mt-3">
                  Unless I reach out beforehand, the meeting will always be open
                  right at the scheduled time, no later.
                </div>
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  What if I need to cancel or reschedule my consultation?
                </div>
                If you need to cancel or reschedule your consultation, you can
                do so <b>until 24 hours before your consultation</b> by sending
                me an <EmailBtn>email</EmailBtn>. You cannot reschedule less
                than 24 hours before the consultation. If you cancel it less
                than 24 hours before the consultation, it{" "}
                <u>won’t be refunded</u> (and you will need to pay again if you
                want to book another consultation).
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  Which software do you use for the consultation?
                </div>
                The consultations are held over <i>Google Meet</i> (unless
                otherwise specified on the intake form).
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  What will happen after I book a consultation?
                </div>
                After booking, you will receive a <b>confirmation email</b>.
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  I didn’t received a confirmation email after booking, what
                  should I do?
                </div>
                <DMBtn /> or <EmailBtn>email me</EmailBtn> if you do not receive
                one.
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  What if I have something that comes up short notice?
                </div>
                If something comes up short notice, please <DMBtn /> or{" "}
                <EmailBtn>email me</EmailBtn>.
              </div>

              <div className="mb-10">
                <div className="mb-3 font-bold">
                  I have questions about the consultation or the above, what
                  should I do?
                </div>
                If you have any questions, let me know by <DMBtn /> or{" "}
                <EmailBtn>email me</EmailBtn>.
              </div>
            </div>

            <div>
              <div className="text-center mt-28 mb-14 2xl:text-3xl sm:text-2xl text-xl font-bold">
                Consultation Disclaimers
              </div>

              <div className="mt-5">
                <AccordRight /> My astrological practice prioritizes your{" "}
                <b>confidentiality</b>, <b>health</b>, and <b>well-being</b>.
              </div>
              <div className="mt-5">
                <AccordRight /> I give myself the right to <b>stop</b> the
                consultation at any time if you show any <i>disrespectful</i> or{" "}
                <i>abusive behavior</i>.
              </div>
              <div className="mt-5">
                <AccordRight /> I reserve the right to <b>decline</b> any
                consultation request if I feel like I’m not able to help you.
              </div>
              <div className="mt-5">
                <AccordRight /> If you come to me with a topic best suited to a
                different kind of professional, I will <b>refer you</b> to
                someone else (physicians, psychologist, financial adviser,
                etc.). Astrology <b>is not</b> a replacement for psychotherapy,
                professional medical advice, legal counsel, etc.
              </div>
              <div className="mt-5">
                <AccordRight /> If the <b>recording fail</b> for some reasons,{" "}
                <u>we won’t be redoing the consultation</u>. It arrive that in
                some very rare case a technical problem occurs. So, I can’t
                guarantee at 100% that you will get the recording. You are free
                to also record by yourself or to take some notes!
              </div>
              <div className="mt-5">
                <AccordRight /> My practice <b>does not engage</b> in firm
                future prediction or spying on others who are not aware that the
                consultation is taking place.
              </div>
              <div className="mt-5">
                <AccordRight /> Information and guidance provided in an
                astrological consultation is <u>supplemental</u>. It{" "}
                <b>should not replace</b> advice from a medical, mental health,
                or other industry professional.
              </div>
              <div className="mt-5">
                <AccordRight /> My astrological consultations <b>are not</b>{" "}
                psychic services or fortune telling.
              </div>
              <div className="mt-5">
                <AccordRight /> Consultations are{" "}
                <b className="underline">confidential</b>. So, before the
                consultation begins, make sure to be in a <b>calm</b> and{" "}
                <b>alone</b> space in which won’t be disturbed.
              </div>
            </div>

            {/* <div>
              <div className="text-center mt-28 mb-14 2xl:text-3xl sm:text-2xl text-xl font-bold">
                Paying with PayPal
              </div>

              <Link href="https://www.privacypolicies.com/live/889cb50c-10f0-40f2-aa35-145c2c5a8565">
                <div className="mt-5 font-semibold underline">
                  Legal Privacy Policy
                </div>
              </Link>

              <Link href="/documents/paypal-privacy-policy.pdf">
                <div className="mt-5 font-semibold underline">
                  Privacy Policy (PayPal)
                </div>
              </Link>

              <Link href="/documents/paypal-user-agreement.pdf">
                <div className="mt-5 font-semibold underline">
                  User Agreement (PayPal)
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Disclaimer;
