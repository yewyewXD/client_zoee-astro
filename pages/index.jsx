import Head from "next/head";
import { useRef } from "react";
import CallToAction from "../components/UI/CallToAction";
import Footer from "../components/UI/Footer";
import AboutMe from "../components/Home/AboutMe";
import FAQ from "../components/Home/FAQ";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import SocialMedia from "../components/Home/SocialMedia";
import Testimonial from "../components/Home/Testimonial";
import Navbar from "../components/UI/Navbar";
import Script from "next/script";

export default function Home() {
  const servicesRef = useRef();
  return (
    <div className="relative">
      <Script src="https://platform.twitter.com/widgets.js" async />

      <Head>
        <title>Home | Easy Astrology By Zoée</title>
        <meta
          name="description"
          content="For People Who Want To Become The Best Version Of Themselves… I use multiple ancient and modern astrology techniques to help you discover your hidden talents, use your true potential, transform drastically your relationships and find the happiest life path for you."
        />
        <link rel="icon" href="/images/logo-color.png" />

        {/* OG */}
        <meta content="Home | Easy Astrology By Zoée" property="og:title" />
        <meta content="https://easyastrologybyzoee.com/" property="og:url" />
        <meta
          content="For People Who Want To Become The Best Version Of Themselves… I use multiple ancient and modern astrology techniques to help you discover your hidden talents, use your true potential, transform drastically your relationships and find the happiest life path for you."
          property="og:description"
        />
        <meta
          content="https://easyastrologybyzoee.com/images/logo-color.png"
          property="og:image"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://easyastrologybyzoee.com/" />
        <meta name="twitter:title" content="Home | Easy Astrology By Zoée" />
        <meta
          name="twitter:description"
          content="For People Who Want To Become The Best Version Of Themselves… I use multiple ancient and modern astrology techniques to help you discover your hidden talents, use your true potential, transform drastically your relationships and find the happiest life path for you."
        />
        <meta
          name="twitter:image"
          content="https://easyastrologybyzoee.com/images/logo-color.png"
        />
      </Head>

      <Navbar />

      <main>
        <div>
          <Hero />
          <div
            className="scroll-down"
            onClick={() => {
              servicesRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          ></div>
        </div>
        <div id="testimonials" ref={servicesRef}>
          <Testimonial />
        </div>

        <div id="services">
          <Services />
        </div>

        <div>
          <AboutMe />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <div id="social">
          <SocialMedia />
        </div>

        <CallToAction />
      </main>

      <Footer hideBg={true} />
    </div>
  );
}
