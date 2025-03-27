
import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface LocationButtonProps {
  text: string;
  className?: string;
}

const LocationButton: React.FC<LocationButtonProps> = ({ text, className }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/location');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center justify-between w-full py-3 px-1 bg-white/5 rounded-lg",
        "transition-all duration-300 hover:opacity-80 animate-fade-in",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <MapPin className="w-8 h-8 text-purple-light" />
        <span className="text-xl font-medium">{text}</span>
      </div>
      <ChevronRight className="w-6 h-6 text-white/60" />
    </button>
  );
};

export default LocationButton;
