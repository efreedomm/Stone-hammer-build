export type NavbarMenuProps = {
  variant: string;
  items: Array<{
    type: "link" | "button";
    text: string;
    href?: string;
    ariaLabel?: string;
    iconSrc?: string;
    iconHoverSrc?: string;
    className?: string;
    isHighlighted?: boolean;
  }>;
};

export const NavbarMenu = (props: NavbarMenuProps) => {
  return (
    <nav
      aria-label="Secondary Navigation"
      className={`text-base box-border caret-transparent leading-[28.8px] min-h-0 min-w-0 break-words w-[33.33%] md:text-[17px] md:leading-[30.6px] md:min-h-[auto] md:min-w-[auto] ${props.variant}`}
    >
      <ul
        className={`text-base items-center box-border caret-transparent flex tracking-[0.8px] leading-[28.8px] list-none break-words pl-0 md:text-[17px] md:leading-[30.6px] ${props.variant === "order-1" ? "justify-start" : "justify-end"}`}
      >
        {props.items.map((item, index) => (
          <li
            key={index}
            className={
              item.isHighlighted
                ? "text-base box-border caret-transparent hidden leading-[28.8px] min-h-0 min-w-0 break-words mx-[5px] md:text-[17px] md:block md:leading-[30.6px] md:min-h-[auto] md:min-w-[auto] md:mr-[15px]"
                : item.type === "button"
                  ? "text-base box-border caret-transparent leading-[28.8px] min-h-0 min-w-0 break-words mx-[5px] md:text-[17px] md:leading-[30.6px] md:min-h-[auto] md:min-w-[auto] md:mr-2.5"
                  : "text-base box-border caret-transparent hidden leading-[28.8px] min-h-0 min-w-0 break-words mx-[5px] md:text-[17px] md:block md:leading-[30.6px] md:min-h-[auto] md:min-w-[auto] md:mr-2.5"
            }
          >
            {item.type === "button" ? (
              <button
                type="button"
                aria-label={item.ariaLabel}
                className="text-white text-base bg-transparent caret-transparent block h-full tracking-[normal] leading-[15px] break-words text-center px-[5px] py-[21px] rounded-bl rounded-br rounded-tl rounded-tr md:text-[17px] md:pl-1 md:pt-[7px] md:pb-[5px]"
              >
                <span className="text-base box-border caret-transparent block h-[15px] break-words w-[15px] md:text-[17px]">
                  <img
                    src={item.iconSrc}
                    alt="Icon"
                    className="text-base box-border caret-transparent md:text-[17px]"
                  />
                </span>
                <span className="text-base box-border caret-transparent hidden h-[15px] break-words w-[15px] md:text-[17px]">
                  <img
                    src={item.iconHoverSrc}
                    alt="Icon"
                    className="text-base box-border caret-transparent md:text-[17px]"
                  />
                </span>
              </button>
            ) : (
              <a
                href={item.href}
                className={`relative text-white text-xs font-bold box-border caret-transparent block tracking-[1.32px] leading-[normal] break-words uppercase pt-3.5 pb-2.5 px-1.5 ${item.className || ""}`}
              >
                {item.text}
                <p className="text-base font-normal box-border caret-transparent tracking-[0.8px] leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"></p>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
