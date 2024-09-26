import { Service } from "@/types/service";
import Image from "next/image";

const servicesData: Service[] = [
  {
    id: 1,
    icon: <Image src="/images/services/icons8-web-development-100.png" alt="Startup Icon" width={40} height={40} />,
    title: "Software engineering",
    paragraph:
      "We provide expert software engineering, focusing on custom development and cloud optimization to meet evolving business demands.",
  },
  {
    id: 2,
    icon: <Image src="/images/services/icons8-marketing-100.png" alt="Design Icon" width={40} height={40} />,
    title: "Digital Marketing",
    paragraph:
      "Our digital marketing experts create tailored strategies that enhance online visibility and drive business growth through SEO, PPC, and social media marketing.",
  },
  {
    id: 3,
    icon: <Image src="/images/services/laptop_2389678.png" alt="Next.js Icon" width={40} height={40} />,
    title: "ICT Consultancy",
    paragraph:
      "Our team assists with ICT audits, governance, and compliance, ensuring your organization meets industry standards while achieving its business objectives.",
  },
  {
    id: 4,
    icon: <Image src="/images/services/icons8-hosting-100.png" alt="Custom Icon" width={40} height={40} />,
    title: "Hosting",
    paragraph:
      "Specializing in managed and e-commerce hosting, we ensure high performance and security for your websites, with options for WordPress and reseller hosting.",
  },
  {
    id: 5,
    icon: <Image src="/images/services/icons8-computer-networks-100.png" alt="Next.js Icon" width={40} height={40} />,
    title: "Computer Networks",
    paragraph:
      "Our network solutions cover installation, maintenance, and upgrades, ensuring optimal performance and seamless connectivity across your organization.",
  },
  {
    id: 6,
    icon: <Image src="/images/logo/gikoriginal.png" alt="Custom Icon" width={40} height={40} />,
    title: "Custom Solutions",
    paragraph:
      "Our network solutions cover installation, maintenance, and upgrades, ensuring optimal performance and seamless connectivity across your organization.",
  },
];

export default servicesData;
