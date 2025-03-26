
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface AlertButtonProps {
  text: string;
  className?: string;
}

const AlertButton: React.FC<AlertButtonProps> = ({ text, className }) => {
  const handleClick = () => {
    toast.info("Alerte signalée", {
      description: "Votre alerte a été envoyée aux utilisateurs à proximité",
      position: "top-center",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-4 py-4 px-6 rounded-full border",
        "border-purple-light/50 transition-all duration-300",
        "hover:bg-purple-light/10 active:scale-[0.98] animate-fade-in",
        className
      )}
    >
      <AlertTriangle className="w-6 h-6 text-purple-light" />
      <span className="text-lg font-medium">{text}</span>
    </button>
  );
};

export default AlertButton;
