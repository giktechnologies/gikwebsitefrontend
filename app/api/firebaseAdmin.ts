// firebase.ts
// import * as admin from 'firebase-admin';
// import { ServiceAccount } from 'firebase-admin/lib/app/credential';

// // Load your service account key
// const serviceAccount = require('gikwebsite-98444-firebase-adminsdk-fbsvc-59cc51d453.json') as ServiceAccount;

// // Check if Firebase has already been initialized
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://gikwebsite-98444-default-rtdb.firebaseio.com/', // Replace with your Realtime Database URL
//   });
// }

// // Export the Realtime Database instance
// const db = admin.database();

// export { db };


import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin/lib/app/credential';

// Load your service account key
const serviceAccount = require('gikwebsite-98444-firebase-adminsdk-fbsvc-59cc51d453.json') as ServiceAccount;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
// Check if Firebase has already been initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

// Export the Realtime Database instance
const db = admin.database();

export { db };
