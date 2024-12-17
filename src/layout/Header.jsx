import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="flex-col-row border-b sticky top-0 z-50 bg-black sm:justify-between sm:border-solid sm:">
      <h1 className="text-purple text-3xl text-center py-6 sm:px-6">
        Priscilla
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
