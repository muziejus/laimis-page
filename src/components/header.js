import * as React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from 'react-intl';
import { Link } from "gatsby"
// import SelectLanguage from './select-language';
import Menu from "./menu";
import DropdownMenu from "./dropdown-menu";
import "./header.css";


const Header = ({ url, langKey, langs }) => {
  const dropdown = false;

  return (
    <header>
      <h1>
        <Link
          to="/"
        >
          <FormattedMessage id="title" />
        </Link>
      </h1>
      <div className="flex flex-row">
        <Menu dropdown={dropdown} url={url} langKey={langKey} />
        <DropdownMenu url={url} langKey={langKey} />
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
