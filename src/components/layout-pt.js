import React from 'react';
import Layout from './layout';
// import { addLocaleData } from 'react-intl';

import messages from '../data/messages/pt';
// import pt from 'react-intl/locale-data/pt';
// // import 'intl/locale-data/jsonp/en';

// addLocaleData(pt);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);
