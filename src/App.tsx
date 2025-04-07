
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import NavWrapper from "./components/NavWrapper";
import { Separator } from "@/components/ui/separator";

// Création d'un nouveau QueryClient pour React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <NavWrapper />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <footer className="bg-secondary">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">Essentials</h3>
                    <p className="text-sm text-muted-foreground">
                      Thoughtfully designed objects for everyday life
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Shop</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/products" className="text-muted-foreground hover:text-foreground">
                          All Products
                        </a>
                      </li>
                      <li>
                        <a href="/products" className="text-muted-foreground hover:text-foreground">
                          Featured
                        </a>
                      </li>
                      <li>
                        <a href="/products" className="text-muted-foreground hover:text-foreground">
                          New Arrivals
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/" className="text-muted-foreground hover:text-foreground">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-muted-foreground hover:text-foreground">
                          Sustainability
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-muted-foreground hover:text-foreground">
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Connect</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/" className="text-muted-foreground hover:text-foreground">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-muted-foreground hover:text-foreground">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-muted-foreground hover:text-foreground">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Separator className="my-8" />
                <div className="text-sm text-muted-foreground text-center">
                  &copy; {new Date().getFullYear()} Essentials. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
