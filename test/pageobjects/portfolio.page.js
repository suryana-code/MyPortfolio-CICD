import { $ } from "@wdio/globals";
import Page from "./page.js";

class PortfolioPage extends Page {
  get txtAboutName() {
    return $("#about-name");
  }
  get txtAboutRole() {
    return $("#about-role");
  }
  get txtAboutDesc() {
    return $("#about-description");
  }
  get txtAboutImg() {
    return $("#about-profile-image");
  }

  // ======== Navbar
  get navProject() {
    return $("#nav-projects-button");
  }
  get navSkills() {
    return $("#nav-skills-button");
  }
  get navExpe() {
    return $("#nav-experiences-button");
  }
  get navTemp() {
    return $("#nav-template-documentation-button");
  }
  get navTesti() {
    return $("#nav-testimonials-button");
  }
  get navCerti() {
    return $("#nav-certifications-button");
  }
  get navEdu() {
    return $("#nav-educations-button");
  }
  get navBlogs() {
    return $("#nav-blogs-button");
  }
  get navGitProject() {
    return $("#nav-github-project-button");
  }
  get navContact() {
    return $("#nav-contact-button");
  }

  // ======== Section
  get titleProject() {
    return $("#section__titles-projects");
  }
  get titleSkills() {
    return $("#section__titles-skills");
  }
  get titleExpe() {
    return $("#section__title-work-experiences");
  }
  get titleTemp() {
    return $("#section__titles-qa-template-documentation");
  }
  get titleTesti() {
    return $('[id="section__titles-what-they-say-about-me?"]');
  }
  get titleCerti() {
    return $("#section__title-certifications");
  }
  get titleEdu() {
    return $("#education h2");
  }
  get titleBlogs() {
    return $("#section__title-blogs");
  }
  get titleGitProject() {
    return $("#section__title-github-project");
  }
  get titleContact() {
    return $("#section__title-contact");
  }

  // ======== Action
  async actionPortfolio() {
    await this.txtAboutName.isDisplayed();

    await this.txtAboutRole.isDisplayed();

    await this.txtAboutDesc.isDisplayed();

    await this.txtAboutImg.isDisplayed();

    await this.navProject.click();
    await this.titleProject.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleProject.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textProject = await this.titleProject.getText();

    await this.navSkills.click();
    await this.titleSkills.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleSkills.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textSkills = await this.titleSkills.getText();

    await this.navExpe.click();
    await this.titleExpe.waitForDisplayed({ timeout: 15000 });
    await this.titleExpe.scrollIntoView();
    await browser.waitUntil(
      async () => (await this.titleExpe.getText()).trim() !== "",
      {
        timeout: 15000,
        timeoutMsg: "Work Experiences title did not contain text within 15 seconds",
      },
    );
    const textExpe = await this.titleExpe.getText();

    await this.navTemp.click();
    await this.titleTemp.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleTemp.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textTemp = await this.titleTemp.getText();

    await this.navTesti.click();
    await this.titleTesti.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleTesti.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textTesti = await this.titleTesti.getText();

    await this.navCerti.click();
    await this.titleCerti.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleCerti.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textCerti = await this.titleCerti.getText();

    await this.navEdu.click();
    await this.titleEdu.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleEdu.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textEdu = await this.titleEdu.getText();

    await this.navBlogs.click();
    await this.titleBlogs.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleBlogs.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textBlogs = await this.titleBlogs.getText();

    await this.navGitProject.click();
    await this.titleGitProject.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleGitProject.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textGitProject = await this.titleGitProject.getText();

    await this.navContact.click();
    await this.titleContact.isDisplayed();
    await browser.waitUntil(
      async () => (await this.titleContact.getText()).trim() !== "",
      { timeout: 10000 },
    );
    const textContact = await this.titleContact.getText();

    return {
      textProject,
      textSkills,
      textExpe,
      textTemp,
      textTesti,
      textCerti,
      textEdu,
      textBlogs,
      textGitProject,
      textContact,
    };
  }

  open() {
    return super.open("");
  }
}

export default new PortfolioPage();
