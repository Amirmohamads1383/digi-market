import React from "react";
import HeroSection from "../../component/AboutUs/HeroSection";
import Breadcrumb from "../../component/Common/Breadcrump";
import AboutStats from "../../component/AboutUs/AboutStats";
import AboutFeatures from "../../component/AboutUs/AboutFeatures";
import AboutCTA from "../../component/AboutUs/AboutCTA";

export default function AboutUs() {
  return (
    <>
      <Breadcrumb />
      <HeroSection />
      <AboutStats />
      <AboutFeatures />
      <AboutCTA />
    </>
  );
}
