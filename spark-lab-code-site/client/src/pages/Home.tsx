import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        {/* <CTASection />  */}
        <AboutSection />
        <CTASection /> 
      </main>
      <Footer />
    </div>
  );
}
