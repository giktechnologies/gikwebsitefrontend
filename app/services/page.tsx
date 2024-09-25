import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description=" Our expertise spans across various domains, enabling us to deliver high-quality solutions to meet the evolving needs of our clients."
      />
      <Services/>
      <AboutSectionTwo />
    </>
  );
};

export default ServicesPage;
