import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  FileText, 
  Download, 
  Phone,
  Heart,
  Pill,
  User,
  Video,
  MapPin
} from "lucide-react";

const PatientDashboard = () => {
  const [userName] = useState("John Doe");

  const upcomingAppointments = [
    {
      id: 1,
      date: "Today",
      time: "2:00 PM",
      type: "Follow-up Consultation",
      doctor: "Dr. Sarah Smith",
      status: "Confirmed",
      mode: "Video Call"
    },
    {
      id: 2,
      date: "Tomorrow",
      time: "10:30 AM",
      type: "General Consultation",
      doctor: "Dr. Sarah Smith",
      status: "Confirmed",
      mode: "Video Call"
    },
    {
      id: 3,
      date: "March 15",
      time: "3:00 PM",
      type: "Prescription Renewal",
      doctor: "Dr. Sarah Smith",
      status: "Pending",
      mode: "Phone Call"
    }
  ];

  const prescriptions = [
    {
      id: 1,
      medicine: "Lisinopril 10mg",
      dosage: "Once daily",
      duration: "30 days",
      prescribed: "March 1, 2024",
      status: "Active",
      refills: "2 remaining"
    },
    {
      id: 2,
      medicine: "Metformin 500mg",
      dosage: "Twice daily with meals",
      duration: "90 days",
      prescribed: "February 15, 2024",
      status: "Active",
      refills: "1 remaining"
    },
    {
      id: 3,
      medicine: "Ibuprofen 400mg",
      dosage: "As needed for pain",
      duration: "14 days",
      prescribed: "February 28, 2024",
      status: "Completed",
      refills: "0 remaining"
    }
  ];

  const medicalHistory = [
    {
      id: 1,
      date: "March 1, 2024",
      type: "Follow-up",
      diagnosis: "Hypertension Management",
      notes: "Blood pressure well controlled. Continue current medication.",
      doctor: "Dr. Sarah Smith"
    },
    {
      id: 2,
      date: "February 15, 2024",
      type: "Annual Check-up",
      diagnosis: "Type 2 Diabetes, Hypertension",
      notes: "HbA1c improved to 6.8%. Recommended dietary changes.",
      doctor: "Dr. Sarah Smith"
    },
    {
      id: 3,
      date: "January 20, 2024",
      type: "Consultation",
      diagnosis: "Lower back pain",
      notes: "Muscle strain. Prescribed anti-inflammatory medication.",
      doctor: "Dr. Sarah Smith"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, {userName}!
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your appointments, prescriptions, and medical records
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Upcoming Appointments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Pill className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Active Prescriptions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Medical Records</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Health Score</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="appointments" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="appointments">Upcoming Appointments</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="history">Medical History</TabsTrigger>
            </TabsList>

            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-primary" />
                    Upcoming Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <Card key={appointment.id} className="border-l-4 border-l-primary">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-4">
                                <Badge 
                                  variant={appointment.status === "Confirmed" ? "default" : "secondary"}
                                >
                                  {appointment.status}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {appointment.date} at {appointment.time}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold">{appointment.type}</h3>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <User className="w-4 h-4" />
                                  <span>{appointment.doctor}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {appointment.mode === "Video Call" ? (
                                    <Video className="w-4 h-4" />
                                  ) : (
                                    <Phone className="w-4 h-4" />
                                  )}
                                  <span>{appointment.mode}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                              <Button variant="outline" size="sm">
                                Reschedule
                              </Button>
                              <Button size="sm">
                                Join Call
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Prescriptions Tab */}
            <TabsContent value="prescriptions">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Pill className="w-6 h-6 mr-2 text-primary" />
                    Active Prescriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prescriptions.map((prescription) => (
                      <Card key={prescription.id} className="bg-muted/30">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <h3 className="text-lg font-semibold">{prescription.medicine}</h3>
                                <Badge 
                                  variant={prescription.status === "Active" ? "default" : "secondary"}
                                >
                                  {prescription.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                                <div>
                                  <span className="font-medium">Dosage: </span>
                                  {prescription.dosage}
                                </div>
                                <div>
                                  <span className="font-medium">Duration: </span>
                                  {prescription.duration}
                                </div>
                                <div>
                                  <span className="font-medium">Prescribed: </span>
                                  {prescription.prescribed}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {prescription.refills}
                              </p>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                              </Button>
                              {prescription.status === "Active" && (
                                <Button size="sm">
                                  Request Refill
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Medical History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-primary" />
                    Medical History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalHistory.map((record) => (
                      <Card key={record.id} className="bg-muted/30">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center space-x-4">
                                <Badge variant="outline">{record.type}</Badge>
                                <span className="text-sm text-muted-foreground">{record.date}</span>
                              </div>
                              <h3 className="text-lg font-semibold">{record.diagnosis}</h3>
                              <p className="text-muted-foreground">{record.notes}</p>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <User className="w-4 h-4" />
                                <span>{record.doctor}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="mt-4 md:mt-0">
                              <Download className="w-4 h-4 mr-2" />
                              View Report
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Contact */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Contact Dr. Sarah Smith directly for urgent medical concerns or questions about your treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;