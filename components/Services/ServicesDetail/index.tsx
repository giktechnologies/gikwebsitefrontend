import SectionTitle from "@/components/Common/SectionTitle";
import servicesData from "../servicesData";
import SingleService from "../SingleService";


const ServiceDetail = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Service Detail"
            paragraph="Explore Our Extensive Range of Specialized and Tailored Professional Services for Your Business"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((feature) => (
              <SingleService key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
