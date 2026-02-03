export type NewsCardProps = {
  imageVariant: string;
  category: string;
  title: string;
  description: string;
  linkUrl: string;
};

export const NewsCard = (props: NewsCardProps) => {
  return (
    <div className="relative text-base box-border caret-transparent flex flex-col leading-[28.8px] break-words mb-[30px] md:static md:text-[17px] md:flex-row md:leading-[30.6px] md:mb-[60px]">
      <div
        className={`text-base bg-no-repeat bg-cover box-border caret-transparent h-full leading-[28.8px] min-h-[325px] min-w-0 break-words w-full bg-center md:text-[17px] md:leading-[30.6px] md:min-w-[340px] md:w-auto ${props.imageVariant}`}
      ></div>
      <div className="text-base items-start box-border caret-transparent flex flex-col justify-center leading-[28.8px] break-words w-full ml-0 md:text-[17px] md:leading-[30.6px] md:w-auto md:ml-[60px]">
        <div className="absolute text-base box-border caret-transparent flex flex-wrap leading-[28.8px] min-h-0 min-w-0 break-words left-[18px] top-[18px] md:static md:text-[17px] md:leading-[30.6px] md:min-h-[auto] md:min-w-[auto] md:left-auto md:top-auto">
          <span className="text-[13px] font-extrabold bg-gray-100 box-border caret-transparent block tracking-[1.3px] leading-[normal] break-words uppercase mr-5 p-2.5">
            {props.category}
          </span>
        </div>
        <h4 className="text-xl box-border caret-transparent tracking-[1px] leading-7 break-words mt-5 mb-2.5 font-dm_serif_display md:text-3xl md:leading-[42px]">
          {props.title}
        </h4>
        <div className="box-border caret-transparent tracking-[0.64px] leading-[30px] opacity-60 break-words mb-0 md:mb-5">
          {props.description}
        </div>
        <div className="text-base box-border caret-transparent hidden leading-[28.8px] min-h-0 min-w-0 break-words md:text-[17px] md:block md:leading-[30.6px] md:min-h-[auto] md:min-w-[auto]">
          <a
            href={props.linkUrl}
            className="relative text-[13px] font-extrabold items-center bg-[linear-gradient(to_left,rgb(225,230,30)_50%,rgb(214,219,29)_50%)] bg-size-[300%] box-border caret-transparent block h-11 tracking-[1.3px] leading-[normal] break-words text-left uppercase w-11 bg-right rounded-[50%] before:accent-auto before:bg-[url('https://www.hitt.com/wp-content/themes/beaverwarrior/assets/icons/Arrow_Icon_Black.svg')] before:bg-no-repeat before:bg-size-[100%] before:box-border before:caret-transparent before:text-black before:block before:text-[13px] before:not-italic before:normal-nums before:font-extrabold before:h-3 before:tracking-[1.3px] before:leading-[0px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:uppercase before:transform-none before:visible before:w-4 before:mx-auto before:border-separate before:top-[45%] before:inset-x-0 before:font-urbanist before:md:-translate-y-1.5"
          ></a>
        </div>
      </div>
    </div>
  );
};
