import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 92,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 95,
        title: "Services | Software Development",
        path: "/services/item/1",
        newTab: false,
      },
      {
        id: 96,
        title: "Services | Digital Marketing",
        path: "/services/item/2",
        newTab: false,
      },
      {
        id: 97,
        title: "Services | Multimedia",
        path: "/services/item/3",
        newTab: false,
      }
    ],
  }
  ,
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 93,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;



// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//     newTab: false,
//   },
//   {
//     id: 2,
//     title: "About",
//     path: "/about",
//     newTab: false,
//   },
//   {
//     id: 92,
//     title: "Services",
//     path: "/services",
//     newTab: false,
//     submenu: [
//       {
//         id: 51,
//         title: "About Page",
//         path: "/about",
//         newTab: false,
//       },
//       {
//         id: 52,
//         title: "Contact Page",
//         path: "/contact",
//         newTab: false,
//       },
//       {
//         id: 53,
//         title: "Blog Grid Page",
//         path: "/blog",
//         newTab: false,
//       },
//       {
//         id: 54,
//         title: "Blog Sidebar Page",
//         path: "/blog-sidebar",
//         newTab: false,
//       },
//       {
//         id: 55,
//         title: "Blog Details Page",
//         path: "/blog-details",
//         newTab: false,
//       },
//       {
//         id: 56,
//         title: "Sign In Page",
//         path: "/signin",
//         newTab: false,
//       },
//       {
//         id: 57,
//         title: "Sign Up Page",
//         path: "/signup",
//         newTab: false,
//       },
//       {
//         id: 58,
//         title: "Error Page",
//         path: "/error",
//         newTab: false,
//       },
//     ],
//   }
//   ,
//   {
//     id: 33,
//     title: "Blog",
//     path: "/blog",
//     newTab: false,
//   },
//   {
//     id: 3,
//     title: "Support",
//     path: "/contact",
//     newTab: false,
//   },
//   {
//     id: 93,
//     title: "Careers",
//     path: "/careers",
//     newTab: false,
//   },
//   {
//     id: 4,
//     title: "Pages",
//     newTab: false,
//     submenu: [
//       {
//         id: 41,
//         title: "About Page",
//         path: "/about",
//         newTab: false,
//       },
//       {
//         id: 42,
//         title: "Contact Page",
//         path: "/contact",
//         newTab: false,
//       },
//       {
//         id: 43,
//         title: "Blog Grid Page",
//         path: "/blog",
//         newTab: false,
//       },
//       {
//         id: 44,
//         title: "Blog Sidebar Page",
//         path: "/blog-sidebar",
//         newTab: false,
//       },
//       {
//         id: 45,
//         title: "Blog Details Page",
//         path: "/blog-details",
//         newTab: false,
//       },
//       {
//         id: 46,
//         title: "Sign In Page",
//         path: "/signin",
//         newTab: false,
//       },
//       {
//         id: 47,
//         title: "Sign Up Page",
//         path: "/signup",
//         newTab: false,
//       },
//       {
//         id: 48,
//         title: "Error Page",
//         path: "/error",
//         newTab: false,
//       },
//     ],
//   },
// ];
// export default menuData;
