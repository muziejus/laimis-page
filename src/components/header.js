import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu";
import DropdownMenu from "./dropdown-menu";
import "./header.css";


const Header = () => {
  const dropdown = false;

  return (
    <header>
      <h1>
        <Link
          to="/"
        >
          title
        </Link>
      </h1>
      <div className="flex flex-row">
        <Menu dropdown={dropdown} />
        <DropdownMenu />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
