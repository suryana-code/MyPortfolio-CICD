import { expect } from "@wdio/globals";
import PortfolioPage from "../pageobjects/portfolio.page.js";

describe("Cek halaman portfolio", () => {
  it("apakah element-element yang sudah diatur tampil", async () => {
    await PortfolioPage.open();

    const portfolio = await PortfolioPage.actionPortfolio();

    expect(portfolio.textProject).toEqual("PROJECTS");
    expect(portfolio.textSkills).toEqual("SKILLS");
    expect(portfolio.textExpe).toEqual("WORK EXPERIENCES");
    expect(portfolio.textCerti).toEqual("CERTIFICATIONS");
    expect(portfolio.textBlogs).toEqual("BLOGS");
    expect(portfolio.textGitProject).toEqual("GITHUB PROJECT");
    expect(portfolio.textContact).toEqual("CONTACT");
  });
});
