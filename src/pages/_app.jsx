import AppContext from "../context/AppContext";
import "./../style/index.scss";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
  );
}

export default MyApp;
