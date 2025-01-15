/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;

// {
//   "functions": [
//     {

//       "source": "functions",
//       "codebase": "default",
//       "ignore": [
//         "node_modules",
//         ".git",
//         "firebase-debug.log",
//         "firebase-debug.*.log",
//         "*.local"
//       ],
//       "predeploy": [
//         "npm --prefix \"$RESOURCE_DIR\" run lint",
//         "npm --prefix \"$RESOURCE_DIR\" run build"
//       ]
//     }
//   ],
//   "hosting": {
//     "public": "public",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ]
//   },
//   "database": {
//     "rules": "database.rules.json"
//   }
// }
