import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import DoctorProfile from "./pages/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import MedicineAndDiagnosis from "./pages/Medicine";
import PatientDashboard from "./pages/PatientDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CartProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/medicine" element={<MedicineAndDiagnosis />} />
              <Route path="/dashboard" element={<PatientDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;