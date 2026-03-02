
import AboutBanner from "@/components/banner/AboutBanner";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import Wedo from "@/components/whatwe-do/Wedo";
import ServiceSix from "@/components/services/ServiceSix";
import CtaFour from "@/components/cta/CtaFour";

export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />
            <AboutBanner />
            <Wedo />
            <ServiceSix />
            <CtaFour />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
