# Plan

---

## 1. Make Sure Your System Is Up to Date
1. **Open your terminal.**  
2. Run the following commands to update Fedora packages:  
   ```bash
   sudo dnf upgrade --refresh
   ```
3. **Reboot** if you see any kernel or system updates are installed.

> **Note**: Keeping your system updated first helps ensure compatibility with the latest tools.

---

## 2. Check or Install Node.js

### 2A. Check if Node.js Is Already Installed
1. In the terminal, run:
   ```bash
   node --version
   npm --version
   ```
2. If it shows version numbers (for example, `v20.x.x` for Node and `8.x.x` or `9.x.x` for npm), you have Node.js and npm installed.  
3. If you get a “command not found” error, proceed to install Node.js.

### 2B. Install Node.js on Fedora
1. **Install from Fedora’s default repository** (often slightly behind the latest Node version):  
   ```bash
   sudo dnf install nodejs
   ```
2. **OR** install a more recent version using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm):
   ```bash
   # Download & install nvm (make sure your system packages are updated).
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
   # Load nvm into your current shell
   source ~/.bashrc
   # List available Node versions
   nvm ls-remote
   # Install a specific Node version
   nvm install 20
   ```
3. **Verify** by running:
   ```bash
   node --version
   npm --version
   ```

---

## 3. Navigate to Your Project Folder
Your GitHub repository was cloned to `/home/axel/Projects/mylair`. Navigate there:
```bash
cd /home/axel/Projects/mylair
```

---

## 4. Initialize Your Project with npm
1. In your project folder, run:
   ```bash
   npm init -y
   ```
2. This will create a file called **`package.json`** containing your project’s basic metadata (like the project name, version, and some default scripts).

> **Tip**: Open the `package.json` in a text editor (e.g., Visual Studio Code, GNOME Text Editor, etc.) to see how it looks.

---

## 5. Choose a Basic Setup or Framework
Depending on how you want your site to work, you have a few typical starting points:

### Option A: Start with a Minimal Setup
1. Create a simple folder structure:
   ```
   mylair
   ├── index.html
   ├── style.css
   ├── script.js
   ├── package.json
   └── ...
   ```
2. Keep it all plain HTML/CSS/JavaScript at first. This is good if you want to learn the basics of how these languages interact.

### Option B: Use a Simple Framework Like Create React App
1. In the terminal, from inside `mylair`:
   ```bash
   npx create-react-app .
   ```
   - The final `.` tells the command to create the React project in the current folder.
2. **Wait** for it to install. It will create a starter React app structure inside your folder.

### Option C: Use a Lightweight Bundler/Scaffolder (e.g., Vite)
1. In the terminal:
   ```bash
   npm create vite@latest
   ```
2. It will prompt you for a project name and framework type (React, Vue, Svelte, etc.).  
3. Select a framework, and it will generate a skeleton project.

> **Note**: React, Vue, and others often add an extra step to building your site, but can be easier to maintain once you learn them. If you’re just learning, a minimal setup is still fine to start with.

---

## 6. Install and Verify Dependencies
1. If you picked a framework (like React or Vite), it automatically sets up your `package.json` with the necessary dependencies.  
2. If you started from scratch, you may install libraries like `lodash` or `axios` as you need them:
   ```bash
   npm install lodash
   ```
3. Once installed, check the newly created **`node_modules`** folder and your **`package-lock.json`** file. Those confirm successful installation.

---

## 7. Test Your App Locally
1. **Minimal Setup**: Just open your `index.html` in a browser to see your site.  
2. **React / Vite**:
   - For React (Create React App), run:
     ```bash
     npm start
     ```
     then visit `http://localhost:3000` in your browser.
   - For Vite, run:
     ```bash
     npm run dev
     ```
     then visit the link it prints (usually `http://localhost:5173`).

---

## 8. Document Everything in Your README
1. **Open `README.md`** (create it if you don’t already have one).  
2. Document how to:
   - Install Node.js and dependencies.
   - Run the development server.
   - Build or deploy your site if you’re using a bundler or framework.
   - Check version compatibility (e.g., “This project is tested with Node v20.x”).

> **Tip**: Write instructions so a friend can clone your repo and get things running easily.

---

## 9. Commit and Push Your Changes
1. Check what has changed:
   ```bash
   git status
   ```
2. Stage new or modified files:
   ```bash
   git add .
   ```
3. Commit with a message:
   ```bash
   git commit -m "Initialize project with basic setup"
   ```
4. Push changes to GitHub:
   ```bash
   git push origin main
   ```
   (Or `git push origin master` if your default branch is named “master.”)

---

## 10. Keep Learning and Iterating
1. **Version Management**: Update Node and npm regularly (or rely on nvm to manage multiple versions).  
2. **Explore**: Try adding more packages, learning how to build and optimize your app, or picking up a different framework if you’re curious.  
3. **Documentation**: Add more instructions to the `README.md` whenever you change or add a major feature.

---

### Extras
- **Editor Setup**: Install VS Code or any preferred editor. Use extensions like ESLint, Prettier, etc., to help maintain clean code.
- **Branching**: Create and work on feature branches rather than committing straight to `main`. Then merge them in once you’re happy.
- **Security**: Keep an eye on `npm audit` or GitHub’s Dependabot alerts to spot vulnerabilities in your dependencies.

---

## Summary
By following the steps above, you’ll have a development environment that can grow with you. Start small: update your system, install Node.js, initialize npm, and add a simple framework or just plain HTML/CSS/JS. Keep notes in your README so you (and anyone else) can reproduce your environment easily. As you gain confidence, you can add more automation, testing, and other modern web-dev goodies. 

Good luck, have fun, and remember to commit and push your progress often!