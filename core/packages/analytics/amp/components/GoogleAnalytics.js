/* eslint-disable react/jsx-no-target-blank, react/no-danger */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = ({
  trackingId,
  title,
  documentLocation,
  extraUrlParams,
  vars,
  triggers,
}) => (
  <Fragment>
    <Helmet>
      <script
        async=""
        custom-element="amp-analytics"
        src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
      />
    </Helmet>
    <amp-analytics type="googleanalytics">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            vars: {
              account: trackingId,
              ...vars,
            },
            extraUrlParams,
            triggers: {
              trackPageviewWithCanonicalUrl: {
                on: 'visible',
                request: 'pageview',
                vars: {
                  title,
                  documentLocation,
                },
              },
              ...triggers,
            },
          }),
        }}
      />
    </amp-analytics>
  </Fragment>
);

GoogleAnalytics.propTypes = {
  trackingId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  documentLocation: PropTypes.string.isRequired,
  extraUrlParams: PropTypes.shape({}),
  vars: PropTypes.shape({}),
  triggers: PropTypes.shape({}),
};

GoogleAnalytics.defaultProps = {
  extraUrlParams: {},
  vars: {},
  triggers: {},
};

export default GoogleAnalytics;
