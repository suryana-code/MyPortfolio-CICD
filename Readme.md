## 🧾 Project Description

**MyPortfolio-CICD** is a personal portfolio project that showcases work experience, skills, and projects. It is built using React and configured with a CI/CD pipeline using GitHub Actions to automate the build and deployment process to GitHub Pages.

## 🛠️ Technologies Used

- **React**: To build the user interface.
- [**GitHub Actions**](https://suryana-code.github.io/MyPortfolio-CICD/#suites/90ed9ec3cc79190f4344534f068e4bd7/51d77a4392594df7/): To automate the build and deployment process.
- **GitHub Pages**: For hosting the static website.
- **WebdriverIO**: For end-to-end testing.
- **Allure Reports**: For test result reporting.

## ⚙️ Project Structure

- `.github/workflows/`: Contains GitHub Actions workflow configuration files.
- `test/`: Contains test scripts written using WebdriverIO.
- `allure-results/`: Stores test results for Allure Reports.
- `wdio.conf.js`: WebdriverIO configuration file.
- `package.json`: Defines project dependencies and scripts.

## 🔄 CI/CD Workflow

The CI/CD pipeline performs the following steps:

1. **Build**: Builds the React application.
2. **Test**: Runs automated tests using WebdriverIO.
3. **Deploy**: If tests pass, deploys the application to GitHub Pages.

## 🔁 Cross-Repository Workflow

The workflow across repositories is as follows:

1. **Portfolio Repository (branch `dev`)**: On every push or pull request to the `dev` branch, a trigger is sent to the `myportfolio-CICD` repository.
2. **MyPortfolio-CICD Repository**:

   - Runs automation tests in the `dev` environment.
   - If tests pass, it sends a signal back indicating success and instructs the `dev` branch of the `portfolio` repository to merge with `main`.
   - This triggers deployment to **Cloudflare (production environment)**.

3. **Allure Report Deployment**: Test reports are published to GitHub Pages.

## 🌐 Website Access

You can access the portfolio website via GitHub Pages:

👉 [suryana-code.github.io/MyPortfolio-CICD](https://suryana-code.github.io/MyPortfolio-CICD/)

My Portfolio is available at:

👉 [My Portfolio](https://msuryana-portfolio.pages.dev/)

Allure report is available at:

👉 [Allure Report](https://suryana-code.github.io/MyPortfolio-CICD/#suites/90ed9ec3cc79190f4344534f068e4bd7/51d77a4392594df7/)
