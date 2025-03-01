import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleService = ({ feature }: { feature: Feature }) => {
  console.log(feature.id.toString());
  
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        <Link href={`services/item/${feature.id.toString()}`} className="font-bold mt-2 inline-flex items-center justify-center p-4 text-base font-medium  rounded-md hover:bg-primary hover:bg-opacity-10 text-primary" >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
