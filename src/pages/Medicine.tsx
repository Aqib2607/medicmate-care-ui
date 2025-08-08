import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Pill, Star, ShoppingCart, MessageSquare, Microscope, Calendar, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const MedicineAndDiagnosis = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('allCategories');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const diagnosticTests = [
    {
      id: 'bloodTest',
      nameKey: 'medicine.diagnostic.bloodTest.name',
      categoryKey: 'medicine.category.bloodTests',
      descriptionKey: 'medicine.diagnostic.bloodTest.description',
      timeKey: 'medicine.diagnostic.time.24hours',
      price: '$49.99',
      badgeKey: 'medicine.diagnostic.popular',
      icon: 'FileText',
      bgColor: 'bg-red-100',
      textColor: 'text-red-500',
    },
    {
      id: 'xray',
      nameKey: 'medicine.diagnostic.xray.name',
      categoryKey: 'medicine.category.imaging',
      descriptionKey: 'medicine.diagnostic.xray.description',
      timeKey: 'medicine.diagnostic.time.24hours',
      price: '$120.00',
      badgeKey: 'medicine.diagnostic.common',
      icon: 'FileText',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-500',
    },
    {
      id: 'ecg',
      nameKey: 'medicine.diagnostic.ecg.name',
      categoryKey: 'medicine.category.cardiacTest',
      descriptionKey: 'medicine.diagnostic.ecg.description',
      timeKey: 'medicine.diagnostic.time.48hours',
      price: '$75.00',
      badgeKey: 'medicine.diagnostic.new',
      icon: 'FileText',
      bgColor: 'bg-green-100',
      textColor: 'text-green-500',
    },
  ];
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const filteredDiagnosticTests = diagnosticTests.filter(test => {
    const matchesCategory = selectedCategory === 'allCategories' || test.categoryKey === `medicine.category.${selectedCategory}`;
    const matchesSearch = t(test.nameKey).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const medicines = [
    {
      id: 1,
      name: "Ibuprofen",
      usage: t('medicine.ibuprofen.usage'),
      price: "$12.99",
      rating: 4.8,
      reviews: 120,
      availability: t('medicine.availability.inStock'),
      condition: t('medicine.condition.painManagement'),
      image: "💊",
      description: t('medicine.ibuprofen.description')
    },
    {
      id: 2,
      name: "Amoxicillin",
      usage: t('medicine.amoxicillin.usage'),
      price: "$18.50",
      rating: 4.9,
      reviews: 85,
      availability: t('medicine.availability.prescriptionRequired'),
      condition: t('medicine.condition.infections'),
      image: "💉",
      description: t('medicine.amoxicillin.description')
    },
    {
      id: 3,
      name: "Lisinopril",
      usage: t('medicine.lisinopril.usage'),
      price: "$15.25",
      rating: 4.7,
      reviews: 95,
      availability: t('medicine.availability.inStock'),
      condition: t('medicine.condition.cardiovascular'),
      image: "❤️",
      description: t('medicine.lisinopril.description')
    },
    {
      id: 4,
      name: "Metformin",
      usage: t('medicine.metformin.usage'),
      price: "$22.00",
      rating: 4.6,
      reviews: 150,
      availability: t('medicine.availability.inStock'),
      condition: t('medicine.condition.diabetes'),
      image: "🩸",
      description: t('medicine.metformin.description')
    },
    {
      id: 5,
      name: "Albuterol",
      usage: t('medicine.albuterol.usage'),
      price: "$35.75",
      rating: 4.9,
      reviews: 200,
      availability: t('medicine.availability.prescriptionRequired'),
      condition: t('medicine.condition.respiratory'),
      image: "🫁",
      description: t('medicine.albuterol.description')
    },
    {
      id: 6,
      name: "Omeprazole",
      usage: t('medicine.omeprazole.usage'),
      price: "$14.50",
      rating: 4.5,
      reviews: 110,
      availability: t('medicine.availability.inStock'),
      condition: t('medicine.condition.digestive'),
      image: "🍽️",
      description: t('medicine.omeprazole.description')
    }
  ];

  const conditions = [
    t('medicine.condition.allConditions'),
    t('medicine.condition.painManagement'),
    t('medicine.condition.infections'),
    t('medicine.condition.cardiovascular'),
    t('medicine.condition.diabetes'),
    t('medicine.condition.respiratory'),
    t('medicine.condition.digestive')
  ];

  const availabilityOptions = [
    t('medicine.availability.all'),
    t('medicine.availability.inStock'),
    t('medicine.availability.prescriptionRequired')
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.usage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = selectedCondition === "" || selectedCondition === "All Conditions" || 
                           medicine.condition === selectedCondition;
    const matchesAvailability = availabilityFilter === "" || availabilityFilter === "All" ||
                              medicine.availability === availabilityFilter;
    
    return matchesSearch && matchesCondition && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t('medicine.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('medicine.description')}
            </p>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="medicine" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="medicine" className="text-base">
                <Pill className="w-4 h-4 mr-2" />
                {t('medicine.tabMedicines')}
              </TabsTrigger>
              <TabsTrigger value="diagnosis" className="text-base">
                <Microscope className="w-4 h-4 mr-2" />
                {t('medicine.tabDiagnostic')}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="medicine" className="mt-6">
              {/* Search and Filters */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="w-6 h-6 mr-2 text-primary" />
                    {t('medicine.searchFilterMedicines')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder={t('medicine.searchPlaceholder')}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('medicine.filterByCondition')} />
                        </SelectTrigger>
                        <SelectContent>
                          {conditions.map((condition) => (
                            <SelectItem key={condition} value={condition}>
                              {condition}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('medicine.availability')} />
                        </SelectTrigger>
                        <SelectContent>
                          {availabilityOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Summary */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {t('medicine.showing')} {filteredMedicines.length} {t('medicine.of')} {medicines.length} {t('medicine.medicines')}
                </p>
              </div>

              {/* Medicine Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedicines.map((medicine) => (
                  <Card key={medicine.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{medicine.image}</div>
                          <div>
                            <CardTitle className="text-lg">{medicine.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{medicine.usage}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={medicine.availability === "In Stock" ? "default" : "secondary"}
                          className="text-xs"
                        >
                      {medicine.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {medicine.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(medicine.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground">
                        ({medicine.reviews})
                      </span>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {medicine.price}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Button className="w-full" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {t('medicine.addToCart')}
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {t('medicine.askDoctor')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredMedicines.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Pill className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No medicines found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or filters
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCondition("");
                    setAvailabilityFilter("");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Teleconsult Banner */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t('medicine.teleconsult.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('medicine.teleconsult.description')}
              </p>
              <Button size="lg">
                {t('medicine.teleconsult.button')}
              </Button>
            </CardContent>
          </Card>
            </TabsContent>
            
            <TabsContent value="diagnosis" className="mt-6">
              {/* Diagnostic Tests Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Microscope className="w-6 h-6 mr-2 text-primary" />
                    {t('medicine.searchFilterDiagnostic')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <div className="relative">
                        <Label htmlFor="diagnostic-search" className="sr-only">{t('medicine.diagnostic.searchPlaceholder')}</Label>
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="diagnostic-search"
                          placeholder="Search for diagnostic tests..."
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="diagnostic-category" className="sr-only">{t('medicine.diagnostic.testCategory')}</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger id="diagnostic-category">
                          <SelectValue placeholder={t('medicine.filterByCategory')} />
                        </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="allCategories">{t('medicine.category.allCategories')}</SelectItem>
                            <SelectItem value="bloodTests">{t('medicine.category.bloodTests')}</SelectItem>
                            <SelectItem value="imaging">{t('medicine.category.imaging')}</SelectItem>
                            <SelectItem value="cardiovascular">{t('medicine.category.cardiovascular')}</SelectItem>
                            <SelectItem value="neurological">{t('medicine.category.neurological')}</SelectItem>
                            <SelectItem value="gastrointestinal">{t('medicine.category.gastrointestinal')}</SelectItem>
                          </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Diagnostic Tests Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDiagnosticTests.map(test => (
                  <Card key={test.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 ${test.bgColor} rounded-full flex items-center justify-center ${test.textColor}`}>
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{t(test.nameKey)}</CardTitle>
                            <p className="text-sm text-muted-foreground">{t(test.categoryKey)}</p>
                          </div>
                        </div>
                        <Badge className="text-xs">{t(test.badgeKey)}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {t(test.descriptionKey)}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{t(test.timeKey)}</span>
                        </div>
                        <span className="text-lg font-bold text-primary">{test.price}</span>
                      </div>

                      <div className="flex flex-col space-y-2">
                          <Button className="w-full" size="sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {t('medicine.addToCart')}
                          </Button>
                        <Button variant="outline" className="w-full" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          {t('medicine.diagnostic.askDoctor')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Diagnostic Info Banner */}
              <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{t('medicine.diagnostic.helpChoosingTest.title')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('medicine.diagnostic.helpChoosingTest.description')}
                  </p>
                  <Button size="lg">
                    {t('medicine.diagnostic.consultDoctor')}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MedicineAndDiagnosis;