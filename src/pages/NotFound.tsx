
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-drugbuster-black p-6">
      <div className="text-center max-w-md w-full">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-light/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-purple-light">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Page non trouvée</h1>
        <p className="text-xl text-gray-400 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 bg-purple-light hover:bg-purple-dark text-white font-medium py-3 px-6 rounded-lg w-full transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour à l'accueil</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
