import BannerOne from "@/components/banner/BannerOne";
import BlogOne from "@/components/blog/BlogOne";
import BackToTop from "@/components/common/BackToTop";
import CounterUp from "@/components/counterup/CounterUp";
import CtaOne from "@/components/cta/CtaOne";
import FaqOne from "@/components/faq/FaqOne";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import LargeVideo from "@/components/large-video/LargeVideo";
import ServiceOne from "@/components/services/ServiceOne";

export default function Home() {
  return (
    <div>
      <HeaderOne />
      <BannerOne />
      <LargeVideo />
      <ServiceOne />
      <CounterUp />
      <FaqOne />
      <BlogOne />
      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}