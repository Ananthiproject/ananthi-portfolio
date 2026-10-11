# Ananthi P. - Portfolio Website

A modern, responsive portfolio for **Ananthi P.**, Python Full Stack Developer, built with
**React.js, Vite, JavaScript and plain CSS**.

---

## What is inside

- Sections: Home, About Me, Technical Skills, Professional Experience, Projects, Education,
  Certifications, Download Resume, Contact and Footer
- Dark navy and blue theme with cyan accents
- Responsive layout (desktop, tablet and mobile) with a mobile menu
- Smooth scrolling, subtle animations (they switch off automatically for visitors who prefer reduced motion)
- Your real GitHub, LinkedIn, email and phone links

---

## Step-by-step guide for beginners (Windows)

### 1. Download and extract the ZIP

1. Download `ananthi-portfolio.zip` and save it somewhere easy, for example your **Downloads** or **Desktop** folder.
2. Right-click the ZIP file and choose **Extract All...**
3. Click **Extract**. You will get a normal folder named `ananthi-portfolio`.

> Tip: Make sure you open the folder that directly contains `package.json`, `index.html` and `src`.
> If you see another `ananthi-portfolio` folder inside, open that one.

### 2. Install Node.js (only once)

1. Open <https://nodejs.org> in Chrome.
2. Download the **LTS** version and install it (keep clicking **Next**, then **Install**).
3. Restart your computer if the installer asks you to.
4. To check the install, open a terminal (step 4 below) and type:

```bash
node -v
npm -v
```

Both commands should print a version number. Node.js version 18 or newer is needed.

### 3. Open the folder in VS Code

1. Open **VS Code**.
2. Click **File -> Open Folder...**
3. Select the `ananthi-portfolio` folder and click **Select Folder**.
4. If VS Code asks "Do you trust the authors?", click **Yes, I trust the authors**.

### 4. Open the terminal in VS Code

- Click **Terminal -> New Terminal** in the top menu, or press `` Ctrl + ` `` (the key above Tab).
- A terminal opens at the bottom, already inside your project folder.

### 5. Install the project packages (only once)

```bash
npm install
```

Wait until it finishes (it may take a minute or two). A `node_modules` folder will appear. This is normal.

### 6. Start the website

```bash
npm run dev
```

The terminal will show a link like `http://localhost:5173/`.

### 7. View it in Chrome

Hold **Ctrl** and click the link in the terminal, or open Chrome and type
`http://localhost:5173/` in the address bar. Your portfolio appears.
While `npm run dev` is running, every change you save in VS Code shows up instantly.

To stop the website, click in the terminal and press `Ctrl + C`.

---

## Replace your photo or resume

All files go in the **`public`** folder:

| What | Exact file name |
| --- | --- |
| Profile photo | `public/profile-photo.jpg` |
| Resume | `public/Ananthi_P_Resume.pdf` |

1. Copy your new file into the `public` folder.
2. Rename it to **exactly** the name in the table, then choose **Replace** when Windows asks.
3. Refresh the page in Chrome (press `Ctrl + F5`).

If you want to keep a different file name, open `src/data.js` and change `photo` or `resume`
(and `resumeFileName`) in the `profile` section.

> Photo tip: a portrait photo with a plain background works best. If the photo cannot be loaded,
> the site shows an "AP" placeholder instead.

---

## Change the text on the website

Almost all content (about text, skills, experience, projects, education, certifications) is in
one file: **`src/data.js`**. Edit the text, save, and the page updates.

To add a GitHub link to a project, find the project in `src/data.js` and replace
`github: null` with `github: 'https://github.com/your-name/your-repo'`.

---

## Create a production build

```bash
npm run build
```

This creates a **`dist`** folder with the optimized website. To preview the built version:

```bash
npm run preview
```

---

## Put the website online (optional)

The `dist` folder can be hosted for free on **Netlify**, **Vercel** or **GitHub Pages**.

- Netlify (easiest): run `npm run build`, then drag the `dist` folder onto <https://app.netlify.com/drop>.
- GitHub Pages: if the site is served from a sub-path such as `https://username.github.io/repo-name/`,
  add `base: '/repo-name/'` inside `defineConfig({ ... })` in `vite.config.js` before building.

---

## Project structure

```
ananthi-portfolio/
├── public/
│   ├── profile-photo.jpg      <- your photo
│   ├── Ananthi_P_Resume.pdf   <- your resume
│   └── favicon.svg
├── src/
│   ├── components/            <- one file per section (Hero, About, Skills ...)
│   ├── hooks/                 <- small reusable hooks (scroll animations, active menu link)
│   ├── data.js                <- all your content in one place
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              <- all styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Troubleshooting

- **`npm` is not recognized**: Node.js is not installed yet, or the terminal needs to be reopened. Install Node.js and restart VS Code.
- **PowerShell says "running scripts is disabled"**: in the VS Code terminal, click the small arrow next to **+** and choose **Command Prompt**, then run the command again.
- **Port already in use**: Vite will automatically pick another port. Use the link shown in the terminal.
- **Photo or resume not showing**: check the file names match exactly (including capital letters) and that the files are inside the `public` folder.

---

Built with React, Vite and React Icons.
