import React from "react";
import HeroSection from "../../component/ContactUs/HeroSection";
import Breadcrumb from "../../component/Common/Breadcrump";
import Form from "../../component/ContactUs/Form";
import Questions from "../../component/ContactUs/Questions";

export default function ContactUs() {
  return (
    <>
      <Breadcrumb />
      <HeroSection />
      <Form />
      <Questions />
    </>
  );
}
