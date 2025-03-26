
import React from 'react';
import { Home, User, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      icon: (
        <div className="flex flex-col items-center space-y-1">
          <div className="flex gap-1">
            <div className="w-2.5 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-2.5 h-6 bg-gray-400 rounded-md"></div>
          </div>
          <span className="text-xs">Devices</span>
        </div>
      ),
      path: '/devices'
    },
    {
      icon: (
        <div className="flex flex-col items-center space-y-1">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
          </svg>
          <span className="text-xs">My Health</span>
        </div>
      ),
      path: '/health'
    },
    {
      icon: (
        <div className="flex flex-col items-center space-y-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </div>
      ),
      path: '/'
    },
    {
      icon: (
        <div className="flex flex-col items-center space-y-1">
          <User className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </div>
      ),
      path: '/account'
    },
    {
      icon: (
        <div className="flex flex-col items-center space-y-1">
          <Settings className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </div>
      ),
      path: '/settings'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-drugbuster-darkgray border-t border-white/10 px-2 py-3">
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={cn(
              "nav-icon p-2 rounded-lg transition-all duration-300",
              isActive(item.path) 
                ? "text-purple-light" 
                : "text-gray-500 hover:text-gray-300"
            )}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
