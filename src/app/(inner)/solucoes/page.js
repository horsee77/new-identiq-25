import ServiceBanner from "@/components/banner/ServiceBanner";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import ServiceSeven from "@/components/services/ServiceSeven";
import ServiceList from "@/components/services/ServiceList";
import SolutionCounter from "@/components/services/SolutionCounter";
import LargeImage from "@/components/large-video/LargeImage";
import FeatureOne from "@/components/feature/FeatureOne";
import CtaFive from "@/components/cta/CtaFive";

export default function Home() {
  return (
    <div>
      <HeaderOne />
      <ServiceBanner />
      <ServiceSeven />
      <ServiceList />
      <LargeImage />
      <SolutionCounter />
      <FeatureOne />
      <CtaFive />
      <FooterOne />
      <BackToTop />
    </div>
  );
}