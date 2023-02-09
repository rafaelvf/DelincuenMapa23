import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/global.css";
import { updateCustomers } from "../redux/userSlice";

export default function App({ Component, pageProps }: AppProps) {
  store.dispatch(updateCustomers());
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
