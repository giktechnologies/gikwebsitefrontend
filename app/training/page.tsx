import Courses from "@/components/Training";
import TrainingHero from "@/components/Training/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <TrainingHero />
       <Courses />
    </>
  );
};

export default ContactPage;
