
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

const OrderConfirmation = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Générer un numéro de commande aléatoire
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
    if (!isAuthenticated) {
      toast({
        title: "Accès refusé",
        description: "Vous devez être connecté pour voir cette page.",
        variant: "destructive"
      });
      navigate('/login');
    }
  }, [isAuthenticated, navigate, toast]);
  
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center py-16">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-semibold mb-4">Merci pour votre commande!</h1>
          <p className="text-muted-foreground mb-4">
            Votre commande a été reçue et est en cours de traitement.
          </p>
          <p className="mb-8">
            Numéro de commande: <span className="font-semibold">{orderNumber}</span>
          </p>
          <p className="text-muted-foreground mb-10">
            Un email de confirmation a été envoyé à votre adresse email.
            Vous recevrez une notification lorsque votre commande sera expédiée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/products">Continuer les achats</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
