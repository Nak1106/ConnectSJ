import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTLPiJji6hXPy2bpmH9jNqJJMkGuUkDLk',
  authDomain: 'connectsj-68124.firebaseapp.com',
  projectId: 'connectsj-68124',
  storageBucket: 'connectsj-68124.appspot.com',
  messagingSenderId: '138081084881',
  appId: '1:138081084881:web:d66ba8b9fad596a5d0acf0',
  measurementId: 'G-NK5QHWX80D',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🚀 Firestore Access Helpers

export const getJobs = async (filters?: any) => {
  const jobsRef = collection(db, 'jobs');
  const filterKeys = Object.keys(filters || {});
  const jobsQuery = filterKeys.length
    ? query(
        jobsRef,
        ...filterKeys.map((key) => where(key, '==', filters[key]))
      )
    : jobsRef;

  const snapshot = await getDocs(jobsQuery);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getResources = async (type?: string) => {
  const resourcesRef = collection(db, 'resources');
  const q = type ? query(resourcesRef, where('type', '==', type)) : resourcesRef;
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getActivities = async () => {
  const ref = collection(db, 'activities');
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getCompletedActivities = async () => {
  const ref = collection(db, 'activities');
  const q = query(ref, where('status', '==', 'completed'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const registerForActivity = async (activityId: number) => {
  const activityDoc = doc(db, 'activities', String(activityId));
  await updateDoc(activityDoc, {
    registered: true, // this can be whatever logic you want
  });
  return { success: true };
};

export const getRewards = async () => {
  const ref = collection(db, 'rewards');
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getRedemptionHistory = async () => {
  const ref = collection(db, 'redemptions');
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const redeemReward = async (rewardId: number) => {
  const redemptionsRef = collection(db, 'redemptions');
  await addDoc(redemptionsRef, {
    rewardId,
    redeemedAt: new Date().toISOString(),
  });
  return { success: true };
};

//Test only to push For test Job
export const addTestJob = async () => {
  const jobData = {
    company: 'OpenAI',
    description: 'Create cool things with AI.',
    location: 'Remote',
    requirements: 'Passion for learning',
    salary: '$120k+',
    title: 'AI Engineer',
    type: 'Full-time',
  };

  const ref = collection(db, 'jobs');
  const docRef = await addDoc(ref, jobData);

  return { id: docRef.id, ...jobData };
};



export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  const userId = token || 'demo-user'; // Replace with decoded UID if needed
  const userDoc = doc(db, 'users', userId);
  const snapshot = await getDoc(userDoc);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const updateUserProfile = async (profileData: any) => {
  const token = localStorage.getItem('token');
  const userId = token || 'demo-user';
  const userDoc = doc(db, 'users', userId);
  await updateDoc(userDoc, profileData);
  return { success: true };
};

// Auth calls (dummy for now - replace with real Firebase Auth logic or API)
export const loginUser = async (calstateId: string, password: string) => {
  // This would typically call a serverless function or Firebase Auth
  return { success: true, token: 'demo-token', calstateId };
};

export const registerUser = async (userData: any) => {
  return { success: true, ...userData };
};
