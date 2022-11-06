import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { customTheme } from "./theme";
import Global from "./theme/global";
import ptBR from "./i18n/langs/ptBR.json";
import { IntlProvider } from "react-intl";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const messages = ptBR;

root.render(
  <IntlProvider locale={"pt-BR"} defaultLocale={"pt-BR"} messages={messages}>
    <ThemeProvider theme={customTheme}>
      <App />
      <Global />
    </ThemeProvider>
  </IntlProvider>
);
