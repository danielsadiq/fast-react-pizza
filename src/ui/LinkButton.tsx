import { Link } from "react-router-dom"

function LinkButton() {
  return (
    <Link to="/menu" className="text-sm text-blue-500 hover:underline">{chi}</Link>
  )
}

export default LinkButton
