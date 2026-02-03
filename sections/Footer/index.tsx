import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent break-words">
      <div className="box-border caret-transparent break-words mx-auto before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[28.8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-urbanist after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-urbanist">
        <FooterContent />
      </div>
      <FooterBottom />
    </footer>
  );
};
