# Tasks: adaptar-portfolio-elvis

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Medium

## Phase 1: Foundation
- [ ] 1.1 Create `src/constants/profile.js` with Elvis's shared data (name, shortName, role, location, email, githubUser, githubUrl, photoImport, cvPdf)
- [ ] 1.2 Update `src/constants/cvPdf.js` PDF path to `/Elvis-Chavez-CV-2026.pdf` and download name
- [ ] 1.3 Update `package.json` name from "cv-google" to "portfolio-elvis"
- [ ] 1.4 Update `index.html` title to "Elvis Joel Chávez Moreira - CV"

## Phase 2: Pages
- [ ] 2.1 Update `Home.jsx` Google-colored spans from "Gastón" (6 letters) to "Elvis" (5)
- [ ] 2.2 Update `CurriculumVitae.jsx` — remove LinkedIn InfoCard, update all card text to Elvis, photo import
- [ ] 2.3 Rewrite `QuienSoy.jsx` bio (Ecuador, ULEAM), remove Carousel import and `<ImageSlider />`
- [ ] 2.4 Replace `Proyectos.jsx` — remove 12 Gastón projects, add Elvis's 6 projects with GitHub links
- [ ] 2.5 Replace `Educacion.jsx` — remove 10 entries, add single ULEAM (2019-2025, Ingeniería TI)
- [ ] 2.6 Rewrite `Conocimientos.jsx` with Elvis's stack: JS, TS, Python, Dart, Angular, Vue, Bootstrap, NestJS, Laravel, Flutter, SQL Server, PostgreSQL, Docker, K8s, Power BI, Streamlit, Git, Scrum, Kanban
- [ ] 2.7 Replace `Experiencia.jsx` — remove Potion entry, add Bomberos Manta (2025) + Miguel Torres Luna (2023)

## Phase 3: Components
- [ ] 3.1 Update `Navbar.jsx` — "Sobre Gastón" → "Sobre Elvis", remove LinkedIn link, update GitHub URL, photo import
- [ ] 3.2 Update `NavbarCv.jsx` — Google-colored "Gastón" → "Elvis" (desktop + mobile), remove LinkedIn, update GitHub, photo import, CV download link
- [ ] 3.3 Update `Footer.jsx` — location "Argentina" → "Ecuador"
- [ ] 3.4 Simplify `FooterCv.jsx` — remove animated expanding name block, update location to "Ecuador"
- [ ] 3.5 Rewrite `PersonalCard.jsx` — Elvis's name, role, bio, birth, skills, tech icons; remove LinkedIn import and link

## Phase 4: Assets
- [ ] 4.1 Copy profile photo to `src/assets/img/elvis.jpg`
- [ ] 4.2 Remove unused images from `src/assets/img/` no longer imported

## Phase 5: Build & Verify
- [ ] 5.1 Run `npm run build` — verify zero errors
