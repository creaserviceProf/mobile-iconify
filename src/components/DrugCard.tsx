
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { ArrowRight, AlertTriangle } from "lucide-react";

export interface Drug {
  id: string;
  name: string;
  image: string;
  category: string;
  dangerLevel: 'low' | 'medium' | 'high';
  letterCategory: string;
}

interface DrugCardProps {
  drug: Drug;
}

const DrugCard = ({ drug }: DrugCardProps) => {
  const getDangerColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="bg-drugbuster-card border-white/10 mb-4 animate-fade-in">
      <div className="flex items-center p-4">
        <div className="w-16 h-16 overflow-hidden rounded-md mr-4 flex-shrink-0">
          <AspectRatio ratio={1/1}>
            <img src={drug.image} alt={drug.name} className="object-cover w-full h-full" />
          </AspectRatio>
        </div>
        
        <CardContent className="p-0 flex-1">
          <h3 className="text-base font-bold text-white">{drug.name}</h3>
          <p className="text-xs text-gray-400">{drug.category}</p>
          
          <div className="flex items-center justify-between mt-2">
            <div className={cn(
              "flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs",
              getDangerColor(drug.dangerLevel)
            )}>
              <AlertTriangle className="w-3 h-3" />
              <span>Niveau {drug.dangerLevel === 'high' ? 'élevé' : drug.dangerLevel === 'medium' ? 'modéré' : 'faible'}</span>
            </div>
            
            <button className="flex items-center text-purple-light">
              <span className="text-xs mr-1">Détails</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default DrugCard;
