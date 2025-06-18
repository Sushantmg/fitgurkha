"use client";

import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";    
import ReviewsSection from "@/components/Home/ReviewsSection";
import Footer from "@/components/Home/Footer";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}