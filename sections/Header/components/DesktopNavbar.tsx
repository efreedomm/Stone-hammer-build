import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";

    export const DesktopNavbar = () => {
      return (
        <div className="relative hidden flex-col w-full z-50 md:flex font-urbanist">
          {/* Top Row */}
          <div className="flex justify-between items-center w-full max-w-[1364px] mx-auto px-[50px] py-5 border-b border-white/20">
            {/* Left Links */}
            <div className="flex items-center gap-8">
              <button aria-label="Search" className="text-white hover:text-yellow-400 transition-colors">
                <img
                  src="https://c.animaapp.com/ml62k1v8Dr0K8D/assets/icon-6.svg"
                  alt="Search"
                  className="w-[15px] h-[15px]"
                />
              </button>
              <a href="https://www.hitt.com/news-hub/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
                News
              </a>
              <a href="https://www.hitt.com/locations/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
                Locations
              </a>
              <a href="https://www.hitt.com/national-reach/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
                National Reach
              </a>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-5 -translate-x-1/2">
              <NavbarLogo />
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-8">
              <a href="https://www.hitt.com/contact/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
                Contact
              </a>
              <a href="https://www.hitt.com/subcontractors/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
                Subcontractors
              </a>
              <a
                href="https://www.hitt.com/careers/"
                className="text-white text-[10px] font-bold tracking-[1px] uppercase bg-[#002855] px-6 py-3 hover:bg-[#003875] transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Secondary Nav Row */}
          <div className="flex justify-center items-center gap-10 py-4 w-full max-w-[1364px] mx-auto px-[50px]">
            <a href="#" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
              Expertise
            </a>
            <a href="https://www.hitt.com/projects/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
              Projects
            </a>
            <a href="/experience-hitt/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
              The Hitt Experience
            </a>
            <a href="/research-and-development/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
              R&D
            </a>
            <a href="/senior-leadership/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
              Our Team
            </a>
            <a href="/who-we-are/" className="text-white text-[10px] font-bold tracking-[1px] uppercase hover:text-yellow-400 transition-colors">
              About
            </a>
          </div>
        </div>
      );
    };
