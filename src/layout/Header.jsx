import Navigation from "./navigation";
import { LuAlignJustify } from "react-icons/lu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex-col-row border-b py-5 sticky top-0 z-50 bg-black sm:justify-between sm:border-solid">
      <div className="flex justify-between items-center w-full px-6 sm:px-0 sm:w-auto">
        <h1 className="text-purple text-3xl text-center sm:px-6 sm:w-auto">
          Priscilla
        </h1>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <LuAlignJustify />
        </button>
      </div>
      <Navigation
        className={`h-0 overflow-hidden sm:h-auto ${
          isMenuOpen ? "h-auto" : ""
        }`}
      />
    </header>
  );
};

export default Header;
