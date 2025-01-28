// import SectionTitle from "../Common/SectionTitle";

// const Team = () => {
//     return (
//       <>
//         <section id="features" className="py-16 md:py-20 lg:py-28">
//           <div className="container">
//             <SectionTitle
//               title="Meet the team"
//               paragraph="Explore Our Extensive Range of Specialized and Tailored Professional Services for Your Business"
//               center
//             />
  
//             <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };
  
//   export default Team;



// CLAUDE

// import SectionTitle from "../Common/SectionTitle";
// import { Twitter, Linkedin, Github } from "lucide-react";

// const teamMembers = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "CEO & Founder",
//     image: "/api/placeholder/300/300",
//     socials: [
//       { icon: "twitter", url: "https://twitter.com/johndoe" },
//       { icon: "linkedin", url: "https://linkedin.com/in/johndoe" },
//       { icon: "github", url: "https://github.com/johndoe" }
//     ]
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     role: "CTO",
//     image: "/api/placeholder/300/300",
//     socials: [
//       { icon: "twitter", url: "https://twitter.com/janesmith" },
//       { icon: "linkedin", url: "https://linkedin.com/in/janesmith" }
//     ]
//   }
// ];

// const SocialIcon = ({ type }) => {
//   switch (type) {
//     case "twitter": return <Twitter className="h-5 w-5" />;
//     case "linkedin": return <Linkedin className="h-5 w-5" />;
//     case "github": return <Github className="h-5 w-5" />;
//     default: return null;
//   }
// };

// const TeamMemberCard = ({ member }) => {
//   return (
//     <div className="group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 hover:shadow-two">
//       <div className="relative overflow-hidden">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
//         />
//       </div>
      
//       <div className="p-6 text-center">
//         <h3 className="mb-2 text-xl font-bold text-black">
//           {member.name}
//         </h3>
//         <p className="mb-5 text-sm font-medium text-gray-600">
//           {member.role}
//         </p>
        
//         <div className="flex items-center justify-center gap-5">
//           {member.socials.map((social, index) => (
//             <a
//               key={index}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-primary transition duration-300"
//             >
//               <SocialIcon type={social.icon} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Team = () => {
//   return (
//     <>
//       <section id="features" className="py-16 md:py-20 lg:py-28">
//         <div className="container">
//           <SectionTitle
//             title="Meet the team"
//             paragraph="Explore Our Extensive Range of Specialized and Tailored Professional Services for Your Business"
//             center
//           />

//           <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//             {teamMembers.map((member) => (
//               <TeamMemberCard key={member.id} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Team;

// CHAT GPT

import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
const teamMembers = [
  {
    id: 1,
    name: "Gift Banda",
    role: "Managing Director",
    image: "images/about/gift_banda.png",
    socials: [
      {
        name: "facebook",
        url: "https://web.facebook.com/bandagiftr?_rdc=1&_rdr#",
        icon: "images/about/icons8-facebook-50.png"
      },
      {
        name: "twitter",
        url: "https://twitter.com",
        icon: "/images/about/icons8-github-48.png"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/gift-r-banda-2b294222a/",
        icon: "images/about/icons8-linkedin-50.png"
      }
    ]
  },
  {
    id: 2,
    name: "Innocent Kumwenda",
    role: "Technical Director",
    image: "images/about/innocent_kumwenda.png",
    socials: [
      {
        name: "instagram",
        url: "https://www.instagram.com/ikay_real/",
        icon: "images/about/icons8-insta.svg"
      },
      {
        name: "github",
        url: "https://github.com/Ikay-real",
        icon: "images/about/icons8-github-48.png"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/innocent-kumwenda99",
        icon: "images/about/icons8-linkedin-50.png"
      }
    ]
  },
  {
    id: 3,
    name: "This might be you",
    role: "Explore roles",
    image: "images/about/new_member.svg",
    socials: [
      {
        name: "linkedin",
        url: "https://linkedin.com",
        icon: "images/about/icons8-search.gif"
      }
    ]
  }
];

const TeamCard = ({ name, role, image, socials }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-3 duration-300 hover:shadow-one dark:bg-dark">
      <div className="relative block h-[340px] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="mb-1 text-xl font-bold dark:text-white">{name}</h3>
        <p className="mb-4 text-sm text-gray-600">{role}</p>
        <div className="flex items-center justify-center gap-5">
          {socials.map((social) => (
            
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={`Follow on ${social.name}`}
            >
              <div className="relative h-5 w-5">
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  className="transition-all duration-300 group-hover:opacity-80"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Meet the team"
            paragraph="Explore Our Extensive Range of Specialized and Tailored Professional Services for Your Business"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;