import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondaryBtn from "../components/UI/buttons/SecondaryBtn";
import CallToAction from "../components/UI/CallToAction";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import SectionHead from "../components/UI/SectionHead";
import socials from "../json/socialMedias.json";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Easy Astrology By Zoée</title>
        <meta
          name="description"
          content="A Question? Need To Contact Me? No Problem! Just Fulfil The Form Below."
        />
        <meta name="robots" content="noindex nofollow" />
        <link rel="icon" href="/images/logo-color.png" />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"Contact Me"} />
        <div className="bg-green py-32">
          <div className="container-deep">
            <div className="text-center text mb-20 lg:text-2xl text-xl font-semibold">
              A Question? Need To Contact Me? No Problem! Just Fulfil The Form
              Below.
            </div>

            <div className="md:grid grid-cols-3 flex flex-col">
              <div className="col-span-1 lg:text-xl text-lg font-semibold">
                <div className="flex flex-col md:items-start items-center">
                  <div className="text-xl font-bold mb-5">Social Media</div>
                  <div>
                    {socials.map((social) => (
                      <a
                        href={social.link}
                        target={"_blank"}
                        rel="noreferrer noopener"
                        className="flex items-center mb-5 w-max smooth hover:opacity-70"
                        key={`contact-social-${social.name}`}
                      >
                        <Image
                          src={social.image}
                          alt=""
                          height={30}
                          width={30}
                        />
                        <span className="ml-3">{social.tag}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="md:mt-10 mt-4 flex flex-col md:items-start items-center">
                  <div className="text-xl font-bold mb-3">Others</div>
                  <a
                    href={"mailto:easy.astrology.by.zoee@gmail.com"}
                    className="flex items-center w-max smooth hover:opacity-70"
                  >
                    <Image
                      src={"/images/icon_mail.png"}
                      alt=""
                      height={30}
                      width={30}
                    />
                    <span className="ml-3">
                      easy.astrology.by.zoee@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-span-2 md:pl-40 md:mt-0 mt-10">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="w-full"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="appearance-none outline-none border-2 border-white rounded-md shadow-md w-full py-2 px-3 text-black leading-tight focus:border-gray-600"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="First Last"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      className="appearance-none outline-none border-2 border-white rounded-md shadow-md w-full py-2 px-3 text-black leading-tight focus:border-gray-600"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="yourname@example.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block font-semibold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none outline-none border-2 border-white rounded-md shadow-md w-full py-2 px-3 text-black leading-tight focus:border-gray-600"
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={8}
                      required
                    />
                  </div>

                  <div className="mb-6 text-lg">
                    Make sure you have look in the{" "}
                    <Link
                      className="font-bold underline smooth hover:opacity-80"
                      href="/#faq"
                    >
                      FAQ section
                    </Link>{" "}
                    before DM or emailing me! (To see if I have already answered
                    your question).
                  </div>

                  <SecondaryBtn type="submit">Send</SecondaryBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </main>

      <Footer hideBg />
    </div>
  );
};

export default contact;
