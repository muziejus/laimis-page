import * as React from "react"
import { Trans } from "@lingui/macro"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

import "./menu.css"

const Menu = ({ dropdown }) => {
  const isDropdown = dropdown ? "dropdown-menu" : "menu"
  let className = "" // as opposed to "active"
  return (
    <ul className={isDropdown}>
      <li className={className}>
        <Link to="/memorial">
          <Trans>Valediction</Trans>
        </Link>
      </li>
      <li className={className}>
        <Link to="/jimmy-fund">
          <Trans>Jimmy Fund</Trans>
        </Link>
      </li>
      <li className={className}>
        <Link to="/cam-neely-foundation">
          <Trans>Cam Neely Foundation</Trans>
        </Link>
      </li>
    </ul>
  )
}

export default Menu
