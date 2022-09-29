import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import DropDown from "./DropDown";

const Header = ({ title, onChangeUser, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>

      <>
        <DropDown onClick={onChangeUser} />
      </>
    </header>
  );
};

Header.defaultProps = {
  title: "Transactions",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
