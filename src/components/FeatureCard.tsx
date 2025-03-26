
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
        "flex items-center gap-4 p-5 bg-drugbuster-card rounded-xl transition-all duration-300",
        "hover:bg-opacity-80 active:scale-[0.98] card-glow animate-fade-in",
        className
      )}
    >
      <div className="text-purple-light icon-shadow">
        {icon}
      </div>
      <span className="text-left text-lg font-medium">{title}</span>
    </button>
  );
};

export default FeatureCard;
