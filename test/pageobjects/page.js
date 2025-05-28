import { browser } from "@wdio/globals";

export default class Page {
  open(path) {
    return browser.url(`https://msuryana-portfolio.pages.dev/${path}`);
    // return browser.url(`http://localhost:3000/${path}`);
  }
}
