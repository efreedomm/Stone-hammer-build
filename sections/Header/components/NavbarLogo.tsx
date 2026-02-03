export const NavbarLogo = () => {
      return (
        <div className="w-[120px]">
          <a href="/" className="block">
            {/* Using brightness-0 invert to make the logo white as per screenshot */}
            <img
              src="https://c.animaapp.com/ml62k1v8Dr0K8D/assets/Logo@3x.png"
              alt="HITT Contracting"
              className="w-full brightness-0 invert"
            />
          </a>
        </div>
      );
    };
