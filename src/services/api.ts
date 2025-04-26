const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

// Auth API calls
export const loginUser = async (calstateId: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ calstateId, password }),
  });
  return handleResponse(response);
};

export const registerUser = async (userData: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Resources API calls
export const getResources = async (type?: string) => {
  const url = type ? `${API_BASE_URL}/resources?type=${type}` : `${API_BASE_URL}/resources`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

// Activities API calls
export const getActivities = async () => {
  const response = await fetch(`${API_BASE_URL}/activities`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

export const getCompletedActivities = async () => {
  const response = await fetch(`${API_BASE_URL}/activities/completed`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

export const registerForActivity = async (activityId: number) => {
  const response = await fetch(`${API_BASE_URL}/activities/${activityId}/register`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}` 
    },
  });
  return handleResponse(response);
};

// Rewards API calls
export const getRewards = async () => {
  const response = await fetch(`${API_BASE_URL}/rewards`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

export const getRedemptionHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/rewards/history`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

export const redeemReward = async (rewardId: number) => {
  const response = await fetch(`${API_BASE_URL}/rewards/${rewardId}/redeem`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}` 
    },
  });
  return handleResponse(response);
};

// Jobs API calls
export const getJobs = async (filters?: any) => {
  const queryString = filters ? `?${new URLSearchParams(filters).toString()}` : '';
  const response = await fetch(`${API_BASE_URL}/jobs${queryString}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

// User Profile API calls
export const getUserProfile = async () => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return handleResponse(response);
};

export const updateUserProfile = async (profileData: any) => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}` 
    },
    body: JSON.stringify(profileData),
  });
  return handleResponse(response);
};