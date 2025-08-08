import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Calendar, 
  Award, 
  GraduationCap,
  Clock,
  CheckCircle
} from "lucide-react";
import doctorProfile from "@/assets/doctor-profile.jpg";

const DoctorProfile = () => {
  const certifications = [
    "Board Certified Internal Medicine",
    "Advanced Cardiac Life Support (ACLS)",
    "Basic Life Support (BLS)",
    "Telemedicine Certification"
  ];

  const experience = [
    {
      year: "2019 - Present",
      position: "Senior Internal Medicine Physician",
      organization: "MedicMate Online Clinic"
    },
    {
      year: "2015 - 2019",
      position: "Internal Medicine Physician",
      organization: "City General Hospital"
    },
    {
      year: "2012 - 2015",
      position: "Resident Physician",
      organization: "University Medical Center"
    },
    {
      year: "2008 - 2012",
      position: "Medical Doctor",
      organization: "Harvard Medical School"
    }
  ];

  const availableSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "2:00 PM", available: true },
    { time: "3:30 PM", available: true },
    { time: "5:00 PM", available: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Doctor Banner */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <img
                    src={doctorProfile}
                    alt="Dr. Sarah Smith"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">Dr. Sarah Smith</h1>
                    <p className="text-xl text-primary font-semibold mb-4">Internal Medicine Specialist</p>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-3 text-lg text-muted-foreground">(4.9/5 from 200+ patients)</span>
                    </div>

                    <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>Licensed in NY, CA, FL</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>15+ Years Experience</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dr. Sarah Smith is a board-certified internal medicine physician with over 15 years 
                      of experience providing comprehensive healthcare services. She specializes in preventive 
                      care, chronic disease management, and patient education. Dr. Smith is committed to 
                      delivering personalized, evidence-based care through innovative telemedicine services.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      Board Certified
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Harvard Medical School
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      200+ Happy Patients
                    </Badge>
                  </div>

                  <Link to="/book">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2 text-primary" />
                  Certifications & Licenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                  Education & Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-primary font-semibold">{exp.year}</p>
                        <h4 className="font-semibold text-foreground">{exp.position}</h4>
                        <p className="text-muted-foreground">{exp.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Available Slots */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-primary" />
                  Today's Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableSlots.map((slot, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        slot.available 
                          ? 'border-primary/20 bg-primary/5' 
                          : 'border-muted bg-muted/50'
                      }`}
                    >
                      <span className={`font-medium ${
                        slot.available ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {slot.time}
                      </span>
                      <Badge variant={slot.available ? "default" : "secondary"}>
                        {slot.available ? "Available" : "Booked"}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Link to="/book" className="block mt-4">
                  <Button className="w-full">
                    View All Available Times
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Consultations:</span>
                    <span className="font-semibold">1,200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Patient Satisfaction:</span>
                    <span className="font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-semibold">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages:</span>
                    <span className="font-semibold">English, Spanish</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;