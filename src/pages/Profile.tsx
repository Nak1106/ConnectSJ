import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Save } from 'lucide-react';

import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import NavBar from '../components/NavBar';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    calstateId: '',
    age: '',
    gender: 'preferNotToSay',
    maritalStatus: 'single',
    hasPets: 'no',
    petType: '',
    languagePreference: 'en',
    familySize: '1',
    desiredJobTitle: '',
    healthIssues: '',
    isVeteran: 'no',
    race: '',
    ethnicity: '',
    educationLevel: '',
    skills: '',
    emergencyContact: '',
    housingStatus: 'temporary',
    income: '',
    benefits: '',
    transportation: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      setFormData(prevData => ({
        ...prevData,
        ...userData
      }));
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (isSaved) setIsSaved(false);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(formData));
      setIsLoading(false);
      setIsSaved(true);
      
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    }, 1000);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-primary-600 text-white p-6 pt-16 pb-8 mb-6">
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="bg-white/20 rounded-full p-3 mr-4">
            <User size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{t('profile.title')}</h1>
            <p className="text-primary-100">{formData.calstateId}</p>
          </div>
        </motion.div>
      </div>
      
      <div className="px-6">
        <motion.div variants={itemVariants}>
          <Card className="mb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="CalState ID"
                  id="calstateId"
                  name="calstateId"
                  type="text"
                  value={formData.calstateId}
                  onChange={handleChange}
                  disabled
                />
                
                <Input
                  label="Age"
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                />
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonBinary">Non-binary</option>
                    <option value="preferNotToSay">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Marital Status
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                <Input
                  label="Family Size"
                  id="familySize"
                  name="familySize"
                  type="number"
                  value={formData.familySize}
                  onChange={handleChange}
                />

                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Language Preference
                  </label>
                  <select
                    name="languagePreference"
                    value={formData.languagePreference}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="vi">Vietnamese</option>
                  </select>
                </div>

                <Input
                  label="Desired Job Title"
                  id="desiredJobTitle"
                  name="desiredJobTitle"
                  type="text"
                  value={formData.desiredJobTitle}
                  onChange={handleChange}
                />

                <Input
                  label="Health Issues"
                  id="healthIssues"
                  name="healthIssues"
                  type="text"
                  value={formData.healthIssues}
                  onChange={handleChange}
                />

                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Veteran Status
                  </label>
                  <select
                    name="isVeteran"
                    value={formData.isVeteran}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <Input
                  label="Race"
                  id="race"
                  name="race"
                  type="text"
                  value={formData.race}
                  onChange={handleChange}
                />

                <Input
                  label="Ethnicity"
                  id="ethnicity"
                  name="ethnicity"
                  type="text"
                  value={formData.ethnicity}
                  onChange={handleChange}
                />

                <Input
                  label="Education Level"
                  id="educationLevel"
                  name="educationLevel"
                  type="text"
                  value={formData.educationLevel}
                  onChange={handleChange}
                />

                <Input
                  label="Skills"
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                />

                <Input
                  label="Emergency Contact"
                  id="emergencyContact"
                  name="emergencyContact"
                  type="text"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                />

                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Housing Status
                  </label>
                  <select
                    name="housingStatus"
                    value={formData.housingStatus}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="temporary">Temporary Housing</option>
                    <option value="shelter">Shelter</option>
                    <option value="street">Street</option>
                    <option value="transitional">Transitional Housing</option>
                  </select>
                </div>

                <Input
                  label="Current Income"
                  id="income"
                  name="income"
                  type="text"
                  value={formData.income}
                  onChange={handleChange}
                />

                <Input
                  label="Benefits Received"
                  id="benefits"
                  name="benefits"
                  type="text"
                  value={formData.benefits}
                  onChange={handleChange}
                />

                <Input
                  label="Transportation"
                  id="transportation"
                  name="transportation"
                  type="text"
                  value={formData.transportation}
                  onChange={handleChange}
                />

                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-700">
                    Have Pets?
                  </label>
                  <select
                    name="hasPets"
                    value={formData.hasPets}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                {formData.hasPets === 'yes' && (
                  <Input
                    label="Pet Type"
                    id="petType"
                    name="petType"
                    type="text"
                    value={formData.petType}
                    onChange={handleChange}
                  />
                )}
              </div>
              
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                icon={<Save size={18} />}
                className={isSaved ? 'bg-success-600 hover:bg-success-700' : ''}
              >
                {isLoading ? 'Saving...' : (isSaved ? 'Saved!' : 'Save Changes')}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
      
      <NavBar onLogout={() => {}} />
    </motion.div>
  );
};

export default Profile;