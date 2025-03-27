
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  onClick, 
  className 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-3 p-4 h-32 bg-white/5 rounded-xl transition-all duration-300",
        "hover:bg-opacity-80 active:scale-[0.98] card-glow animate-fade-in text-center",
        className
      )}
    >
      <div className="text-purple-light icon-shadow">
        {icon}
      </div>
      <span className="text-center text-sm font-medium line-clamp-2">{title}</span>
    </button>
  );
};

export default FeatureCard;
