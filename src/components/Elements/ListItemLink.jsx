import { Link } from "react-router-dom";
const ListItemLink = ({ children, classname = "font-semibold" }) => {
  return (
    <li className={classname}>
      <Link>{children}</Link>
    </li>
  );
};
export default ListItemLink;
