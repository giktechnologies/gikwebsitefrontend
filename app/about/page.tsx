import CompanyGoals from "@/components/About/AboutCompanyGoalsSection";
import LocationMap from "@/components/About/AboutMapSections";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Team from "@/components/About/AboutTeamSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GIK Technologies",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Explore more details about GIK technologies."
      />
      <AboutSectionOne />
      <CompanyGoals/>
      <Team/>
      {/* <AboutSectionTwo /> */}
      <LocationMap locationInfo={undefined}/>
    </>
  );
};

export default AboutPage;
