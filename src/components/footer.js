import * as React from 'react';
import { Trans } from "@lingui/macro"
import "./footer.css";

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()},&nbsp; 
      <Trans>
        Built with <a href="http://www.gatsbyjs.com">Gatsby</a> by Laimis’s brother Moacir with art direction by Laimis’s niece Nia.
      </Trans>
    </p>
  </footer>
)

export default Footer
