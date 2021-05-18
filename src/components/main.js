import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FormattedMessage } from 'react-intl';
import "./main.css";

export default function Main({ langKey, url, children }) {
  if(langKey !== "en"){
    url = url.substring(3);
  }
  const data = "";

  return (
    <main>
      <article>
        {url}
        {children}
      </article>
      <aside>
      <StaticImage src="../images/laimis-uhaul.jpg" alt="Laimis smiling broadly." 
      placeholder="blurred"
      />
      <p className="text-xs md:text-sm"><FormattedMessage id="laimisUHaulCaption" /></p>
      </aside>
    </main>
  );
};

