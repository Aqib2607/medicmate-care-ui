import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Mail, Lock, User, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Login = () => {
  const { language, t } = useLanguage();
  const [patientData, setPatientData] = useState({
    email: "",
    password: ""
  });
  
  const [doctorData, setDoctorData] = useState({
    email: "",
    password: ""
  });

  const { toast } = useToast();

  const handlePatientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientData.email || !patientData.password) {
      toast({
        title: t('login.toast.missingInfoTitle'),
        description: t('login.toast.missingInfoDescription'),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t('login.toast.patientLoginSuccessTitle'),
      description: t('login.toast.patientLoginSuccessDescription'),
    });

    // Reset form
    setPatientData({ email: "", password: "" });
  };

  const handleDoctorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctorData.email || !doctorData.password) {
      toast({
        title: t('login.toast.missingInfoTitle'),
        description: t('login.toast.missingInfoDescription'),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t('login.toast.doctorLoginSuccessTitle'),
      description: t('login.toast.doctorLoginSuccessDescription'),
    });

    // Reset form
    setDoctorData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <Heart className="w-7 h-7 text-primary-foreground fill-current" />
            </div>
            <span className="text-3xl font-bold text-primary">MedicMate</span>
          </div>
          <p className="text-muted-foreground">{t('login.subtitle')}</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">{t('login.welcomeBack')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patient" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{t('login.patientTab')}</span>
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>{t('login.doctorTab')}</span>
                </TabsTrigger>
              </TabsList>

              {/* Patient Login */}
              <TabsContent value="patient">
                <form onSubmit={handlePatientLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {t('login.patient.emailLabel')}
                    </Label>
                    <Input
                      id="patient-email"
                      type="email"
                      placeholder={t('login.patient.emailPlaceholder')}
                      value={patientData.email}
                      onChange={(e) => setPatientData({...patientData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      {t('login.patient.passwordLabel')}
                    </Label>
                    <Input
                      id="patient-password"
                      type="password"
                      placeholder={t('login.patient.passwordPlaceholder')}
                      value={patientData.password}
                      onChange={(e) => setPatientData({...patientData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <Link 
                      to="/forgot-password" 
                      className="text-primary hover:underline"
                    >
                      {t('login.patient.forgotPassword')}
                    </Link>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {t('login.patient.signInButton')}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    {t('login.patient.noAccountText')}{" "}
                    <Link to="/register" className="text-primary hover:underline font-medium">
                      {t('login.patient.signUpLink')}
                    </Link>
                  </div>
                </form>
              </TabsContent>

              {/* Doctor Login */}
              <TabsContent value="doctor">
                <form onSubmit={handleDoctorLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {t('login.doctor.emailLabel')}
                    </Label>
                    <Input
                      id="doctor-email"
                      type="email"
                      placeholder={t('login.doctor.emailPlaceholder')}
                      value={doctorData.email}
                      onChange={(e) => setDoctorData({...doctorData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor-password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      {t('login.doctor.passwordLabel')}
                    </Label>
                    <Input
                      id="doctor-password"
                      type="password"
                      placeholder={t('login.doctor.passwordPlaceholder')}
                      value={doctorData.password}
                      onChange={(e) => setDoctorData({...doctorData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      {t('login.doctor.securePortalNotice')}
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {t('login.doctor.signInButton')}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                {t('login.securityNotice')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;