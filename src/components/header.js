import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Trans } from "@lingui/macro"
import Menu from "./menu";
import LanguagePicker from "./language-picker";
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
          <Trans>In Memory of Laimis</Trans>
        </Link>
      </h1>
      <div className="flex flex-row">
        <Menu dropdown={dropdown} />
        <DropdownMenu />
        <LanguagePicker />
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
