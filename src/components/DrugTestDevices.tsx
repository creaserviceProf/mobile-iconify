
import React from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

const DrugTestDevices = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/device-produits');
  };
  
  if (isMobile) {
    return (
      <div 
        className="mt-4 mb-8 relative animate-fade-in w-full cursor-pointer"
        onClick={handleClick}
      >
        <AspectRatio ratio={16/9} className="w-full">
          <img 
            src="/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png" 
            alt="Drug Testing Devices" 
            className="w-full h-full object-contain"
          />
        </AspectRatio>
      </div>
    );
  }
  
  return (
    <div 
      className="mt-4 mb-8 relative animate-fade-in cursor-pointer"
      onClick={handleClick}
    >
      <ResizablePanelGroup direction="horizontal" className="rounded-lg overflow-hidden">
        <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
          <div className="h-full bg-transparent" />
        </ResizablePanel>
        
        <ResizablePanel defaultSize={60} minSize={40} maxSize={80}>
          <AspectRatio ratio={16/9} className="w-full">
            <img 
              src="/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png" 
              alt="Drug Testing Devices" 
              className="w-full h-full object-contain"
            />
          </AspectRatio>
        </ResizablePanel>
        
        <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
          <div className="h-full bg-transparent" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default DrugTestDevices;
