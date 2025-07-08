import React from "react";
import Header from "../../components/Header/page";
import Banner from "../../components/AboutUs/Banner/page";
import AboutUs from "../../components/AboutUs/About/page";
import WhoHCI from "../../components/AboutUs/HCI/page";
import Partnership from "../../components/AboutUs/Partnership/page";
import OurValue from "../../components/AboutUs/OurValues/page";
import EdgeHCI from "../../components/AboutUs/EdgeHCI/page";
import Footer from "../../components/Footer/page";

export default function About() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <WhoHCI />
      <Partnership />
      <OurValue />
      <EdgeHCI />
      <Footer />
    </>
  );
}
