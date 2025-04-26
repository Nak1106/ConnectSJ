import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  BookOpen, 
  Award, 
  Gift, 
  User, 
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';

interface NavBarProps {
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onLogout }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      path: '/dashboard',
      label: t('dashboard.findHelp'),
      icon: <Home size={24} />
    },
    { 
      path: '/resources',
      label: t('resources.title'),
      icon: <BookOpen size={24} />
    },
    { 
      path: '/incentives',
      label: t('incentives.title'),
      icon: <Award size={24} />
    },
    { 
      path: '/rewards',
      label: t('rewards.title'),
      icon: <Gift size={24} />
    },
    { 
      path: '/jobs',
      label: t('jobs.title'),
      icon: <Briefcase size={24} />
    },
    { 
      path: '/profile',
      label: t('profile.title'),
      icon: <User size={24} />
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-neutral-200 z-10">
      <div className="grid grid-cols-6 h-16">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center relative ${
              isActive(item.path) ? 'text-primary-600' : 'text-neutral-500'
            }`}
          >
            {isActive(item.path) && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute top-0 w-12 h-1 bg-primary-600 rounded-b-lg"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;