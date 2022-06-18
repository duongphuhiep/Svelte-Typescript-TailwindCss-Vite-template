import App from "./App.svelte";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("./lang/en.json"));
register("fr", () => import("./lang/fr.json"));
register("vn", () => import("./lang/vn.json"));
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});

const app = new App({
  target: document.body,
});

export default app;
