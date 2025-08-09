import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Menu, X, Globe, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { getTotalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.bookNow'), path: "/book" },
    { name: t('nav.medicine'), path: "/medicine" },
    { name: t('nav.blog'), path: "/blog" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
    { name: t('nav.cart'), path: "/cart" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold text-primary">MedicMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 relative">
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2"
            >
              <Globe className="h-4 w-4" />
              <span>{t('language')}</span>
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm">
                {t('nav.login')}
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">{t('nav.register')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-1 w-full"
                >
                  <Globe className="h-4 w-4" />
                  <span>{t('language')}</span>
                </Button>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    {t('nav.login')}
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                {t('nav.register')}
              </Button>
            </Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="flex items-center justify-center gap-1 w-full relative">
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;