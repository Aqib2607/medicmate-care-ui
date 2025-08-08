import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Award, 
  Users, 
  Clock, 
  Target,
  Eye,
  CheckCircle,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import doctorProfile from "@/assets/doctor-profile.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const timeline = [
    { year: "about.timeline.year1", title: "about.timeline.title1", description: "about.timeline.description1" },
    { year: "about.timeline.year2", title: "about.timeline.title2", description: "about.timeline.description2" },
    { year: "about.timeline.year3", title: "about.timeline.title3", description: "about.timeline.description3" },
    { year: "about.timeline.year4", title: "about.timeline.title4", description: "about.timeline.description4" }
  ];

  const achievements = [
    { icon: Users, number: "about.achievements.patientsNumber", label: "about.achievements.patientsLabel" },
    { icon: Award, number: "about.achievements.satisfactionRateNumber", label: "about.achievements.satisfactionRateLabel" },
    { icon: Clock, number: "about.achievements.responseTimeNumber", label: "about.achievements.responseTimeLabel" },
    { icon: CheckCircle, number: "about.achievements.experienceNumber", label: "about.achievements.experienceLabel" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              <Heart className="w-4 h-4 mr-2" />
              {t('about.hero.badge')}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.hero.title')}
              <span className="text-primary block">{t('about.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={doctorProfile}
                      alt="Dr. Sarah Smith"
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">{t('about.story.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('about.story.paragraph1')}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('about.story.paragraph2')}
                    </p>
                    <Link to="/doctor-profile">
                      <Button>
                        {t('about.story.button')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('about.timeline.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('about.timeline.description')}
              </p>
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{t(item.year)}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t(item.title)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(item.description)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('about.achievements.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('about.achievements.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold text-foreground mb-2">
                      {t(achievement.number)}
                    </p>
                    <p className="text-muted-foreground">
                      {t(achievement.label)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Eye className="w-8 h-8 mr-3 text-primary" />
                    {t('about.vision.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.vision.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="w-8 h-8 mr-3 text-primary" />
                    {t('about.mission.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('about.cta.description')}
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/book-appointment">
              <Button size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                {t('about.cta.bookAppointmentButton')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                <Users className="w-5 h-5 mr-2" />
                {t('about.cta.contactUsButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;