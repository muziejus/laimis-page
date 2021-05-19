import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./main.css";

export default function Main({ children }) {

  return (
    <main>
      <article>
        {children}
      </article>
      <aside>
      <StaticImage src="../images/laimis-uhaul.jpg" alt="Laimis smiling broadly." 
      placeholder="blurred"
      />
      <p className="text-xs md:text-sm">"laimisUHaulCaption"</p>
      </aside>
    </main>
  );
};

