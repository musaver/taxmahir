import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';
import Industries from '@/components/sections/Industries';
import AdditionalServices from '@/components/sections/AdditionalServices';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <HowItWorks />
      <Industries />
      <AdditionalServices />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}