export type Service = {
  id: number;
  icon: JSX.Element;
  title: string;
  image: string;
  paragraph: string;
  detailspage_info: {
      details_title: string;
      info: string;
      image: string;
      sub_services: {
          id: number;
          name: string;
      }[];
  };
};