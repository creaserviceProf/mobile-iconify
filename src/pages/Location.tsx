
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { MapPin, Users, Search } from 'lucide-react';

const Location = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading of map data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen pb-20">
      <div className="px-6">
        <Navbar />
        
        <h1 className="text-3xl font-bold mt-6 mb-8 tracking-tight animate-fade-in">
          Localisation des amis
        </h1>
        
        <div className="relative w-full h-[60vh] bg-drugbuster-darkgray rounded-xl overflow-hidden mb-6">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-t-2 border-purple-light rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-drugbuster-darkgray/20 to-drugbuster-darkgray/0"></div>
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <button className="p-3 bg-drugbuster-black rounded-full shadow-lg">
                  <Search className="w-5 h-5 text-gray-300" />
                </button>
                <button className="p-3 bg-drugbuster-black rounded-full shadow-lg">
                  <Users className="w-5 h-5 text-gray-300" />
                </button>
              </div>
              
              <div className="absolute bottom-6 left-0 right-0 px-6">
                <div className="bg-drugbuster-black/80 backdrop-blur-md p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-light/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <p className="font-medium text-white">3 amis à proximité</p>
                      <p className="text-sm text-gray-400">Dans un rayon de 500m</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Markers */}
              <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-purple-light rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-purple-light rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-purple-light rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-purple-light rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              <div className="absolute right-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-purple-light rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-purple-light rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="space-y-4 animate-fade-in">
          <div className="bg-drugbuster-card p-4 rounded-xl">
            <h3 className="font-medium mb-2">Partager ma position</h3>
            <p className="text-sm text-gray-400">Permettre à vos amis de voir votre position en temps réel</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-purple-light font-medium">Activé</span>
              <div className="w-12 h-6 bg-purple-light rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-drugbuster-card p-4 rounded-xl">
            <h3 className="font-medium mb-2">Notifications de proximité</h3>
            <p className="text-sm text-gray-400">Recevoir une alerte quand un ami est proche</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-purple-light font-medium">Activé</span>
              <div className="w-12 h-6 bg-purple-light rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Location;
