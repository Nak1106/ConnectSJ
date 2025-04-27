// firebaseAdmin.ts
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // OR use service account JSON
  });
}

const db = admin.firestore();

export { admin, db };
