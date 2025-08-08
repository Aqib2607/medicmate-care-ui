import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, User, Mail, Phone, FileText } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const BookAppointment = () => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: ""
  });
  const { toast } = useToast();

  const services = [
    t('bookAppointment.service.generalConsultation'),
    t('bookAppointment.service.followUpAppointment'),
    t('bookAppointment.service.prescriptionRenewal'),
    t('bookAppointment.service.symptomAssessment'),
    t('bookAppointment.service.secondOpinion'),
    t('bookAppointment.service.chronicDiseaseManagement')
  ];

  const timeSlots = [
    t('bookAppointment.timeSlot.nineAM'), t('bookAppointment.timeSlot.nineThirtyAM'), t('bookAppointment.timeSlot.tenAM'), t('bookAppointment.timeSlot.tenThirtyAM'), t('bookAppointment.timeSlot.elevenAM'), t('bookAppointment.timeSlot.elevenThirtyAM'),
    t('bookAppointment.timeSlot.twoPM'), t('bookAppointment.timeSlot.twoThirtyPM'), t('bookAppointment.timeSlot.threePM'), t('bookAppointment.timeSlot.threeThirtyPM'), t('bookAppointment.timeSlot.fourPM'), t('bookAppointment.timeSlot.fourThirtyPM'), t('bookAppointment.timeSlot.fivePM')
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !formData.name || !formData.email || !formData.service) {
      toast({
        title: t('bookAppointment.toast.missingInfoTitle'),
        description: t('bookAppointment.toast.missingInfoDescription'),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t('bookAppointment.toast.bookedTitle'),
      description: t('bookAppointment.toast.bookedDescription'),
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      notes: ""
    });
    setDate(undefined);
    setSelectedTime("");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t('bookAppointment.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('bookAppointment.subtitle')}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="w-6 h-6 mr-2 text-primary" />
                {t('bookAppointment.cardTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{t('bookAppointment.personalInfoTitle')}</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {t('bookAppointment.fullNameLabel')} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t('bookAppointment.fullNamePlaceholder')}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {t('bookAppointment.emailLabel')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t('bookAppointment.emailPlaceholder')}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {t('bookAppointment.phoneLabel')}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={t('bookAppointment.phonePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {t('bookAppointment.serviceTypeLabel')} *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('bookAppointment.selectServicePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{t('bookAppointment.dateTimeTitle')}</h3>
                    
                    <div className="space-y-2">
                      <Label>{t('bookAppointment.selectDateLabel')} *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>{t('bookAppointment.pickDatePlaceholder')}</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {t('bookAppointment.availableTimeSlotsLabel')} *
                      </Label>
                      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="text-sm"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        placeholder={t('bookAppointment.notesPlaceholder')}
                        rows={4}
                      />
                </div>

                {/* Summary */}
                {(date || selectedTime || formData.service) && (
                  <Card className="bg-muted/30">
                    <CardHeader>
                      <CardTitle className="text-lg">Appointment Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {formData.service && (
                          <p><span className="font-medium">Service:</span> {formData.service}</p>
                        )}
                        {date && (
                          <p><span className="font-medium">Date:</span> {format(date, "PPP")}</p>
                        )}
                        {selectedTime && (
                          <p><span className="font-medium">Time:</span> {selectedTime}</p>
                        )}
                        <p><span className="font-medium">Duration:</span> 30 minutes</p>
                        <p><span className="font-medium">Cost:</span> $75</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Button type="submit" className="w-full py-3 text-lg">
                  {t('bookAppointment.confirmButton')}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By booking this appointment, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;