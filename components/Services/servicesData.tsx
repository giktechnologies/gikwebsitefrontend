import { Service } from "@/types/service";
import Image from "next/image";

const servicesData: Service[] = [
  {
    id: 1,
    icon: <Image src="/images/services/icons8-web-development-100.png" alt="Startup Icon" width={40} height={40} />,
    title: "Software Development",
    image: "/images/about/software-development.svg",
    paragraph: "We provide expert software engineering, focusing on custom development and cloud optimization to meet evolving business demands.",
    detailspage_info: {
      details_title: "Expert Software Solutions",
      info: "Our software engineering services cover custom development, cloud solutions, and robust architectures to optimize business workflows and enhance scalability.",
      image: "/images/details/software-development.svg",
      sub_services: [
        { id: 1, name: "Custom Software Development" },
        { id: 2, name: "API Development and Integration" },
        { id: 3, name: "Consulting and Strategy" },
      ],
    },
  },
  {
    id: 2,
    icon: <Image src="/images/services/icons8-marketing-100.png" alt="Design Icon" width={40} height={40} />,
    title: "Digital Marketing",
    image: "/images/about/marketing-lifestyle-amico.svg",
    paragraph: "Our digital marketing experts create tailored strategies that enhance online visibility and drive business growth through SEO, PPC, and social media marketing.",
    detailspage_info: {
      details_title: "Comprehensive Digital Strategies",
      info: "We offer SEO, PPC, and targeted advertising solutions that boost engagement and ensure your brand reaches its intended audience effectively.",
      image: "/images/details/digital-marketing.svg",
      sub_services: [
        { id: 1, name: "SEO & Content Marketing" },
        { id: 2, name: "Social Media Management" },
        { id: 3, name: "Pay-Per-Click Advertising" },
      ],
    },
  },
  {
    id: 3,
    icon: <Image src="/images/services/laptop_2389678.png" alt="Next.js Icon" width={40} height={40} />,
    title: "Multimedia",
    image: "/images/about/press-pause-amico.svg",
    paragraph: "We create stunning graphics, videos, and animations to enhance digital presence. Our services include web design, motion graphics, and interactive content.",
    detailspage_info: {
      details_title: "Creative Multimedia Solutions",
      info: "Our multimedia services bring your brand to life through engaging visual content, from graphic design to professional video editing and animations.",
      image: "/images/details/multimedia.svg",
      sub_services: [
        { id: 1, name: "Graphic & Motion Design" },
        { id: 2, name: "Video Production & Editing" },
        { id: 3, name: "Interactive Web Media" },
      ],
    },
  },
];

export default servicesData;
