import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import ResumeSection from "./components/InformationSection";
import Footer from "./components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col">

<div className="relative flex-col items-center">
        <Image
          src="/images/ocean.jpg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1]"
        />
        <div className="w-full flex justify-center">
          <Navbar />
        </div>
        <div className="container mt-24 mx-auto px-60 py-4 w-full">
          <HeroSection />
        </div>
      </div>

      <div className="bg-[#162C45] w-full">
        <div className="container mx-auto ">
          <AboutSection />
        </div>
      </div>

      <div
        className="w-full"
        style={{
          backgroundImage: 'url("/images/contact.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <ResumeSection />
        
        <div className="container mx-auto px-12 py-4">
          <EmailSection />
        </div>
      </div>

        

        <Footer />
      
    </main>
  );
}
