export type ContentCardProps = {
  backgroundVariant: string;
  title: string;
  linkUrl: string;
};

export const ContentCard = (props: ContentCardProps) => {
  return (
    <div className="text-base box-border caret-transparent leading-[28.8px] break-words w-auto mb-10 md:text-[17px] md:leading-[30.6px] md:w-[45%] md:mb-[60px]">
      <div
        className={`text-base bg-no-repeat bg-cover box-border caret-transparent h-[300px] leading-[28.8px] break-words bg-center md:text-[17px] md:h-[500px] md:leading-[30.6px] ${props.backgroundVariant}`}
      ></div>
      <div className="text-base items-start box-border caret-transparent flex flex-col justify-center leading-[28.8px] break-words ml-[30px] md:text-[17px] md:[align-items:normal] md:block md:flex-row md:justify-normal md:leading-[30.6px]">
        <div className="text-white text-2xl box-border caret-transparent tracking-[1.2px] leading-[normal] min-h-[auto] min-w-[auto] break-words mt-5 mb-2.5 pr-5 font-dm_serif_display md:min-h-0 md:min-w-0">
          {props.title}
          <span className="static box-border caret-transparent hidden break-words ml-0 bottom-auto md:relative md:inline-block md:ml-2.5 md:-bottom-3">
            <a
              href={props.linkUrl}
              className="relative text-black text-[13px] font-extrabold items-center bg-[linear-gradient(to_left,rgb(225,230,30)_50%,rgb(214,219,29)_50%)] bg-size-[300%] box-border caret-transparent inline-block h-11 tracking-[1.3px] break-words text-left uppercase w-11 bg-right rounded-[50%] before:accent-auto before:bg-[url('https://www.hitt.com/wp-content/themes/beaverwarrior/assets/icons/Arrow_Icon_Black.svg')] before:bg-no-repeat before:bg-size-[100%] before:box-border before:caret-transparent before:text-black before:block before:text-[13px] before:not-italic before:normal-nums before:font-extrabold before:h-3 before:tracking-[1.3px] before:leading-[0px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:uppercase before:transform-none before:visible before:w-4 before:mx-auto before:border-separate before:top-[45%] before:inset-x-0 before:font-dm_serif_display before:md:-translate-y-1.5"
            ></a>
          </span>
        </div>
        <div className="static text-base box-border caret-transparent block leading-[28.8px] min-h-[auto] min-w-[auto] break-words ml-auto bottom-auto md:relative md:text-[17px] md:hidden md:leading-[30.6px] md:min-h-0 md:min-w-0 md:-bottom-3">
          <a
            href={props.linkUrl}
            className="relative text-[13px] font-extrabold items-center bg-[linear-gradient(to_left,rgb(225,230,30)_50%,rgb(214,219,29)_50%)] bg-size-[300%] box-border caret-transparent inline-block h-11 tracking-[1.3px] leading-[normal] break-words text-left uppercase w-11 bg-right rounded-[50%] before:accent-auto before:bg-[url('https://www.hitt.com/wp-content/themes/beaverwarrior/assets/icons/Arrow_Icon_Black.svg')] before:bg-no-repeat before:bg-size-[100%] before:box-border before:caret-transparent before:text-black before:block before:text-[13px] before:not-italic before:normal-nums before:font-extrabold before:h-3 before:tracking-[1.3px] before:leading-[0px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:uppercase before:-translate-y-1.5 before:visible before:w-4 before:mx-auto before:border-separate before:top-[45%] before:inset-x-0 before:font-urbanist before:md:transform-none"
          ></a>
        </div>
      </div>
    </div>
  );
};
