// pages/_app.js
import '../styles/globals.css'; // Import global styles from the styles folder

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
