import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import SelectLanguage from './select-language';
import "./header.css";


const Header = ({ langs, siteTitle }) => (
  <header>
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
