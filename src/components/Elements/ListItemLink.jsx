import { Link } from "react-router-dom";
const ListItemLink = ({children}) => {
    return (
        <li className="font-semibold">
            <Link>{children}</Link>
        </li>
    )
}
export default ListItemLink