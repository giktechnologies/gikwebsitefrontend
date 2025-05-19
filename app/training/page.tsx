import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
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
    </>
  );
};

export default ContactPage;
