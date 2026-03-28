import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/contact/WhatsAppButton";
import HeroSection from "./components/home/HeroSection";
import MarqueeBanner from "./components/home/MarqueeBanner";
import CategoryGrid from "./components/home/CategoryGrid";
import WhyChooseUs from "./components/home/WhyChooseUs";
import DeliveryBanner from "./components/home/DeliveryBanner";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <CategoryGrid />
        <WhyChooseUs />
        <DeliveryBanner />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
