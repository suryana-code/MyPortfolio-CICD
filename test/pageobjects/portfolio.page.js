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

  // navbar
  get navProject() {
    return $('[data-test="nav-projects-button"]');
  }
  get navSkills() {
    return $("#nav-skills-button");
  }
  get navExpe() {
    return $("#nav-experiences-button");
  }
  get navCerti() {
    return $("#nav-certifications-button");
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

  get titleProject() {
    return $('[data-test="section__titles-projects"]');
  }

  get titleSkills() {
    return $('[data-test="section__titles-skills"]');
  }

  get titleExpe() {
    return $('[data-test="section__title-work-experiences"]');
  }

  get titleCerti() {
    return $('[data-test="section__title-certifications"]');
  }

  get titleBlogs() {
    return $('[data-test="section__title-blogs"]');
  }

  get titleGitProject() {
    return $("#section__title-github-project");
  }

  get titleContact() {
    return $('[data-test="section__title-contact"]');
  }

  async actionPortfolio() {
    await this.txtAboutName.isDisplayed();

    await this.txtAboutRole.isDisplayed();

    await this.txtAboutDesc.isDisplayed();

    await this.txtAboutImg.isDisplayed();

    await this.navProject.click();
    await this.titleProject.isDisplayed();
    const textProject = await this.titleProject.getText();

    await this.navSkills.click();
    await this.titleSkills.isDisplayed();
    const textSkills = await this.titleSkills.getText();

    await this.navExpe.click();
    await this.titleExpe.isDisplayed();
    const textExpe = await this.titleExpe.getText();

    await this.navCerti.click();
    await this.titleCerti.isDisplayed();
    const textCerti = await this.titleCerti.getText();

    await this.navBlogs.click();
    await this.titleBlogs.isDisplayed();
    const textBlogs = await this.titleBlogs.getText();

    await this.navGitProject.click();
    await this.titleGitProject.isDisplayed();
    const textGitProject = await this.titleGitProject.getText();

    await this.navContact.click();
    await this.titleContact.isDisplayed();
    const textContact = await this.titleContact.getText();

    return {
      textProject,
      textSkills,
      textExpe,
      textCerti,
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
