// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Bike, Wrench, Users, Calendar, ShoppingCart, Star, User, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getBikeCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['bike-card-0', 'bike-card-1', 'bike-card-2'];
  return ids[index] || 'noID';
};

const getTestimonialCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['testimonial-card-0', 'testimonial-card-1', 'testimonial-card-2'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Bike className="w-8 h-8 text-blue-500" />,
      title: "Bike Sales",
      description: "Wide selection of mountain bikes, road bikes, and electric bikes from top brands"
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-500" />,
      title: "Repair & Service",
      description: "Professional bike maintenance and repair services by certified technicians"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Client Management",
      description: "Personalized service tracking and customer relationship management"
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Appointments",
      description: "Easy online booking for repairs, consultations, and bike fittings"
    }
  ];

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
      title: "Online Shopping",
      description: "Browse and purchase bikes and accessories online"
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      title: "Book Service",
      description: "Schedule repair appointments at your convenience"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Expert Staff",
      description: "Knowledgeable team with years of cycling experience"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Quality Guarantee",
      description: "All our bikes and services come with quality assurance"
    }
  ];

  const featuredBikes = [
    {
      name: "Mountain Explorer Pro",
      price: "$1,299",
      image: "/api/placeholder/300/200",
      category: "Mountain Bike"
    },
    {
      name: "City Cruiser Elite",
      price: "$899",
      image: "/api/placeholder/300/200",
      category: "City Bike"
    },
    {
      name: "Electric Power Ride",
      price: "$2,199",
      image: "/api/placeholder/300/200",
      category: "E-Bike"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing service! They fixed my bike perfectly and the staff was incredibly helpful.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "Great selection of bikes and competitive prices. Highly recommend this shop!",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Professional service and quick turnaround. My go-to bike shop in the city.",
      rating: 5
    }
  ];

  return (
    <Container componentId="bike-shop-landing">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with bike shop theme"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50"
      >
        {/* Header */}
        <Header 
          devId="bike-shop-header" 
          devName="Bike Shop Header" 
          devDescription="Primary bike shop header with navigation"
          className="container mx-auto px-4 py-6"
        >
          <Nav 
            devId="bike-shop-nav" 
            devName="Bike Shop Navigation" 
            devDescription="Primary navigation bar for bike shop"
            className="flex items-center justify-between"
          >
            <Div 
              devId="bike-shop-logo" 
              devName="Bike Shop Logo" 
              devDescription="Bike shop logo and brand name"
              className="flex items-center space-x-2"
            >
              <Div devId="noID" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Bike className="w-6 h-6 text-white" />
              </Div>
              <Span 
                devId="bike-shop-brand" 
                devName="Bike Shop Brand" 
                devDescription="Bike shop brand name"
                className="text-2xl font-bold text-gray-800"
              >
                CyclePro Shop
              </Span>
            </Div>
            <Div 
              devId="nav-menu" 
              devName="Navigation Menu" 
              devDescription="Navigation menu items"
              className="hidden md:flex items-center space-x-6"
            >
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#bikes" className="text-gray-600 hover:text-blue-600 transition-colors">Bikes</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </Div>
            <Div 
              devId="nav-actions" 
              devName="Navigation Actions" 
              devDescription="Navigation buttons and user menu"
              className="flex items-center space-x-4"
            >
              {isAuthenticated ? (
                <Div 
                  devId="user-section" 
                  devName="User Section" 
                  devDescription="Authenticated user welcome area"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="welcome-message" 
                    devName="Welcome Message" 
                    devDescription="Welcome message for authenticated user"
                    className="text-gray-600"
                  >
                    Welcome, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="nav-dashboard-button"
                      devName="Navigation Dashboard Button"
                      devDescription="Dashboard button in navigation header"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="auth-buttons" 
                  devName="Authentication Buttons" 
                  devDescription="Login and register buttons"
                  className="flex items-center space-x-2"
                >
                  <Link to="/login">
                    <Button 
                      devId="nav-login-button"
                      devName="Navigation Login Button"
                      devDescription="Login button in navigation header"
                      variant="ghost" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="nav-register-button"
                      devName="Navigation Register Button"
                      devDescription="Get started button in navigation header"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Get Started
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="hero-section">
          <Section 
            devId="hero-content" 
            devName="Hero Content" 
            devDescription="Main hero section with bike shop introduction"
            className="container mx-auto px-4 py-20 text-center"
          >
            <Div 
              devId="hero-content-wrapper" 
              devName="Hero Content Wrapper" 
              devDescription="Animated wrapper for hero content"
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="hero-title" 
                devName="Hero Title" 
                devDescription="Main hero title for bike shop"
                className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
              >
                Your Premier 
                <Span 
                  devId="bike-shop-highlight" 
                  devName="Bike Shop Highlight" 
                  devDescription="Highlighted bike shop text in gradient"
                  className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                >
                  {' '}Bike Shop
                </Span>
              </H1>
              <P 
                devId="hero-description" 
                devName="Hero Description" 
                devDescription="Hero section description explaining bike shop services"
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                From mountain adventures to city commutes, we have the perfect bike for every rider. 
                Professional sales, expert repairs, and personalized service all in one place.
              </P>
              <Div 
                devId="hero-cta-buttons" 
                devName="Hero CTA Buttons" 
                devDescription="Call-to-action buttons in hero section"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  devId="hero-shop-bikes"
                  devName="Shop Bikes Button"
                  devDescription="Primary call-to-action button for shopping bikes"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Bikes
                </Button>
                <Button 
                  devId="hero-book-service"
                  devName="Book Service Button"
                  devDescription="Secondary button to book bike service"
                  variant="outline"
                  className="border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Service
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Services Section */}
        <Container componentId="services-section">
          <Section 
            devId="services-content" 
            devName="Services Content" 
            devDescription="Services section showcasing bike shop offerings"
            className="container mx-auto px-4 py-20"
            id="services"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Our Services</H2>
              <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive bike services from sales to maintenance, all under one roof
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  devId={getServiceCardId(index)}
                  devName={`${service.title} Service Card`}
                  devDescription={`Service card for ${service.title}: ${service.description}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="mb-4">{service.icon}</Div>
                    <H3 devId="noID" className="text-xl font-semibold text-gray-800 mb-2">{service.title}</H3>
                    <P devId="noID" className="text-gray-600">{service.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Featured Bikes Section */}
        <Container componentId="featured-bikes-section">
          <Section 
            devId="bikes-content" 
            devName="Featured Bikes Content" 
            devDescription="Featured bikes showcase section"
            className="container mx-auto px-4 py-20 bg-gray-50"
            id="bikes"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Featured Bikes</H2>
              <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium bikes for every adventure
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-3 gap-8">
              {featuredBikes.map((bike, index) => (
                <Card 
                  key={index} 
                  devId={getBikeCardId(index)}
                  devName={`${bike.name} Bike Card`}
                  devDescription={`Featured bike card for ${bike.name} priced at ${bike.price}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="h-48 bg-gray-200 flex items-center justify-center">
                      <Bike className="w-16 h-16 text-gray-400" />
                    </Div>
                    <Div devId="noID" className="p-6">
                      <Badge devId="noID" className="mb-2 bg-blue-100 text-blue-800">{bike.category}</Badge>
                      <H3 devId="noID" className="text-xl font-semibold text-gray-800 mb-2">{bike.name}</H3>
                      <Div devId="noID" className="flex justify-between items-center">
                        <Span devId="noID" className="text-2xl font-bold text-green-600">{bike.price}</Span>
                        <Button devId="noID" className="bg-blue-600 hover:bg-blue-700 text-white">
                          View Details
                        </Button>
                      </Div>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Features Section */}
        <Container componentId="features-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Why Choose CyclePro?</H2>
              <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our professional service and expertise
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  devId={getFeatureCardId(index)}
                  devName={`${feature.title} Feature Card`}
                  devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="mb-4 flex justify-center">{feature.icon}</Div>
                    <H3 devId="noID" className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</H3>
                    <P devId="noID" className="text-gray-600 text-sm">{feature.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Testimonials Section */}
        <Container componentId="testimonials-section">
          <Section 
            devId="testimonials-content" 
            devName="Testimonials Content" 
            devDescription="Customer testimonials section"
            className="container mx-auto px-4 py-20 bg-gray-50"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</H2>
              <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  devId={getTestimonialCardId(index)}
                  devName={`${testimonial.name} Testimonial Card`}
                  devDescription={`Customer testimonial from ${testimonial.name}`}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </Div>
                    <P devId="noID" className="text-gray-600 mb-4 italic">"{testimonial.text}"</P>
                    <P devId="noID" className="font-semibold text-gray-800">- {testimonial.name}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Contact Section */}
        <Container componentId="contact-section">
          <Section 
            devId="contact-content" 
            devName="Contact Content" 
            devDescription="Contact information and call-to-action section"
            className="container mx-auto px-4 py-20"
            id="contact"
          >
            <Div devId="noID" className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center text-white">
              <H2 devId="noID" className="text-4xl font-bold mb-4">Ready to Ride?</H2>
              <P devId="noID" className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Visit our shop today or get in touch to learn more about our bikes and services
              </P>
              <Div devId="noID" className="grid md:grid-cols-3 gap-6 mb-8">
                <Div devId="noID" className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <Span devId="noID">(555) 123-BIKE</Span>
                </Div>
                <Div devId="noID" className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <Span devId="noID">info@cyclepro.com</Span>
                </Div>
                <Div devId="noID" className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <Span devId="noID">123 Bike Street, City</Span>
                </Div>
              </Div>
              <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button 
                      devId="contact-dashboard-button"
                      devName="Contact Dashboard Button"
                      devDescription="Dashboard button in contact section"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Button 
                      devId="contact-visit-button"
                      devName="Visit Shop Button"
                      devDescription="Primary button to visit the shop"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                      Visit Our Shop
                    </Button>
                    <Link to="/register">
                      <Button 
                        devId="contact-get-started"
                        devName="Get Started Button"
                        devDescription="Get started button in contact section"
                        variant="outline"
                        className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all"
                      >
                        Get Started Online
                      </Button>
                    </Link>
                  </>
                )}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="bike-shop-footer" 
          devName="Bike Shop Footer" 
          devDescription="Site footer with links and copyright"
          className="container mx-auto px-4 py-8 border-t border-gray-200"
        >
          <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
            <Div devId="noID" className="text-gray-600 mb-4 md:mb-0">
              © 2024 CyclePro Shop. Pedaling towards excellence since 2010.
            </Div>
            <Div devId="noID" className="flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#bikes" className="text-gray-600 hover:text-blue-600 transition-colors">Bikes</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</a>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};