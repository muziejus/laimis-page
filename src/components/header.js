import * as React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from 'react-intl';
import { Link } from "gatsby"
// import SelectLanguage from './select-language';
import Menu from "./menu";
import "./header.css";


const Header = ({ langs }) => (
  <header>
    <h1>
      <Link
        to="/"
      >
        <FormattedMessage id="title" />
      </Link>
    </h1>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
