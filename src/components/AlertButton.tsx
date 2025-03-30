
import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

interface AlertButtonProps {
  text: string;
  className?: string;
}

const AlertButton: React.FC<AlertButtonProps> = ({ text, className }) => {
  const [showRedCircle, setShowRedCircle] = useState(false);
  const isMobile = useIsMobile();
  
  const handleClick = () => {
    toast.info("Alerte signalée", {
      description: "Votre alerte a été envoyée aux utilisateurs à proximité",
      position: "top-center",
    });
    
    setShowRedCircle(true);
  };
  
  const handleCircleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the button click again
    setShowRedCircle(false);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center gap-4 py-4 px-6 rounded-full border",
          "border-purple-light/50 bg-white/5 transition-all duration-300",
          "hover:bg-purple-light/10 active:scale-[0.98] animate-fade-in",
          className
        )}
      >
        <AlertTriangle className="w-6 h-6 text-purple-light" />
        <span className="text-lg font-medium">{text}</span>
      </button>
      
      {showRedCircle && (
        <div 
          onClick={handleCircleClick}
          className={cn(
            "ml-4 bg-red-500 border-4 border-white rounded-full cursor-pointer",
            "animate-fade-in transition-all duration-300"
          )}
          style={{
            width: '48px',
            height: '48px',
            aspectRatio: '1/1'
          }}
        />
      )}
    </div>
  );
};

export default AlertButton;
