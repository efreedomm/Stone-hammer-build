export const HeroContent = () => {
      return (
        <div className="relative z-[2] w-full max-w-[1364px] mx-auto px-5 md:px-[50px]">
          <div className="max-w-[800px]">
            <h1 className="text-white text-5xl md:text-[80px] leading-[1.1] font-dm_serif_display mb-6">
              Los Angeles, California
            </h1>
            
            <div className="max-w-[600px] mb-10">
              <p className="text-white text-lg md:text-[19px] leading-[1.6] font-urbanist tracking-[0.5px]">
                We came onto the scene in Southern California more than 15
                years ago, and it didn’t take long for our trust-based
                approach to building to resonate in the region. We’re stoked
                to have found a home in the City of Angels.
              </p>
            </div>

            <div>
              <a
                href="#los-angeles-contact-us"
                className="inline-block bg-[#dbe41d] text-black text-[13px] font-extrabold tracking-[1.3px] uppercase px-8 py-4 hover:bg-white transition-colors"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      );
    };
