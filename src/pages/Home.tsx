import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Pill, 
  Users, 
  Star,
  CheckCircle,
  Clock,
  Shield,
  Heart
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import doctorProfile from "@/assets/doctor-profile.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Calendar,
      title: t('home.feature1Title'),
      description: t('home.feature1Description')
    },
    {
      icon: Pill,
      title: t('home.feature2Title'),
      description: t('home.feature2Description')
    },
    {
      icon: Users,
      title: t('home.feature3Title'),
      description: t('home.feature3Description')
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Dr. Smith provided excellent care and was very thorough. The online platform is easy to use!"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Quick response time and professional service. Got my prescription within hours."
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Very convenient for busy schedules. The doctor was knowledgeable and caring."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medical-light to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-secondary text-secondary-foreground">
                <Heart className="w-4 h-4 mr-2" />
                {t('home.badge')}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('home.title1')} 
                <span className="text-primary block">{t('home.title2')}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                {t('home.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    {t('home.bookAppointment')}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t('home.learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern medical clinic"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src={doctorProfile}
                    alt="Dr. Sarah Smith"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">{t('home.doctorTitle')}</h2>
                  <p className="text-primary font-semibold">{t('home.doctorSpecialty')}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-muted-foreground">{t('home.doctorRating')}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {t('home.doctorDescription')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">{t('home.boardCertified')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">{t('home.experience')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">{t('home.licensed')}</span>
                  </div>
                </div>
                <Link to="/doctor-profile">
                  <Button className="mt-4">{t('home.viewProfile')}</Button>
                </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('home.whyChoose')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.whyChooseDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('home.testimonials')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.testimonialsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.ctaDescription')}
          </p>
          <Link to="/book">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              {t('home.scheduleAppointment')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;