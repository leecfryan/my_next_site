import React from "react";
import { AnimatedTestimonialsHero } from "@/components/animated-testimonial";
import { FlipWordsTitle } from "@/components/heading-flip";
import { CustomBentoGridThird } from "@/components/bento-card";
import { CarouselSize } from "@/components/custom-carousel";
import Footer from "@/components/custom-footer";

const cards = [
  {
    title: "Common Cold",
    description: "Viral Infection",
    content:
      "A contagious respiratory illness caused by viruses, characterized by a runny nose, sore throat, and cough.",
    image: "",
    link: "https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605",
  },
  {
    title: "Influenza",
    description: "Flu",
    content:
      "A viral infection that attacks the respiratory system, often causing fever, body aches, and fatigue.",
    image: "",
    link: "https://www.cdc.gov/flu/signs-symptoms/index.html",
  },
  {
    title: "Diabetes",
    description: "Chronic Illness",
    content:
      "A condition that impairs the body's ability to process blood glucose, leading to high blood sugar levels.",
    image: "",
    link: "https://www.cdc.gov/flu/highrisk/diabetes.htm",
  },
  {
    title: "Hypertension",
    description: "High Blood Pressure",
    content:
      "A chronic condition where the force of blood against artery walls is too high, increasing heart disease risk.",
    image: "",
    link: "",
  },
  {
    title: "Asthma",
    description: "Respiratory Condition",
    content:
      "A chronic disease that inflames and narrows the airways, causing difficulty in breathing.",
    image: "",
    link: "",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <div className="hero w-full h-dvh flex flex-col items-center justify-center">
        <FlipWordsTitle />
        <AnimatedTestimonialsHero />
      </div>
      <div className="w-full flex flex-col items-center">
        <CustomBentoGridThird />
        <br />
        <CarouselSize cards={cards} />
      </div>

      <Footer />
    </div>
  );
}
