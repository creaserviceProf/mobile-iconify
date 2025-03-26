
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="flex justify-between items-center py-5 px-6 w-full animate-fade-in">
      <button 
        onClick={goBack}
        className="flex items-center text-white/90 hover:text-white transition-all duration-300"
      >
        <ArrowLeft className="mr-2 h-6 w-6" />
        <span className="text-xl font-medium">Retour</span>
      </button>
      
      <button className="flex flex-col justify-center items-center gap-1.5">
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
      </button>
    </nav>
  );
};

export default Navbar;
