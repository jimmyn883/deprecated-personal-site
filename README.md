# Personal Portfolio Website

### [LIVE DEMO](https://jimmyn883.github.io/personal-site/)

## Overview

This is a ReactJS-based personal portfolio site used to showcase my projects, resume, and background as a software engineer. It’s based on an open-source template by Tim Baker ([original repo here](https://github.com/tbakerx/react-resume-template)), but heavily customized and maintained independently.

No React or JavaScript experience required to update content — most updates are made by editing a single JSON file.


## 🛠️ Getting Started

### 1. Set Up Your Environment

1. Install [Node.js](https://nodejs.org/en/download/)

2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```

   Your site should now be live at `http://localhost:3000`

---

### 2. Customize Your Info

Update the `src/resumeData.json` file:

* **name**: Your name as it should appear on the site
* **description**: Subtitle text under your name
* **image**: Replace `public/images/profilepic.jpg` with your own image of the same name
* **bio**: This populates the “About Me” section
* **contactMessage**: Message shown in the contact section
* **email** / **address** / **website**: Self-explanatory
* **resumeDownload**: Link to your resume (e.g., a Google Drive link with public view access)
* **social**: Add or remove social links like GitHub or LinkedIn
* **portfolio**: Add your personal projects here with:

  * `title`: Name of the project
  * `category`: Short description
  * `image`: File in `public/images/portfolio`
  * `url`: Live demo or code

You can also:

* Replace `public/images/header-background.jpg` to update the header image
* Replace `public/favicon.ico` for a custom favicon
* Change the HTML page title in `public/index.html`

---

### 3. Deploy to GitHub Pages (Free Hosting)

1. In `package.json`, update the `"homepage"` field:

```json
"homepage": "https://jimmyn883.github.io/personal-site"
```

2. Build and deploy the site:

```bash
npm run deploy
```

3. Go to your repo → Settings → Pages → Set the source branch to `gh-pages` (if not already set).

Your site should now be live at:
🔗 **[https://jimmyn883.github.io/personal-site](https://jimmyn883.github.io/personal-site)**

---

## 🙋‍♂️ Maintained by

**Jimmy Njuguna**
[GitHub](https://github.com/jimmyn883) • [LinkedIn](https://linkedin.com/in/jimmynjuguna)

---

> Credits to Tim Baker for the original React Resume Template. This fork has been significantly modified to serve as a personal professional portfolio.
