
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import SafePlaceCard from '@/components/SafePlaceCard';
import { Search, Sliders } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface SafePlaceProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
  address: string;
  distance: string;
}

const SafePlaces = () => {
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
  
  // Données fictives pour les bars
  const safePlaces: SafePlaceProps[] = [
    {
      name: "Le Jardin Enchanté",
      description: "Un bar à l'ambiance feutrée avec un personnel bienveillant formé à la gestion des situations à risque. Surveillants à l'entrée vérifiant discrètement l'état des clients.",
      image: "/lovable-uploads/f91830d6-f8b7-4c39-9b76-44ce8bff0d23.png",
      rating: 4.8,
      reviews: 42,
      tags: ["calme", "végétal", "surveillance"],
      address: "23 rue des Fleurs, Paris",
      distance: "600m"
    },
    {
      name: "La Mousse Violette",
      description: "Un bar populaire où l'équipe teste gratuitement vos boissons sur demande. Zones de repos et personnel formé aux premiers secours. Excellente surveillance.",
      image: "/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png",
      rating: 4.6,
      reviews: 87,
      tags: ["tests gratuits", "animé", "premiers secours"],
      address: "45 avenue Gambetta, Paris",
      distance: "1.2km"
    },
    {
      name: "Purple Night",
      description: "Célèbre pour sa politique stricte contre le harcèlement et ses barmans experts en détection de substances. Propose de l'eau gratuite et une équipe médicale présente les soirs de weekend.",
      image: "/lovable-uploads/62d7a428-85f6-4958-8b3f-4b4d669e1ecd.png",
      rating: 4.9,
      reviews: 124,
      tags: ["danse", "sécurisé", "équipe médicale"],
      address: "8 boulevard Saint-Michel, Paris",
      distance: "2.5km"
    },
    {
      name: "L'Échappée",
      description: "Un bar cosy offrant un espace tranquille loin de la foule. Personnel attentif et politique stricte de vérification des boissons. Idéal pour des soirées calmes.",
      image: "/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png",
      rating: 4.7,
      reviews: 56,
      tags: ["cosy", "tranquille", "vérification"],
      address: "17 rue de la Paix, Paris",
      distance: "850m"
    }
  ];

  // Statistiques des lieux sûrs
  const safetyStats = [
    { name: "Lieux vérifiés", value: "24" },
    { name: "Tests effectués", value: "312" },
    { name: "Incidents signalés", value: "2" },
    { name: "Équipes formées", value: "18" }
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <Navbar />
      
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2 text-left text-white animate-fade-in">
          Lieux sûrs
        </h1>
        <p className="text-gray-300 text-left mb-4 animate-fade-in">
          Bars et clubs ayant adopté nos mesures de sécurité
        </p>

        {/* Statistiques */}
        <div className="mb-6 grid grid-cols-2 gap-2 animate-fade-in">
          <Table className="border border-white/10 rounded-lg overflow-hidden">
            <TableBody>
              {safetyStats.slice(0, 2).map((stat, index) => (
                <TableRow key={index} className="border-white/10">
                  <TableCell className="py-2 text-left text-gray-300">{stat.name}</TableCell>
                  <TableCell className="py-2 text-right font-bold text-purple-light">{stat.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table className="border border-white/10 rounded-lg overflow-hidden">
            <TableBody>
              {safetyStats.slice(2, 4).map((stat, index) => (
                <TableRow key={index} className="border-white/10">
                  <TableCell className="py-2 text-left text-gray-300">{stat.name}</TableCell>
                  <TableCell className="py-2 text-right font-bold text-purple-light">{stat.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-6 animate-fade-in">
          <input
            type="text"
            placeholder="Rechercher un lieu..."
            className="w-full bg-drugbuster-darkgray border border-white/10 rounded-full py-2 pl-10 pr-4 text-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <button className="absolute right-3 top-2 h-6 w-6 flex items-center justify-center text-gray-400">
            <Sliders className="h-4 w-4" />
          </button>
        </div>
        
        {/* Liste des lieux sûrs */}
        <div className="space-y-0" ref={elementsRef}>
          {safePlaces.map((place, index) => (
            <div key={index} className="animate-on-mount">
              <SafePlaceCard {...place} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination className="mt-6 mb-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Bottom action button */}
      <div className="fixed bottom-20 right-4">
        <button 
          className="bg-purple-light text-white p-4 rounded-full shadow-lg hover:bg-purple-dark transition-colors animate-fade-in"
          aria-label="Ajouter un lieu sûr"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-plus">
            <path d="M9 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
            <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"/>
            <path d="M16 8h-2m0 0h-2m2 0V6m0 2v2"/>
          </svg>
        </button>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default SafePlaces;
