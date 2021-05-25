import * as React from "react"
import { Trans } from "@lingui/macro"
import { i18n } from "@lingui/core"
// import { Marker } from 'react-leaflet'
// import Map from "../components/map"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Memorial = () => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/New_York",
    timeZoneName: "short"
  }
  const stMarysDate = i18n.date("2021-06-26 9:30 EDT", dateOptions);
  const stPetersDate = i18n.date("2021-06-27 10:30 EDT", dateOptions);
  return (
    <Layout passedPath={"/memorial"}>
      <Seo title="Memorial" />
      <h2><Trans>Memorial Mass at St. Mary’s Dartmouth</Trans></h2>
      
      <ul>
        <li>
          <Trans>
            <a href="http://stmarysdartmouth.org">St. Mary’s Catholic Church</a>, 789 Dartmouth St., South Dartmouth, MA
          </Trans>
        </li>
        <li>
          {stMarysDate}
        </li>
      </ul>
    {
      // <Map center={[41.592004, -70.943337]} zoom={14}>
      //   <Marker position={[41.592004, -70.943337]} />
      // </Map>
    }

      <h2><Trans>Memorial Mass at St. Peters’s South Boston</Trans></h2>
      
      <ul>
        <li>
          <Trans>
            <a href="http://stpeterlithuanianparish.org">St. Peter’s Lithuanian Parish</a>, 75 Flaherty Way, South Boston
          </Trans>
        </li>
        <li>
          {stPetersDate}
        </li>
      </ul>
    {
      // <Map center={[42.338692, -71.054990]} zoom={14}>
      //   <Marker position={[42.338692, -71.054990]} />
      // </Map>
    }
    </Layout>
  );
}

export default Memorial;
