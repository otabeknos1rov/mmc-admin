import favicon from "./extensions/favicon.svg";
import AuthLogo from "./extensions/favicon.svg";
import MenuLogo from "./extensions/logo.png";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "MMC Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
      "Auth.form.welcome.title": "Welcome to MMC!",
      "Auth.form.welcome.subtitle": "Log in to your MMC account",
      "Auth.form.register.subtitle":
        "Credentials are only used to authenticate in MMC. All saved data will be stored in your database.",
      "app.components.HomePage.welcomeBlock.content.again":
        "We hope you are making progress on your project! Feel free to read the latest news about MMC. We are giving our best to improve the product based on your feedback.",
      "app.components.HomePage.welcomeBlock.content":
        "Congrats! You are logged as the first administrator. To discover the powerful features provided by MMC, we recommend you to create your first Content type!",
    },
  },
  head: { favicon: favicon },
  auth: { logo: AuthLogo },
  menu: { logo: MenuLogo },
  tutorials: false,
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
