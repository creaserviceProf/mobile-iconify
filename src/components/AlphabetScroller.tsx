
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface AlphabetScrollerProps {
  onSelectLetter: (letter: string) => void;
  activeLetter: string;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetScroller = ({ onSelectLetter, activeLetter }: AlphabetScrollerProps) => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
      <div className="bg-drugbuster-darkgray rounded-l-md py-2 shadow-lg border-l border-t border-b border-white/10">
        <div className="flex flex-col items-center justify-center">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => onSelectLetter(letter)}
              className={cn(
                "w-6 h-6 text-xs font-medium flex items-center justify-center transition-colors",
                activeLetter === letter 
                  ? "text-purple-light"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlphabetScroller;
