import OpenRoleListings from "@/components/Careers";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const CareersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Explore our current job openings and join our team to build the future of technology."
      />

      <OpenRoleListings/>

    </>
  );
};

export default CareersPage;