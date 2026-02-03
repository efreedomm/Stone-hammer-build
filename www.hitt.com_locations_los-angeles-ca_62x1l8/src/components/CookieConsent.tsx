export const CookieConsent = () => {
  return (
    <div
      aria-label="We value your privacy"
      role="region"
      className="fixed box-border caret-transparent hidden break-words w-full z-[9999999] left-0 bottom-0"
    >
      <div className="bg-neutral-900 shadow-[rgba(172,171,171,0.3)_0px_-1px_10px_0px] box-border caret-transparent break-words border border-zinc-800 px-0 py-[16.5px] border-solid md:px-6">
        <div className="box-border caret-transparent break-words">
          <p
            role="heading"
            className="text-stone-300 text-lg font-bold box-border caret-transparent tracking-[0.8px] leading-6 break-words mb-3 px-6 md:px-0"
          >
            We value your privacy
          </p>
          <div className="text-sm items-center box-border caret-transparent block justify-between leading-6 break-words md:flex">
            <div className="text-stone-300 box-border caret-transparent max-h-[400px] break-words overflow-x-auto overflow-y-scroll px-6 md:max-h-none md:overflow-x-visible md:overflow-y-visible md:px-0">
              <p className="box-border caret-transparent tracking-[0.8px] leading-[25.2px] break-words">
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking &quot;Accept All&quot;, you consent to our use of
                cookies. 
                <a
                  href="https://www.hitt.com/privacy-policy/"
                  aria-label="Cookie Policy"
                  className="text-yellow-400 box-border caret-transparent break-words underline text-nowrap border border-solid border-transparent"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col break-words ml-0 mt-2.5 px-6 md:flex-row md:justify-center md:ml-[15px] md:mt-0 md:px-0">
              <button
                aria-label="Reject All"
                className="text-stone-300 font-medium bg-transparent caret-transparent block grow max-w-full order-3 break-words text-center text-wrap w-full border-stone-300 mr-0 mt-2.5 p-2 rounded-sm border-solid md:grow-0 md:max-w-none md:order-none md:text-nowrap md:w-auto md:mr-2 md:mt-0 md:px-[27px]"
              >
                Reject All
              </button>
              <button
                aria-label="Accept All"
                className="font-medium bg-yellow-400 caret-transparent block grow max-w-full order-1 break-words text-center text-wrap w-full border-yellow-400 mt-4 p-2 rounded-sm border-solid md:grow-0 md:max-w-none md:order-none md:text-nowrap md:w-auto md:mt-0 md:px-[27px]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
