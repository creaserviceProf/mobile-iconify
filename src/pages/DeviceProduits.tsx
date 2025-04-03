
import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Camera, Battery, Check, X, AlertTriangle } from 'lucide-react';

type DeviceStatus = 'online' | 'offline' | 'warning';

interface Device {
  id: string;
  name: string;
  image: string;
  status: DeviceStatus;
  batteryLevel: number;
  lastConnection: string;
  description: string;
}

const devices: Device[] = [
  {
    id: '1',
    name: 'Alpha Test Kit',
    image: '/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png',
    status: 'online',
    batteryLevel: 82,
    lastConnection: '2025-04-03 08:45',
    description: 'Kit de test standard pour analyse rapide de substances',
  },
  {
    id: '2',
    name: 'Beta Detector',
    image: '/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png',
    status: 'warning',
    batteryLevel: 15,
    lastConnection: '2025-04-03 07:30',
    description: 'Détecteur avancé pour substances multiples',
  },
  {
    id: '3',
    name: 'Gamma Scanner',
    image: '/lovable-uploads/62d7a428-85f6-4958-8b3f-4b4d669e1ecd.png',
    status: 'offline',
    batteryLevel: 0,
    lastConnection: '2025-04-02 15:20',
    description: 'Scanner haute précision pour analyse complète',
  },
  {
    id: '4',
    name: 'Delta Analyzer',
    image: '/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png',
    status: 'online',
    batteryLevel: 95,
    lastConnection: '2025-04-03 09:15',
    description: 'Analyseur portable pour détection rapide',
  }
];

const DeviceStatusBadge = ({ status }: { status: DeviceStatus }) => {
  switch (status) {
    case 'online':
      return (
        <Badge className="bg-green-500 hover:bg-green-600">
          <Check className="w-3 h-3 mr-1" /> En ligne
        </Badge>
      );
    case 'offline':
      return (
        <Badge variant="destructive">
          <X className="w-3 h-3 mr-1" /> Hors ligne
        </Badge>
      );
    case 'warning':
      return (
        <Badge className="bg-amber-500 hover:bg-amber-600">
          <AlertTriangle className="w-3 h-3 mr-1" /> Attention
        </Badge>
      );
    default:
      return null;
  }
};

const BatteryIndicator = ({ level }: { level: number }) => {
  let color = "text-green-500";
  
  if (level < 20) {
    color = "text-red-500";
  } else if (level < 50) {
    color = "text-amber-500";
  }
  
  return (
    <div className="flex items-center">
      <Battery className={`mr-2 ${color}`} />
      <span className={color}>{level}%</span>
    </div>
  );
};

const DeviceCard = ({ device }: { device: Device }) => {
  return (
    <Card className="w-full glass-effect card-glow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{device.name}</CardTitle>
          <DeviceStatusBadge status={device.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 bg-black/20 rounded-md overflow-hidden">
          <img 
            src={device.image} 
            alt={device.name} 
            className="w-full h-32 object-contain"
          />
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Batterie:</span>
            <BatteryIndicator level={device.batteryLevel} />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Dernière connexion:</span>
            <span>{device.lastConnection}</span>
          </div>
          
          <p className="text-xs text-slate-300 mt-2">{device.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const DeviceProduits = () => {
  return (
    <div className="relative min-h-screen pb-0 p-[10px] flex flex-col">
      <Navbar />
      
      <h1 className="text-4xl font-bold tracking-tight animate-fade-in m-0 mb-4">
        ÉQUIPEMENTS DE TEST
      </h1>
      
      <ScrollArea className="flex-1 -mx-[10px] px-[10px]">
        <div className="space-y-6 pb-20">
          <Carousel className="w-full max-w-full mb-6">
            <CarouselContent>
              {devices.map((device) => (
                <CarouselItem key={device.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src={device.image} 
                      alt={device.name} 
                      className="w-full aspect-video object-contain rounded-lg bg-black/20"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
          
          <h2 className="text-2xl font-semibold tracking-tight animate-fade-in mb-4">
            Statut des appareils
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold tracking-tight animate-fade-in my-4">
            Tableau récapitulatif
          </h2>
          
          <Card className="glass-effect card-glow">
            <CardContent className="p-4">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Appareil</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Batterie</TableHead>
                    <TableHead>Dernière connexion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.map((device) => (
                    <TableRow key={device.id}>
                      <TableCell className="font-medium">{device.name}</TableCell>
                      <TableCell><DeviceStatusBadge status={device.status} /></TableCell>
                      <TableCell><BatteryIndicator level={device.batteryLevel} /></TableCell>
                      <TableCell>{device.lastConnection}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      
      <BottomNavbar />
    </div>
  );
};

export default DeviceProduits;
