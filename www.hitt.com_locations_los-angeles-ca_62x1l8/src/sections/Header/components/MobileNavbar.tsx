import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { MobileMenuDrawer } from "@/sections/Header/components/MobileMenuDrawer";

export const MobileNavbar = () => {
  return (
    <div className="relative text-base box-border caret-transparent leading-[28.8px] min-h-0 break-words pl-5 pr-[15px] border-b-white/20 border-b md:text-[17px] md:leading-[30.6px] md:min-h-[50px] md:pl-[50px] md:pr-[45px]">
      <div className="text-base items-center box-border caret-transparent flex justify-between leading-[28.8px] max-w-[1364px] break-words w-full mx-auto md:text-[17px] md:justify-center md:leading-[30.6px]">
        <nav
          aria-label="Primary Navigation"
          className="text-base box-border caret-transparent leading-[28.8px] order-3 break-words md:text-[17px] md:leading-[30.6px] md:order-2"
        >
          <MobileMenuButton />
          <MobileMenuDrawer />
        </nav>
        <div className="text-base box-border caret-transparent block leading-[28.8px] max-w-[120px] min-h-[auto] min-w-[auto] order-2 break-words mx-5 md:text-[17px] md:hidden md:leading-[30.6px] md:min-h-0 md:min-w-0 md:order-1">
          <div className="text-xl box-border caret-transparent hidden tracking-[1px] leading-[normal] break-words text-center font-dm_serif_display">
            Menu
          </div>
          <a
            href="/"
            className="text-yellow-400 text-base box-border caret-transparent block leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"
          >
            <img
              src="https://c.animaapp.com/ml62k1v8Dr0K8D/assets/Logo@3x.png"
              alt="HITT Contracting"
              className="text-base box-border caret-transparent leading-[28.8px] max-w-full break-words w-full md:text-[17px] md:leading-[30.6px]"
            />
            <img
              src="https://c.animaapp.com/ml62k1v8Dr0K8D/assets/Logo@3x-2.png"
              alt="HITT Contracting"
              className="text-base box-border caret-transparent hidden leading-[28.8px] max-w-full break-words w-full md:text-[17px] md:leading-[30.6px]"
            />
          </a>
        </div>
        <nav
          aria-label="Secondary Navigation"
          className="text-base box-border caret-transparent block leading-[28.8px] min-h-[auto] min-w-[auto] order-1 break-words md:text-[17px] md:hidden md:leading-[30.6px] md:min-h-0 md:min-w-0 md:order-3"
        >
          <ul className="text-base box-border caret-transparent flex flex-row-reverse tracking-[0.8px] leading-[28.8px] list-none break-words pl-0 md:text-[17px] md:leading-[30.6px]">
            <li className="text-base box-border caret-transparent leading-[28.8px] min-h-[auto] min-w-[auto] break-words mx-[5px] md:text-[17px] md:leading-[30.6px] md:min-h-0 md:min-w-0 md:mr-2.5">
              <button
                type="button"
                aria-label="Search"
                className="text-white text-base bg-transparent caret-transparent block h-full tracking-[normal] leading-[15px] break-words text-center px-[5px] py-[21px] rounded-bl rounded-br rounded-tl rounded-tr md:text-[17px] md:pl-1 md:pt-[7px] md:pb-[5px]"
              >
                <span className="text-base box-border caret-transparent block h-[15px] break-words w-[15px] md:text-[17px]">
                  <img
                    src="https://c.animaapp.com/ml62k1v8Dr0K8D/assets/icon-6.svg"
                    alt="Icon"
                    className="text-base box-border caret-transparent md:text-[17px]"
                  />
                </span>
                <span className="text-base box-border caret-transparent hidden h-[15px] break-words w-[15px] md:text-[17px]">
                  <img
                    src="https://c.animaapp.com/ml62k1v8Dr0K8D/assets/icon-7.svg"
                    alt="Icon"
                    className="text-base box-border caret-transparent md:text-[17px]"
                  />
                </span>
              </button>
            </li>
            <li className="text-base box-border caret-transparent hidden leading-[28.8px] break-words mx-[5px] md:text-[17px] md:leading-[30.6px] md:mr-2.5">
              <a
                href="https://www.hitt.com/news-hub/"
                className="text-white text-xl box-border caret-transparent block tracking-[1px] leading-[15px] break-words px-[5px] py-[21px] md:text-2xl md:pt-[7px] md:pb-[5px] md:px-1"
              >
                News
                <p className="text-base box-border caret-transparent tracking-[0.8px] leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"></p>
              </a>
            </li>
            <li className="text-base box-border caret-transparent hidden leading-[28.8px] break-words mx-[5px] md:text-[17px] md:leading-[30.6px] md:mr-2.5">
              <a
                href="https://www.hitt.com/locations/"
                className="text-white text-xl box-border caret-transparent block tracking-[1px] leading-[15px] break-words px-[5px] py-[21px] md:text-2xl md:pt-[7px] md:pb-[5px] md:px-1"
              >
                Locations
                <p className="text-base box-border caret-transparent tracking-[0.8px] leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"></p>
              </a>
            </li>
            <li className="text-base box-border caret-transparent hidden leading-[28.8px] break-words mx-[5px] md:text-[17px] md:leading-[30.6px] md:mr-[15px]">
              <a
                href="https://www.hitt.com/national-reach/"
                className="text-white text-xl box-border caret-transparent block tracking-[1px] leading-[15px] break-words px-[5px] py-[21px] md:text-2xl md:pt-[7px] md:pb-[5px] md:px-1"
              >
                National Reach
                <p className="text-base box-border caret-transparent tracking-[0.8px] leading-[28.8px] break-words md:text-[17px] md:leading-[30.6px]"></p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
