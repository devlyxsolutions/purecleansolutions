import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import FeaturesSection from "./sections/features-section";
import TestimonialSection from "./sections/testimonial-section";
import CTASection from "./sections/cta-section";
import LenisScroll from "./components/lenis";
import ContactSection from './sections/contact-section';


export default function App() {
    return (
        <>
            <LenisScroll />
            <Banner />
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            {/* <TeamSection /> */}
            <TestimonialSection />
            <ContactSection/>
            {/* <PricingSection /> */}
            <CTASection />

            <Footer />
        </>
    )
}