import { Link } from "react-router-dom";

type ButtonPropsType = {
  children: React.ReactNode;
  disabled?:boolean;
  to?: string;
  type?: string;
  onClick?: (()=>void) | ((event: React.MouseEvent<HTMLButtonElement>) => void);
}
function Button({to, children, type, disabled=false, onClick}:ButtonPropsType) {
  const base = 'bg-yellow-400 text-sm uppercase hover:bg-yellow-300 font-semibold inline-block tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-6 md:py-4 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary: "border-2 text-sm border-stone-300 uppercase hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 font-semibold inline-block tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5 text-stone-400"

  };

  if (to) return <Link to={to} className={styles[type]}>{children}</Link>
  if (onClick) return (
    <button onClick={onClick} disabled={disabled} className={styles[type]} >
      {children}
    </button>
  )
  return (
    <button disabled={disabled} className={styles[type]} >
      {children}
    </button>
  )
}

export default Button
