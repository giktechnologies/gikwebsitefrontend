import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GIK technologies",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
