
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Taxi Saverne - Votre taxi de confiance à Saverne et ses environs";
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
