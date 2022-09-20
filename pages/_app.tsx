import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../src/redux";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  /* A way to disable console.log in production. */
  if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
    console.log = function () {};
  }
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;