
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import LocationButton from '@/components/LocationButton';
import AlertButton from '@/components/AlertButton';
import FeatureCard from '@/components/FeatureCard';
import BottomNavbar from '@/components/BottomNavbar';
import DrugTestDevices from '@/components/DrugTestDevices';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Wine, Pill, Check } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementsRef.current) {
      const elements = elementsRef.current.querySelectorAll('.animate-on-mount');
      
      elements.forEach((el, index) => {
        (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        (el as HTMLElement).classList.add('animate-slide-in');
      });
    }
  }, []);
  
  return (
   <div className="relative min-h-screen pb-0 p-[10px]">
  <div className="p-0 m-0">
    <Navbar />
    
    <h1 className="text-5xl font-bold tracking-tight animate-fade-in m-0">
      DRUGBUSTER
    </h1>
    
    <div className="space-y-6" ref={elementsRef}>
      <LocationButton 
        text="localisation des amis" 
        className="animate-on-mount"
      />
      
      <AlertButton 
        text="signaler alerte" 
        className="animate-on-mount"
      />
      
      <DrugTestDevices />
      
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          icon={<MessageSquare className="h-7 w-7" />}
          title="expériences de la communauté"
          onClick={() => navigate('/community')}
          className="animate-on-mount"
        />
        
        <FeatureCard
          icon={<Wine className="h-7 w-7" />}
          title="lieux sûrs"
          onClick={() => navigate('/safe-places')}
          className="animate-on-mount"
        />
        
        <FeatureCard
          icon={<Pill className="h-7 w-7" />}
          title="informations sur les drogues"
          onClick={() => navigate('/drug-info')}
          className="animate-on-mount"
        />
        
        <FeatureCard
          icon={<Check className="h-7 w-7" />}
          title="consignes et procédures"
          onClick={() => navigate('/guidelines')}
          className="animate-on-mount"
        />
      </div>
    </div>
  </div>
  
  <BottomNavbar />
</div>

  );
};

export default Index;
