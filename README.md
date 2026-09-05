![banner](./.github/imgs/banner.png)
<a name="readme-top"></a>
<div align="center">

# Charmly Icons

**Generate beautiful skill icons for your GitHub README using a simple URL.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-C071FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript,react,nodejs&perline=3)
[![License](https://img.shields.io/badge/License-MIT-C071FF?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Version](https://img.shields.io/github/package-json/v/amrelmahdy001/charmly?style=for-the-badge&color=C071FF&logo=semanticrelease&logoColor=white)](https://github.com/amrelmahdy001/charmly/releases)
[![Last Commit](https://img.shields.io/github/last-commit/amrelmahdy001/charmly?style=for-the-badge&color=C071FF&logo=git&logoColor=white)](https://github.com/amrelmahdy001/charmly/commits)
[![Stars](https://img.shields.io/github/stars/amrelmahdy001/charmly?style=for-the-badge&color=C071FF&logo=github&logoColor=white)](https://github.com/amrelmahdy001/charmly/stargazers)

![README Tools](https://img.shields.io/badge/README%20Tools-C071FF?style=for-the-badge&logo=readme&logoColor=white)
![Markdown Tools](https://img.shields.io/badge/Markdown%20Tools-C071FF?style=for-the-badge&logo=markdown&logoColor=white)
</div>

---

## What is Charmly?

Charmly is a lightweight API that generates a row of skill icons as an SVG image.
You can use it in your GitHub profile, project README, or resume.

**Powered by Cloudflare Workers ⚡**

## Example

```markdown
![My Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swift,typescript,react,go,flask&perline=5)
```

Result:

![My Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swift,typescript,react,go,flask&perline=5)

---

## Usage

### 1. Basic Usage

```markdown
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript,html,css,tailwindcss)
```
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript,html,css,tailwindcss)

Replace `i=` with a comma-separated list of icon names.

### 2. Icons Per Line

```markdown
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=aws,figma,azure,react,angular,npm&perline=3)
```
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=aws,figma,azure,react,angular,npm&perline=3)

### 3. Center Icons

```html
<p align="center">
  <img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=git,kubernetes,gitlab,c,github" />
</p>
```
<p align="center">
  <img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=git,kubernetes,gitlab,c,github" />
</p>

---

## Parameters

| Parameter | Description | Default |
|-----------|--------------|---------|
| `i` | Comma-separated icon names (required) | - |
| `perline` | Number of icons per line (1–50) | All icons in one line |

---

## How It Works

1. Icon SVGs are stored in the `icons/` folder.
2. `build-icons.js` extracts `viewBox` and inner content from each SVG.
3. Cloudflare Worker reads `dist/icons.json` and generates a combined SVG image.
4. The image is returned with `Content-Type: image/svg+xml`.


---

## Project Structure

```
charmly/
├── icons/                # SVG icon files
├── src/
│   └── worker.js         # Cloudflare Worker logic
├── build-icons.js        # Converts SVG files to JSON
├── package.json
├── wrangler.toml
├── README.md
└── LICENSE
```

---

## Contributing

Contributions are welcome!
To suggest an icon, open an issue or add the SVG file directly to the `icons/` folder and submit a pull request.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<p align="center">Made by <a href="https://github.com/amrelmahdy001">amrelmahdy001</a></p>

---

## Available Icons

Here is a list of currently supported icons.
More icons will be added soon.


<table>
  <tbody>
    <!-- الصف 1: الويب الأساسية -->
    <tr>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=html&perline=1" alt="HTML" width="64"><br><sub><b>HTML</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=css&perline=1" alt="CSS" width="64"><br><sub><b>CSS</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript&perline=1" alt="JavaScript" width="64"><br><sub><b>JavaScript</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=typescript&perline=1" alt="TypeScript" width="64"><br><sub><b>TypeScript</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=react&perline=1" alt="React" width="64"><br><sub><b>React</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vue&perline=1" alt="Vue.js" width="64"><br><sub><b>Vue.js</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=angular&perline=1" alt="Angular" width="64"><br><sub><b>Angular</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=svelte&perline=1" alt="Svelte" width="64"><br><sub><b>Svelte</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nextjs&perline=1" alt="Next.js" width="64"><br><sub><b>Next.js</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nodejs&perline=1" alt="Node.js" width="64"><br><sub><b>Node.js</b></sub></td>
    </tr>
    <!-- الصف 2: لغات برمجة متقدمة -->
    <tr>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=python&perline=1" alt="Python" width="64"><br><sub><b>Python</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=java&perline=1" alt="Java" width="64"><br><sub><b>Java</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=kotlin&perline=1" alt="Kotlin" width="64"><br><sub><b>Kotlin</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swift&perline=1" alt="Swift" width="64"><br><sub><b>Swift</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=go&perline=1" alt="Go" width="64"><br><sub><b>Go</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=rust&perline=1" alt="Rust" width="64"><br><sub><b>Rust</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=c&perline=1" alt="C" width="64"><br><sub><b>C</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=cplusplus&perline=1" alt="C++" width="64"><br><sub><b>C++</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=csharp&perline=1" alt="C#" width="64"><br><sub><b>C#</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=ruby&perline=1" alt="Ruby" width="64"><br><sub><b>Ruby</b></sub></td>
    </tr>
    <!-- الصف 3: أطر عمل وأدوات -->
    <tr>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=php&perline=1" alt="PHP" width="64"><br><sub><b>PHP</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=express&perline=1" alt="Express" width="64"><br><sub><b>Express</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=django&perline=1" alt="Django" width="64"><br><sub><b>Django</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=flask&perline=1" alt="Flask" width="64"><br><sub><b>Flask</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=spring&perline=1" alt="Spring Boot" width="64"><br><sub><b>Spring Boot</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=laravel&perline=1" alt="Laravel" width="64"><br><sub><b>Laravel</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=graphql&perline=1" alt="GraphQL" width="64"><br><sub><b>GraphQL</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=redux&perline=1" alt="Redux" width="64"><br><sub><b>Redux</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=tailwindcss&perline=1" alt="Tailwind CSS" width="64"><br><sub><b>Tailwind CSS</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=bootstrap&perline=1" alt="Bootstrap" width="64"><br><sub><b>Bootstrap</b></sub></td>
    </tr>
    <!-- الصف 4: CSS Preprocessors + قواعد بيانات + DevOps -->
    <tr>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=sass&perline=1" alt="Sass" width="64"><br><sub><b>Sass</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mysql&perline=1" alt="MySQL" width="64"><br><sub><b>MySQL</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=postgresql&perline=1" alt="PostgreSQL" width="64"><br><sub><b>PostgreSQL</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mongodb&perline=1" alt="MongoDB" width="64"><br><sub><b>MongoDB</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=redis&perline=1" alt="Redis" width="64"><br><sub><b>Redis</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=sqlite&perline=1" alt="SQLite" width="64"><br><sub><b>SQLite</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=docker&perline=1" alt="Docker" width="64"><br><sub><b>Docker</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=kubernetes&perline=1" alt="Kubernetes" width="64"><br><sub><b>Kubernetes</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=aws&perline=1" alt="AWS" width="64"><br><sub><b>AWS</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=azure&perline=1" alt="Azure" width="64"><br><sub><b>Azure</b></sub></td>
    </tr>
    <!-- الصف 5: سحابة وأدوات تطوير -->
    <tr>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=googlecloud&perline=1" alt="Google Cloud" width="64"><br><sub><b>Google Cloud</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=firebase&perline=1" alt="Firebase" width="64"><br><sub><b>Firebase</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=git&perline=1" alt="Git" width="64"><br><sub><b>Git</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=github&perline=1" alt="GitHub" width="64"><br><sub><b>GitHub</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=gitlab&perline=1" alt="GitLab" width="64"><br><sub><b>GitLab</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vscode&perline=1" alt="VS Code" width="64"><br><sub><b>VS Code</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=npm&perline=1" alt="npm" width="64"><br><sub><b>npm</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vite&perline=1" alt="Vite" width="64"><br><sub><b>Vite</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=webpack&perline=1" alt="Webpack" width="64"><br><sub><b>Webpack</b></sub></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=figma&perline=1" alt="Figma" width="64"><br><sub><b>Figma</b></sub></td>
    </tr>
  </tbody>
</table>