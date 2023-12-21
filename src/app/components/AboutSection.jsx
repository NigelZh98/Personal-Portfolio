"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "location",
    id: "location",
    content: (
      <p>Fairview, New Jersey, NJ</p>
    ),
  },
  {
    title: "Interests",
    id: "Interests",
    content: (
      <ul className="list-disc pl-2">
        <li>Coding</li>
        <li>Hiking</li>
        <li>Fihsing</li>
        <li>Snowboarding</li>
      </ul>
    ),
  },
  {
    title: "Study",
    id: "Study",
    content: (
      <p>New Jersey institute of Technology</p>
    ),
  },
  {
    title: "Employment",
    id: "Employment",
    content: (
      <p>Paris Baguette</p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("location");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-[#162C45]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/me.png" width={320} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          A highly motivated, dedicated and meticulous junior standing looking for a professional opportunity to engage in technical experiences. I have five years of customer service experience engaged in different service fields. I have gained numerous skills that are beneficial to my future career, including problem solving, communication, hard-working, organization, and punctually. I am a proactive individual, I care about web development, data analysis, and current trends and importance effect of artificial intelligence. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("location")}
              active={tab === "location"}
            >
              {" "}
              Location{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Interests")}
              active={tab === "Interests"}
            >
              {" "}
              Interests{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Study")}
              active={tab === "Study"}
            >
              {" "}
              Study{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Employment")}
              active={tab === "Employment"}
            >
              {" "}
              Employment{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
