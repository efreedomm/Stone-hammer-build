export type AccessibilityWidgetProps = {
  variant: "skip-links" | "empty" | "button";
  menuHref?: string;
  footerHref?: string;
  buttonIconSrc?: string;
};

export const AccessibilityWidget = (props: AccessibilityWidgetProps) => {
  if (props.variant === "skip-links") {
    return (
      <div className="absolute block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border">
          <div
            role="region"
            aria-label="Skip Links"
            className="fixed box-border z-[2147483647] left-0 top-0"
          >
            <div className="box-border"></div>
            <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <a
                href={props.menuHref || "#acsbMenu"}
                className="static text-black bg-transparent shadow-none box-content inline min-w-0 opacity-100 outline-black pointer-events-auto text-start z-auto p-0 rounded-none left-auto top-auto font-times md:fixed md:text-gray-800 md:aspect-auto md:bg-white md:shadow-[rgba(19,110,248,0.3)_0px_0px_0px_5px] md:box-border md:block md:min-w-[200px] md:opacity-0 md:outline-blue-400 md:outline md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:z-[2147483647] md:border-blue-600/80 md:[mask-position:0%] md:bg-left-top md:px-5 md:py-[13px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-[3px] md:border-solid md:left-5 md:top-[50px] md:font-arial"
              >
                Skip to Menu
                <div className="text-black text-base [align-items:normal] bg-transparent box-content block justify-normal normal-case ml-0 p-0 rounded-none md:text-white md:text-[10px] md:items-center md:aspect-auto md:bg-blue-600 md:box-border md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[30px] md:px-2.5 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px]">
                  <span className="text-base box-content inline leading-[normal] min-h-0 min-w-0 mr-0 md:text-[15px] md:aspect-auto md:box-border md:block md:leading-[15px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                    ↵
                  </span>
                  ENTER
                </div>
              </a>
            </div>
            <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <a
                href={props.footerHref || "#acsbFooter"}
                className="static text-black bg-transparent shadow-none box-content inline min-w-0 opacity-100 outline-black pointer-events-auto text-start z-auto p-0 rounded-none left-auto top-auto font-times md:fixed md:text-gray-800 md:aspect-auto md:bg-white md:shadow-[rgba(19,110,248,0.3)_0px_0px_0px_5px] md:box-border md:block md:min-w-[200px] md:opacity-0 md:outline-blue-400 md:outline md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:z-[2147483647] md:border-blue-600/80 md:[mask-position:0%] md:bg-left-top md:px-5 md:py-[13px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-[3px] md:border-solid md:left-5 md:top-[50px] md:font-arial"
              >
                Skip to Footer
                <div className="text-black text-base [align-items:normal] bg-transparent box-content block justify-normal normal-case ml-0 p-0 rounded-none md:text-white md:text-[10px] md:items-center md:aspect-auto md:bg-blue-600 md:box-border md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[30px] md:px-2.5 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px]">
                  <span className="text-base box-content inline leading-[normal] min-h-0 min-w-0 mr-0 md:text-[15px] md:aspect-auto md:box-border md:block md:leading-[15px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                    ↵
                  </span>
                  ENTER
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "empty") {
    return (
      <div className="absolute block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]"></div>
    );
  }

  if (props.variant === "button") {
    return (
      <div className="absolute block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border">
          <button
            aria-label="Open accessiBe: accessibility options, statement and help"
            className="fixed text-[13.3333px] bg-blue-600 block h-[30px] text-center w-[30px] z-[2147483647] p-0 rounded-[50%] right-5 bottom-5 font-arial md:h-[45px] md:w-[45px]"
          >
            <span className="text-white box-border">
              <img
                src={
                  props.buttonIconSrc ||
                  "https://c.animaapp.com/ml62k1v8Dr0K8D/assets/icon-3.svg"
                }
                alt="Icon"
                className="absolute box-border flex m-auto inset-0"
              />
            </span>
          </button>
        </div>
      </div>
    );
  }

  return null;
};
