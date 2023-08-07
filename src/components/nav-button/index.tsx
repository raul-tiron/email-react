import { Link } from "react-router-dom";

interface IProps {
    name: string
}

const NavButton: React.FC<IProps> = ({ name }): JSX.Element => {

  return (
    <Link
    to={'/' + name.toLowerCase().replace(/ /g, '-')}
    >
        {name}
    </Link>
  )
}

export default NavButton;
