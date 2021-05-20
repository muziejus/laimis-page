import * as React from "react"
import { Trans } from "@lingui/macro"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex flex-row items-stretch w-full space-x-4">
        <Link to="/jimmy-fund" className="w-1/2">
          <button className="w-full h-full button">
            <Trans>Donate to the Jimmy Fund</Trans>
          </button>
        </Link>
        <Link to="/cam-neely-foundation" className="w-1/2">
          <button className="w-full h-full button">
              <Trans>Donate to The Cam Neely Foundation</Trans>
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
