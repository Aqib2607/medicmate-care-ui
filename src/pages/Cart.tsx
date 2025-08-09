import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingCart, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { t } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
              {t('cart.title')}
            </h1>
            
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('cart.empty.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('cart.empty.description')}
                </p>
                <Link to="/medicine">
                  <Button size="lg">
                    {t('cart.continueShopping')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-foreground">
              {t('cart.title')}
            </h1>
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              {t('cart.clearAll')}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">
                        {item.image || (item.type === 'medicine' ? '💊' : '🧪')}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <Badge 
                              variant={item.type === 'medicine' ? 'default' : 'secondary'}
                              className="text-xs mt-1"
                            >
                              {item.type === 'medicine' ? t('cart.medicine') : t('cart.diagnostic')}
                            </Badge>
                            {item.description && (
                              <p className="text-sm text-muted-foreground mt-2">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 py-1 border rounded text-sm">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="text-lg font-bold text-primary">
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>{t('cart.orderSummary')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>{t('cart.subtotal')}</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t('cart.shipping')}</span>
                    <span>{t('cart.free')}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>{t('cart.total')}</span>
                      <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Button className="w-full" size="lg">
                      <CreditCard className="w-4 h-4 mr-2" />
                      {t('cart.checkout')}
                    </Button>
                    <Link to="/medicine" className="block">
                      <Button variant="outline" className="w-full">
                        {t('cart.continueShopping')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;