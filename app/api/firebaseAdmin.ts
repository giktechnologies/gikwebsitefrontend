// firebase.ts
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin/lib/app/credential';

// Load your service account key
const serviceAccount = require('gikwebsite-98444-firebase-adminsdk-b7ssj-7ed7f9ff75.json') as ServiceAccount;

// Check if Firebase has already been initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://gikwebsite-98444-default-rtdb.firebaseio.com/', // Replace with your Realtime Database URL
  });
}

// Export the Realtime Database instance
const db = admin.database();

export { db };
