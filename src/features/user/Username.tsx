import { useSelector } from "react-redux"

function Username() {
  const usernmae = useSelector(state => state.user.username);
  if (!usernmae) return null;
  return (
    <p className="hidden md:block font-semibold text-sm">{usernmae}</p>
  )
}

export default Username
