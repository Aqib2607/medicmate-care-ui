import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Mail, Lock, User, Shield, Phone, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Register = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const { toast } = useToast();
  const { t } = useLanguage();

  const handlePatientRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!patientData.name || !patientData.email || !patientData.password || 
        !patientData.phone || !patientData.dateOfBirth) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (patientData.password !== patientData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!patientData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms of Service and Privacy Policy.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "Welcome to MedicMate! Please check your email to verify your account.",
    });

    // Reset form
    setPatientData({
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false
    });
  };

  const handleDoctorRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!doctorData.name || !doctorData.email || !doctorData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (doctorData.password !== doctorData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!doctorData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms of Service and Privacy Policy.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Doctor Registration Submitted!",
      description: "Your application is under review. We'll contact you within 48 hours.",
    });

    // Reset form
    setDoctorData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false
    });
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
          <p className="text-muted-foreground">{t('register.subtitle')}</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">{t('register.welcome')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patient" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{t('register.patientTab')}</span>
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>{t('register.doctorTab')}</span>
                </TabsTrigger>
              </TabsList>

              {/* Patient Registration */}
              <TabsContent value="patient">
                <form onSubmit={handlePatientRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {t('register.patient.fullNameLabel')}
                    </Label>
                    <Input
                      id="patient-name"
                      type="text"
                      placeholder={t('register.patient.fullNamePlaceholder')}
                      value={patientData.name}
                      onChange={(e) => setPatientData({...patientData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {t('register.patient.emailLabel')}
                    </Label>
                    <Input
                      id="patient-email"
                      type="email"
                      placeholder={t('register.patient.emailPlaceholder')}
                      value={patientData.email}
                      onChange={(e) => setPatientData({...patientData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('register.patient.phoneLabel')}
                    </Label>
                    <Input
                      id="patient-phone"
                      type="tel"
                      placeholder={t('register.patient.phonePlaceholder')}
                      value={patientData.phone}
                      onChange={(e) => setPatientData({...patientData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-dob" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t('register.patient.dobLabel')}
                    </Label>
                    <Input
                      id="patient-dob"
                      type="date"
                      value={patientData.dateOfBirth}
                      onChange={(e) => setPatientData({...patientData, dateOfBirth: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      {t('register.patient.passwordLabel')}
                    </Label>
                    <Input
                      id="patient-password"
                      type="password"
                      placeholder={t('register.patient.passwordPlaceholder')}
                      value={patientData.password}
                      onChange={(e) => setPatientData({...patientData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patient-confirm-password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      {t('register.patient.confirmPasswordLabel')}
                    </Label>
                    <Input
                      id="patient-confirm-password"
                      type="password"
                      placeholder={t('register.patient.confirmPasswordPlaceholder')}
                      value={patientData.confirmPassword}
                      onChange={(e) => setPatientData({...patientData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="patient-terms"
                      checked={patientData.agreeToTerms}
                      onCheckedChange={(checked) => 
                        setPatientData({...patientData, agreeToTerms: checked as boolean})
                      }
                    />
                    <Label htmlFor="patient-terms" className="text-sm">
                      {t('register.patient.agreeToTerms')}{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        {t('register.patient.termsOfService')}
                      </Link>{" "}
                      {t('register.patient.and')}{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        {t('register.patient.privacyPolicy')}
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {t('register.patient.createAccountButton')}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    {t('register.patient.alreadyAccount')}{" "}
                    <Link to="/login" className="text-primary hover:underline font-medium">
                      {t('register.patient.signInHere')}
                    </Link>
                  </div>
                </form>
              </TabsContent>

              {/* Doctor Registration */}
              <TabsContent value="doctor">
                <form onSubmit={handleDoctorRegister} className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      {t('register.doctor.securePortalNotice')}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor-name" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {t('register.doctor.fullNameLabel')}
                    </Label>
                    <Input
                      id="doctor-name"
                      type="text"
                      placeholder={t('register.doctor.fullNamePlaceholder')}
                      value={doctorData.name}
                      onChange={(e) => setDoctorData({...doctorData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor-email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {t('register.doctor.emailLabel')}
                    </Label>
                    <Input
                      id="doctor-email"
                      type="email"
                      placeholder={t('register.doctor.emailPlaceholder')}
                      value={doctorData.email}
                      onChange={(e) => setDoctorData({...doctorData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor-password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      {t('register.doctor.passwordLabel')}
                    </Label>
                    <Input
                      id="doctor-password"
                      type="password"
                      placeholder={t('register.doctor.passwordPlaceholder')}
                      value={doctorData.password}
                      onChange={(e) => setDoctorData({...doctorData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor-confirm-password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      {t('register.doctor.confirmPasswordLabel')}
                    </Label>
                    <Input
                      id="doctor-confirm-password"
                      type="password"
                      placeholder={t('register.doctor.confirmPasswordPlaceholder')}
                      value={doctorData.confirmPassword}
                      onChange={(e) => setDoctorData({...doctorData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="doctor-terms"
                      checked={doctorData.agreeToTerms}
                      onCheckedChange={(checked) => 
                        setDoctorData({...doctorData, agreeToTerms: checked as boolean})
                      }
                    />
                    <Label htmlFor="doctor-terms" className="text-sm">
                      {t('register.doctor.agreeToTerms')}{" "}
                      <Link to="/terms" className="text-primary hover-underline">
                        {t('register.doctor.termsOfService')}
                      </Link>{" "}
                      {t('register.doctor.and')}{" "}
                      <Link to="/privacy" className="text-primary hover-underline">
                        {t('register.doctor.privacyPolicy')}
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {t('register.doctor.submitApplicationButton')}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    {t('register.doctor.alreadyAccount')}{" "}
                    <Link to="/login" className="text-primary hover:underline font-medium">
                      {t('register.doctor.signInHere')}
                    </Link>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;