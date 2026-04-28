# Saurabh Nishad — Portfolio

Premium single-page portfolio for Saurabh Nishad: Embedded Architect, IoT Product Developer, and Hardware-Firmware Innovator.

**Live:** [saurabh-nishad.github.io/saurabh_portfolio](https://saurabh-nishad.github.io/saurabh_portfolio/)  
**GitHub:** [github.com/saurabh-nishad](https://github.com/saurabh-nishad)

## Requirements

- **Node.js 18+** (the `Cannot find module 'node:fs'` error is from an older Node; use 18 or 20)
  - Check: `node -v`
  - Using nvm: `nvm install` then `nvm use` (see `.nvmrc`)

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export for GitHub Pages)

```bash
npm run build
```

Output is in the `out/` folder. To preview: `npx serve out` then open the URL shown.

## How to host on GitHub (step-by-step)

### Step 1: Install Node.js 18 or newer

- Check your version: run `node -v` in a terminal.
- If it’s below 18, install from [nodejs.org](https://nodejs.org/) (LTS) or with nvm: `nvm install 18` then `nvm use 18`.

### Step 2: Create a new repository on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** (top right) → **New repository**.
3. Set **Repository name** to `portfolio` (or any name you like; the site URL will be `https://<username>.github.io/<repo-name>/`).
4. Leave it **Public**. Do **not** add a README, .gitignore, or license (you already have these).
5. Click **Create repository**.

### Step 3: Push your project to GitHub

In a terminal, go to your project folder and run (replace `saurabh-nishad` with your GitHub username if different):

```bash
cd /home/saurabh/Workspace/git_project/portfolio

# If this folder is not a git repo yet:
git init
git add .
git commit -m "Initial commit: portfolio site"

# Add your GitHub repo as remote (use your repo URL)
git remote add origin https://github.com/saurabh-nishad/portfolio.git

# Push (use main or master depending on your default branch)
git branch -M main
git push -u origin main
```

If you already have a git repo and only need to add the remote:

```bash
git remote add origin https://github.com/saurabh-nishad/portfolio.git
git push -u origin main
```

### Step 4: Turn on GitHub Pages

1. On GitHub, open your repo (e.g. `github.com/saurabh-nishad/portfolio`).
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages** (under “Code and automation”).
4. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
5. Save if needed. You don’t need to create a workflow yourself; the repo already has `.github/workflows/deploy.yml`.

Alternative for the first deployment: add a repository secret named `PAGES_DEPLOY_TOKEN` and the workflow can try to enable Pages automatically.

- Create a Personal Access Token or fine-grained token with repository administration/pages write access.
- In GitHub, open **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
- Name it `PAGES_DEPLOY_TOKEN`.
- If this secret is not present, you must enable Pages manually in **Settings** → **Pages** before the workflow can pass the `actions/configure-pages` step.

### Step 5: Run the deployment

- Every push to the `main` branch will build and deploy the site.
- You can also trigger it once: go to the **Actions** tab → select **Deploy to GitHub Pages** → **Run workflow** → **Run workflow**.

### Step 6: Open your site

- After the workflow finishes (green check on the Actions tab), your site will be at:
  - **https://saurabh-nishad.github.io/portfolio/**  
  (if the repo name is `portfolio`; otherwise use your repo name instead of `portfolio`).

### If your repository name is not `portfolio` (or you see bare text, no CSS)

- The site URL will be `https://<username>.github.io/<your-repo-name>/`.
- **BASE_PATH must match your repo name** or CSS/JS won’t load (you’ll see plain text only).
- This workflow now derives `BASE_PATH` automatically from the GitHub repository name, so you usually do not need to edit it manually.

## Resume

The "Download Resume" button serves `public/resume.pdf`. Replace it with your own PDF or update the link in the Hero and Contact components if you use a different path.

## Contact form

The contact form opens the default mail client with a pre-filled email. To use a form backend (e.g. Formspree, Netlify Forms), replace the `handleSubmit` logic in `components/Contact.tsx` with a POST to your endpoint.
