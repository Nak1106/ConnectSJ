// Mock data that will be replaced with actual API endpoints
export const mockResources = [
  {
    id: 1,
    name: 'HomeFirst Shelter',
    type: 'shelter',
    address: '2011 Little Orchard St, San Jose, CA 95125',
    phone: '(408) 539-2100',
    hours: '24/7',
    distance: '0.8 mi',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Second Harvest Food Bank',
    type: 'food',
    address: '4001 N 1st St, San Jose, CA 95134',
    phone: '(408) 266-8866',
    hours: 'Mon-Fri 9AM-4PM',
    distance: '1.2 mi',
    image: 'https://images.pexels.com/photos/6994937/pexels-photo-6994937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Valley Medical Center',
    type: 'healthcare',
    address: '751 S Bascom Ave, San Jose, CA 95128',
    phone: '(408) 885-5000',
    hours: '24/7',
    distance: '2.4 mi',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'VTA Transit Center',
    type: 'transportation',
    address: '1 S Market St, San Jose, CA 95113',
    phone: '(408) 321-2300',
    hours: '5AM-1AM',
    distance: '0.5 mi',
    image: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const mockActivities = [
  {
    id: 1,
    name: 'Community Cleanup',
    date: '2025-04-20',
    location: 'Guadalupe River Park',
    points: 50,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Tree Planting',
    date: '2025-04-27',
    location: 'Emma Prusch Farm Park',
    points: 75,
    image: 'https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Volunteer at Food Bank',
    date: '2025-05-03',
    location: 'Second Harvest Food Bank',
    points: 100,
    image: 'https://images.pexels.com/photos/6646882/pexels-photo-6646882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const mockCompletedActivities = [
  {
    id: 101,
    name: 'Park Cleanup',
    date: '2025-03-15',
    location: 'Alum Rock Park',
    points: 50
  },
  {
    id: 102,
    name: 'Referral Bonus',
    date: '2025-03-22',
    location: 'Online',
    points: 25
  }
];

export const mockRewards = [
  {
    id: 1,
    name: 'Food Coupon',
    description: '$10 voucher for local restaurants',
    pointsCost: 50,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'food'
  },
  {
    id: 2,
    name: 'Haircut Voucher',
    description: 'Free haircut at participating salons',
    pointsCost: 75,
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'services'
  },
  {
    id: 3,
    name: 'Thrift Shop Credit',
    description: '$15 credit at Community Thrift',
    pointsCost: 60,
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'clothing'
  },
  {
    id: 4,
    name: 'Bus Pass',
    description: '7-day VTA transit pass',
    pointsCost: 100,
    image: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'transportation'
  }
];

export const mockRedemptionHistory = [
  {
    id: 101,
    rewardName: 'Food Coupon',
    date: '2025-03-10',
    pointsCost: 50,
    status: 'completed'
  },
  {
    id: 102,
    rewardName: 'Bus Pass',
    date: '2025-02-22',
    pointsCost: 100,
    status: 'completed'
  }
];

export const mockJobs = [
  {
    id: 1,
    title: 'Warehouse Associate',
    company: 'Amazon',
    location: 'San Jose, CA',
    type: 'Full-time',
    salary: '$18-22/hr',
    description: 'Looking for motivated individuals to join our warehouse team.',
    requirements: ['Able to lift 50 lbs', 'Flexible schedule', 'Reliable transportation']
  },
  {
    id: 2,
    title: 'Kitchen Staff',
    company: 'Chipotle',
    location: 'Santa Clara, CA',
    type: 'Part-time',
    salary: '$17-20/hr',
    description: 'Join our kitchen team and help prepare fresh, delicious meals.',
    requirements: ['Food handling experience', 'Weekend availability', 'Team player']
  },
  {
    id: 3,
    title: 'Retail Associate',
    company: 'Target',
    location: 'San Jose, CA',
    type: 'Full-time',
    salary: '$16-19/hr',
    description: 'Customer service focused retail position with growth opportunities.',
    requirements: ['Customer service experience', 'Flexible schedule', 'Basic math skills']
  }
];