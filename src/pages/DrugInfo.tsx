
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { ScrollArea } from '@/components/ui/scroll-area';
import DrugCard, { Drug } from '@/components/DrugCard';
import AlphabetScroller from '@/components/AlphabetScroller';
import { Search } from 'lucide-react';

// Mock data for drugs
const drugsMockData: Drug[] = [
  { id: '1', name: 'Alcool', category: 'Dépresseur', dangerLevel: 'medium', image: '/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png', letterCategory: 'A' },
  { id: '2', name: 'Amphétamines', category: 'Stimulant', dangerLevel: 'high', image: '/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png', letterCategory: 'A' },
  { id: '3', name: 'Benzodiazépines', category: 'Dépresseur', dangerLevel: 'medium', image: '/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png', letterCategory: 'B' },
  { id: '4', name: 'Cannabis', category: 'Cannabinoïde', dangerLevel: 'low', image: '/lovable-uploads/f91830d6-f8b7-4c39-9b76-44ce8bff0d23.png', letterCategory: 'C' },
  { id: '5', name: 'Cocaïne', category: 'Stimulant', dangerLevel: 'high', image: '/lovable-uploads/f0d5f2c1-67bc-4b96-aad1-611e5ecc072b.png', letterCategory: 'C' },
  { id: '6', name: 'MDMA (Ecstasy)', category: 'Stimulant/Psychédélique', dangerLevel: 'high', image: '/lovable-uploads/62d7a428-85f6-4958-8b3f-4b4d669e1ecd.png', letterCategory: 'M' },
  { id: '7', name: 'DMT', category: 'Psychédélique', dangerLevel: 'medium', image: '/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png', letterCategory: 'D' },
  { id: '8', name: 'GHB/GBL', category: 'Dépresseur', dangerLevel: 'high', image: '/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png', letterCategory: 'G' },
  { id: '9', name: 'Héroïne', category: 'Opioïde', dangerLevel: 'high', image: '/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png', letterCategory: 'H' },
  { id: '10', name: 'Kétamine', category: 'Dissociatif', dangerLevel: 'medium', image: '/lovable-uploads/f91830d6-f8b7-4c39-9b76-44ce8bff0d23.png', letterCategory: 'K' },
  { id: '11', name: 'LSD', category: 'Psychédélique', dangerLevel: 'medium', image: '/lovable-uploads/f0d5f2c1-67bc-4b96-aad1-611e5ecc072b.png', letterCategory: 'L' },
  { id: '12', name: 'Méthamphétamine', category: 'Stimulant', dangerLevel: 'high', image: '/lovable-uploads/62d7a428-85f6-4958-8b3f-4b4d669e1ecd.png', letterCategory: 'M' },
  { id: '13', name: 'Nicotine', category: 'Stimulant', dangerLevel: 'medium', image: '/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png', letterCategory: 'N' },
  { id: '14', name: 'Opium', category: 'Opioïde', dangerLevel: 'high', image: '/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png', letterCategory: 'O' },
  { id: '15', name: 'PCP', category: 'Dissociatif', dangerLevel: 'high', image: '/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png', letterCategory: 'P' },
  { id: '16', name: 'Psilocybine', category: 'Psychédélique', dangerLevel: 'medium', image: '/lovable-uploads/f91830d6-f8b7-4c39-9b76-44ce8bff0d23.png', letterCategory: 'P' },
  { id: '17', name: 'Research Chemicals', category: 'Divers', dangerLevel: 'high', image: '/lovable-uploads/f0d5f2c1-67bc-4b96-aad1-611e5ecc072b.png', letterCategory: 'R' },
  { id: '18', name: 'Salvia', category: 'Psychédélique', dangerLevel: 'medium', image: '/lovable-uploads/62d7a428-85f6-4958-8b3f-4b4d669e1ecd.png', letterCategory: 'S' },
  { id: '19', name: 'Tramadol', category: 'Opioïde', dangerLevel: 'medium', image: '/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png', letterCategory: 'T' },
  { id: '20', name: 'Xanax', category: 'Dépresseur', dangerLevel: 'medium', image: '/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png', letterCategory: 'X' },
];

// Group drugs by their first letter
const groupDrugsByLetter = (drugs: Drug[]) => {
  const grouped: Record<string, Drug[]> = {};
  
  drugs.forEach(drug => {
    const letter = drug.letterCategory;
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(drug);
  });
  
  return grouped;
};

const DrugInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetter, setActiveLetter] = useState('A');
  const [filteredDrugs, setFilteredDrugs] = useState<Record<string, Drug[]>>(groupDrugsByLetter(drugsMockData));
  const letterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  useEffect(() => {
    // Filter drugs based on search term
    if (searchTerm) {
      const filtered = drugsMockData.filter(drug => 
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDrugs(groupDrugsByLetter(filtered));
    } else {
      setFilteredDrugs(groupDrugsByLetter(drugsMockData));
    }
  }, [searchTerm]);
  
  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    const element = letterRefs.current[letter];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-drugbuster-background pb-16">
      <Navbar />
      
      <div className="px-5 pt-2 pb-4">
        <h1 className="text-2xl font-bold text-white mb-4">Informations sur les drogues</h1>
        
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher une substance..."
            className="w-full bg-drugbuster-darkgray border border-white/10 rounded-md py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-light"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-5 pb-5">
        {Object.keys(filteredDrugs).sort().map(letter => (
          <div key={letter} ref={el => letterRefs.current[letter] = el}>
            <div className="sticky top-0 bg-drugbuster-background py-2 z-10">
              <h2 className="text-xl font-bold text-white">{letter}</h2>
            </div>
            <div className="mb-6">
              {filteredDrugs[letter].map(drug => (
                <DrugCard key={drug.id} drug={drug} />
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
      
      <AlphabetScroller 
        onSelectLetter={scrollToLetter}
        activeLetter={activeLetter}
      />
      
      <BottomNavbar />
    </div>
  );
};

export default DrugInfo;
