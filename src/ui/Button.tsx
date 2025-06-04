import { Link } from "react-router-dom";

type ButtonPropsType = {
  children: React.ReactNode;
  disabled?:boolean;
  to?: string;
}
function Button({to, children, disabled=false}:ButtonPropsType) {
  const className="bg-yellow-400 uppercase hover:bg-yellow-300 font-semibold py-3 px-4 inline-block tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px"
  if (to) return <Link to={to}>{children}</Link>
  return (
    <button disabled={disabled} className={className} >
      {children}
    </button>
  )
}

export default Button
