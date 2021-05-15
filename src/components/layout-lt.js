import React from 'react';
import Layout from './layout';
// import { addLocaleData } from 'react-intl';

import messages from '../data/messages/lt';
// import lt from 'react-intl/locale-data/lt';
// // import 'intl/locale-data/jsonp/en';

// addLocaleData(lt);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);
