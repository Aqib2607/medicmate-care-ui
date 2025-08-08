import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  HelpCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.toast.missingInfoTitle'),
        description: t('contact.toast.missingInfoDescription'),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t('contact.toast.messageSentTitle'),
      description: t('contact.toast.messageSentDescription'),
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const faqs = [
    {
      question: "contact.faq.q1",
      answer: "contact.faq.a1"
    },
    {
      question: "contact.faq.q2",
      answer: "contact.faq.a2"
    },
    {
      question: "contact.faq.q3",
      answer: "contact.faq.a3"
    },
    {
      question: "contact.faq.q4",
      answer: "contact.faq.a4"
    },
    {
      question: "contact.faq.q5",
      answer: "contact.faq.a5"
    },
    {
      question: "contact.faq.q6",
      answer: "contact.faq.a6"
    },
    {
      question: "contact.faq.q7",
      answer: "contact.faq.a7"
    },
    {
      question: "contact.faq.q8",
      answer: "contact.faq.a8"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.hero.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.fullNameLabel')} *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={t('contact.form.fullNamePlaceholder')}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.emailLabel')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder={t('contact.form.emailPlaceholder')}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.form.subjectLabel')}</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder={t('contact.form.subjectPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.messageLabel')} *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.sendButton')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t('contact.info.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.phoneLabel')}</p>
                      <p className="text-muted-foreground">{t('contact.info.phoneNumber')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.emailLabel')}</p>
                      <p className="text-muted-foreground">{t('contact.info.emailAddress')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.addressLabel')}</p>
                      <p className="text-muted-foreground">{t('contact.info.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.hoursLabel')}</p>
                      <p className="text-muted-foreground">{t('contact.info.hoursMonFri')}</p>
                      <p className="text-muted-foreground">{t('contact.info.hoursSat')}</p>
                      <p className="text-muted-foreground">{t('contact.info.hoursSun')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200 text-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-red-900">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    {t('contact.emergency.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium">{t('contact.emergency.subtitle')}</p>
                  <p>{t('contact.emergency.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <HelpCircle className="w-6 h-6 mr-2 text-primary" />
                    {t('contact.faq.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem value={`item-${index + 1}`} key={index}>
                        <AccordionTrigger className="text-left font-semibold">
                          {t(faq.question)}
                        </AccordionTrigger>
                        <AccordionContent>
                          {t(faq.answer)}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;