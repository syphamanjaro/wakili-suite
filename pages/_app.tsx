// pages/_app.tsx
import '../styles/globals.css'; // Import global styles from the styles folder

import React from 'react';

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;  // This renders the current page with all the props
}

export default MyApp;
