import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieConsent } from "@/components/CookieConsent";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ServingSection } from "@/sections/ServingSection";
import { StatisticsSection } from "@/sections/StatisticsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExpertsSection } from "@/sections/ExpertsSection";
import { TeamMembersSection } from "@/sections/TeamMembersSection";
import { NewsSection } from "@/sections/NewsSection";
import { ContactSection } from "@/sections/ContactSection";
import { RelatedContentSection } from "@/sections/RelatedContentSection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-black box-border caret-transparent block tracking-[normal] leading-[28.8px] list-outside list-disc break-words pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-urbanist">
      <div className="absolute block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border"></div>
      </div>
      <a
        href="https://accessibe.com/blog/knowledgebase/screen-reader-guide"
        className="absolute text-yellow-400 box-border caret-transparent block h-px break-words w-[200px] z-[-1] overflow-hidden -mt-px left-0 top-0"
      >
        Accessibility Screen-Reader Guide, Feedback, and Issue Reporting | New
        window
      </a>
      <AccessibilityWidget variant="skip-links" />
      <AccessibilityWidget variant="empty" />
      <AccessibilityWidget variant="button" />
      <div className="fixed bg-black box-border caret-transparent hidden h-full opacity-40 break-words w-full z-[99999999] left-0 top-0"></div>
      <CookieConsent />
      <a
        aria-label="Skip to content"
        href="#fl-main-content"
        className="absolute text-yellow-400 bg-white box-border caret-transparent block h-px left-[-10000px] break-words w-px overflow-hidden px-[15px] py-2.5"
      >
        Skip to content
      </a>
      <div className="relative box-border caret-transparent break-words z-0 mx-auto before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
        <Header />
        <div className="box-border caret-transparent break-words">
          <div className="box-border caret-transparent break-words before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
            <div className="box-border caret-transparent break-words before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
              <div className="relative box-border caret-transparent float-none min-h-px break-words w-auto md:float-left md:w-full">
                <article className="box-border caret-transparent break-words">
                  <div className="box-border caret-transparent break-words before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
                    <div className="box-border caret-transparent break-words">
                      <div className="box-border caret-transparent break-words mx-auto before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
                        <Hero />
                      </div>
                      <div className="box-border caret-transparent break-words mx-auto before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
                        <ServingSection />
                      </div>
                      <StatisticsSection />
                      <ProjectsSection />
                      <ExpertsSection />
                      <TeamMembersSection />
                      <NewsSection />
                      <ContactSection />
                      <RelatedContentSection />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <p className="absolute text-base box-border caret-transparent hidden h-px tracking-[0.8px] leading-[28.8px] w-px overflow-hidden -m-px md:text-[17px] md:leading-[30.6px]">
        Notifications
      </p>
      <div className="absolute box-border caret-transparent h-px w-px overflow-hidden -m-px"></div>
      <div className="absolute box-border caret-transparent h-px w-px overflow-hidden -m-px"></div>
      <div
        role="button"
        className="fixed bg-blue-600 box-border caret-transparent hidden leading-4 break-words z-[2147483647] rounded-[50%] left-5 bottom-5"
      ></div>
    </body>
  );
};
