import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import { purpleTheme } from "./utils/themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={purpleTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
