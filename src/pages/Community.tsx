
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Flag, MessageSquare, Repeat } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  name: string;
  handle: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
  reposts: number;
  comments: number;
  tags: string[];
}

const CommunityPost: React.FC<TestimonialProps> = ({
  name,
  handle,
  avatar,
  content,
  time,
  likes,
  reposts,
  comments,
  tags
}) => {
  const [liked, setLiked] = React.useState(false);
  const [reposted, setReposted] = React.useState(false);

  return (
    <Card className="bg-drugbuster-card border-white/10 mb-4 animate-fade-in">
      <CardHeader className="flex flex-row items-start gap-3 p-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-purple-dark text-white">
            {name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{name}</span>
            <span className="text-sm text-gray-400">@{handle}</span>
          </div>
          <div className="text-xs text-gray-400">{time}</div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-left">
        <p className="text-white">{content}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-purple-dark/40 text-purple-light hover:bg-purple-dark"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-white/10 p-2 flex justify-between">
        <button
          className={cn(
            "flex items-center gap-1 p-2 rounded-full transition-colors",
            liked ? "text-red-500" : "text-gray-400 hover:text-red-500"
          )}
          onClick={() => setLiked(!liked)}
        >
          <Heart className="h-5 w-5" fill={liked ? "currentColor" : "none"} />
          <span className="text-xs">{liked ? likes + 1 : likes}</span>
        </button>
        
        <button
          className={cn(
            "flex items-center gap-1 p-2 rounded-full transition-colors",
            reposted ? "text-green-500" : "text-gray-400 hover:text-green-500"
          )}
          onClick={() => setReposted(!reposted)}
        >
          <Repeat className="h-5 w-5" />
          <span className="text-xs">{reposted ? reposts + 1 : reposts}</span>
        </button>
        
        <button
          className="flex items-center gap-1 p-2 rounded-full text-gray-400 hover:text-blue-500 transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs">{comments}</span>
        </button>
        
        <button
          className="flex items-center gap-1 p-2 rounded-full text-gray-400 hover:text-yellow-500 transition-colors"
        >
          <Flag className="h-5 w-5" />
        </button>
      </CardFooter>
    </Card>
  );
};

const Community = () => {
  const navigate = useNavigate();
  
  // Données fictives pour les témoignages
  const testimonials: TestimonialProps[] = [
    {
      name: "Alex Durant",
      handle: "alexd",
      avatar: "/lovable-uploads/f0d5f2c1-67bc-4b96-aad1-611e5ecc072b.png",
      content: "J'ai testé le détecteur DrugBuster lors d'une soirée la semaine dernière. Résultats précis en 2 minutes ! Vraiment rassurant de pouvoir vérifier ce qu'on consomme.",
      time: "il y a 2 heures",
      likes: 24,
      reposts: 7,
      comments: 3,
      tags: ["test", "sécurité", "prévention"]
    },
    {
      name: "Marie Lopez",
      handle: "marie_l",
      avatar: "/lovable-uploads/06dc8068-a4c7-456e-b50d-a3339bc0091f.png",
      content: "La fonctionnalité de localisation m'a permis de retrouver mon ami qui était complètement perdu après avoir consommé. Merci DrugBuster, vous avez peut-être sauvé une vie ce soir-là.",
      time: "il y a 1 jour",
      likes: 56,
      reposts: 14,
      comments: 8,
      tags: ["urgence", "localisation", "témoignage"]
    },
    {
      name: "Thomas Martin",
      handle: "tmartin",
      avatar: "",
      content: "Les informations sur les substances sont très complètes et objectives. Parfait pour éduquer sans juger. Je recommande à tous ceux qui veulent comprendre les risques réels.",
      time: "il y a 3 jours",
      likes: 31,
      reposts: 9,
      comments: 12,
      tags: ["information", "éducation", "réduction des risques"]
    },
    {
      name: "Sofia Belka",
      handle: "sofiab",
      avatar: "",
      content: "J'ai utilisé le bouton d'alerte quand un ami a eu une mauvaise réaction. Les conseils fournis par l'app m'ont guidé en attendant les secours. Indispensable!",
      time: "il y a 1 semaine",
      likes: 47,
      reposts: 23,
      comments: 5,
      tags: ["alerte", "secours", "conseils"]
    },
    {
      name: "Léo Dubois",
      handle: "leo_d",
      avatar: "",
      content: "Premier festival avec DrugBuster ce weekend. L'app a identifié une substance dangereuse qui circulait. Information partagée instantanément avec tous les utilisateurs à proximité. Service public!",
      time: "il y a 2 semaines",
      likes: 82,
      reposts: 41,
      comments: 16,
      tags: ["festival", "alerte", "communauté"]
    }
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <Navbar />
      
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2 text-left text-white animate-fade-in">
          Expériences de la communauté
        </h1>
        <p className="text-gray-300 text-left mb-6 animate-fade-in">
          Témoignages et retours d'expérience des utilisateurs DrugBuster
        </p>
        
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-on-mount" style={{ animationDelay: `${index * 0.1}s` }}>
              <CommunityPost {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-20 right-4">
        <button 
          className="bg-purple-light text-white p-4 rounded-full shadow-lg hover:bg-purple-dark transition-colors animate-fade-in"
          aria-label="Partager mon expérience"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Community;
