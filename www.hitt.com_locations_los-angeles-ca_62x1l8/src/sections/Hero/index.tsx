import { HeroContent } from "@/sections/Hero/components/HeroContent";

    export const Hero = () => {
      return (
        <div className="relative min-h-[800px] md:min-h-[900px] flex items-center pt-[180px] pb-[100px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://www.hitt.com/wp-content/uploads/2022/08/locations_los_angeles_hero_image-scaled.jpg')"
            }}
          >
            {/* Overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <HeroContent />
        </div>
      );
    };
