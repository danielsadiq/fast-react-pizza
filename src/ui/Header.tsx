import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3 uppercase border-b border-stone-500 sm:px-6">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p className="hidden">Daniel</p>
    </header>
  );
}

export default Header;
