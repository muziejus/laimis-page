import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./footer.css";

const Footer = ({ langs }) => (
  <footer>
    <p>© {new Date().getFullYear()}, <FormattedMessage id="builtWith" />
      <a href="https://www.gatsbyjs.com"> <FormattedMessage id="gatsby" /> </a> 
      <FormattedMessage id="byWhom" />
      .
    </p>
  </footer>
)

export default Footer
