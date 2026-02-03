export type FooterLinksProps = {
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterLinks = (props: FooterLinksProps) => {
  return (
    <ul className="text-base box-border caret-transparent tracking-[0.8px] leading-[28.8px] list-none break-words pl-0 md:text-[17px] md:leading-[30.6px]">
      {props.links.map((link, index) => (
        <li
          key={index}
          className="text-base box-border caret-transparent block leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"
        >
          <a
            href={link.href}
            className="text-white text-[13px] font-extrabold box-border caret-transparent tracking-[1.3px] leading-[23.4px] break-words text-left uppercase md:leading-[38px]"
          >
            {link.text}
            <p className="text-base font-normal box-border caret-transparent tracking-[0.8px] leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"></p>
          </a>
        </li>
      ))}
    </ul>
  );
};
