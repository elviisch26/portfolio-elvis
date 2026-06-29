## Exploration: Adaptar Portfolio Elvis

### Current State

React 18 + Vite 5 SPA with Bootstrap 5 (CDN), React Router v6, Swiper 11, and react-slick carousels. The site is a Google-style portfolio template for **Gastón García Bauer** — an Argentine fullstack developer. The Home page mimics Google's landing page (colored logo, search box, "Buscar con Google" / "Voy a tener suerte" buttons). The CV section (at `/curriculum_vitae`) mimics Google Search Results pages with cards for each section.

All personal data (name, bio, experience, education, projects, skills, photos, PDF, social links) is hardcoded inline across 14 source files. Only the PDF path is externalized (`src/constants/cvPdf.js`). Personal photos and project screenshots are 74 images in `src/assets/img/`.

### Affected Areas

#### Files with Personal Data (must edit):

| # | File | Lines | What needs to change |
|---|------|-------|---------------------|
| 1 | `index.html` | 21 | `<title>` — "Gastón García Bauer - CV" → "Elvis Joel Chávez Moreira - CV" |
| 2 | `src/pages/Home.jsx` | 12-19 | Google-colored "Gastón" letter spans → "Elvis" (6 letters vs 5) |
| 3 | `src/pages/CurriculumVitae.jsx` | 4, 21-27 | 6x `InfoCard` titles, URLs, descriptions referencing Gastón. Import `gaston.jpeg` → Elvis photo |
| 4 | `src/pages/QuienSoy.jsx` | 16-18 | Full bio text (name, birthplace, age, location, story) |
| 5 | `src/pages/Proyectos.jsx` | 5-16, 20-148 | 12 project cards — ALL are Gastón's projects. GitHub links to `GastonGarciaBauer`. Import 12 project images |
| 6 | `src/pages/Educacion.jsx` | 5-13, 24-108 | 10 education entries — ALL are Gastón's (UTN Argentina, Buenos Aires location) |
| 7 | `src/pages/Conocimientos.jsx` | 5-11, 21-28 | 4 skill cards — Gastón's specific skills (references C#, PHP, etc.) |
| 8 | `src/pages/Experiencia.jsx` | 5, 16 | 1 experience entry ("Data Engineer Trainee at Potion") |
| 9 | `src/components/Navbar/Navbar.jsx` | 4, 40, 44-45 | `gaston.jpeg` import, "Sobre Gastón", GitHub + LinkedIn URLs |
| 10 | `src/components/NavbarCv/NavbarCv.jsx` | 3, 54-74, 92, 123-124 | `gaston.jpeg` import, Google-colored "Gastón" logo (2x — desktop + mobile), LinkedIn + GitHub URLs |
| 11 | `src/components/Footer/Footer.jsx` | 10 | "Argentina" → Ecuador |
| 12 | `src/components/FooterCv/FooterCv.jsx` | 9-55, 60 | Google-colored animated "Gastón" footer logo, "Argentina" → Ecuador |
| 13 | `src/components/PersonalCard/PersonalCard.jsx` | 4-17, 23-84 | Name, role, profile description, birth details, titles, soft skills, interests, LinkedIn/GitHub URLs, technology icons |
| 14 | `src/constants/cvPdf.js` | 2-3 | PDF filename + download name |

#### Images to Replace:

| Image | Used in | Type |
|-------|---------|------|
| `src/assets/img/gaston.jpeg` | Navbar.jsx, NavbarCv.jsx, CurriculumVitae.jsx, PersonalCard.jsx | **Profile photo** — MUST replace |
| `src/assets/img/gaston2.jpeg` | PersonalCard.jsx | **Profile photo** — MUST replace |
| `src/assets/img/carousel-1.jpg` | Carousel.jsx | **Carousel** — personal photo, replace |
| `src/assets/img/carousel-2.jpg` | Carousel.jsx | **Carousel** — personal photo, replace |
| `src/assets/img/carousel-3.jpg` | Carousel.jsx | **Carousel** — personal photo, replace |
| `src/assets/img/favicon.png` | index.html (line 7) | **Favicon** — optional but recommended |
| `src/assets/img/proti.jpeg` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/gymbro.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/chess.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/todo.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/Q.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/G.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/X.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/logo-cculator.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/logo_php.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/totalwar.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/futbol2.png` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/Logo.jpg` | Proyectos.jsx | Project screenshot — replace |
| `src/assets/img/utn.png` | Educacion.jsx | Institution logo — replace with ULEAM logo |
| `src/assets/img/talento-tech.png` | Educacion.jsx | Institution logo — replace/remove |
| `src/assets/img/cuvl.jpeg` | Educacion.jsx | Institution logo — replace/remove |
| `src/assets/img/dalto.png` | Educacion.jsx | Course provider — replace/remove |
| `src/assets/img/midu.png` | Educacion.jsx | Course provider — replace/remove |
| `src/assets/img/fcc.jpeg` | Educacion.jsx | Course provider — replace/remove |
| `src/assets/img/udemy.jpeg` | Educacion.jsx | Course provider — replace/remove |
| `src/assets/img/vba.png` | Educacion.jsx | Course provider — replace/remove |
| `src/assets/img/unr.jpeg` | Educacion.jsx | Institution logo — replace/remove |
| `src/assets/img/potion.png` | Experiencia.jsx | Experience logo — replace |
| `src/assets/img/google.jpeg` | Conocimientos.jsx | Skill icon — replace |
| `src/assets/img/wordpress.jpeg` | Conocimientos.jsx | Skill icon — replace |
| `src/assets/img/odoo.jpeg` | Conocimientos.jsx | Skill icon — replace |
| `src/assets/img/dev.png` | Conocimientos.jsx | Skill icon — keep generic? |
| `src/assets/img/office.jpeg` | Conocimientos.jsx | Skill icon — keep generic? |
| `src/assets/img/git.png` | Conocimientos.jsx | Skill icon — keep if generic |
| `src/assets/img/extras.png` | Conocimientos.jsx | Skill icon — replace |

#### PDF File:

| File | Used in | Action |
|------|---------|--------|
| `public/Gaston-Garcia-CV-2026.pdf` | cvPdf.js → NavbarCv, PersonalCard | **Replace** with Elvis's CV PDF |

### Approaches

#### 1. **Inline replacement** — Find-and-replace all Gastón data with Elvis data directly in JSX files
- **Pros**: Fastest path. No structural changes. Minimal diff surface for review.
- **Cons**: Keeps data scattered across 14+ files. Same problem repeats if anyone else adapts. Hard to maintain. No single source of truth.
- **Effort**: Medium (many files but mechanical changes)

#### 2. **Extract all data to a central profile constants file** — Create `src/constants/profile.js` with all personal data (name, location, bio, experience, education, projects, skills, social links, etc.), then import from pages/components
- **Pros**: Clean separation of data from presentation. Single source of truth. Easy to maintain or swap again. Follows existing `cvPdf.js` pattern.
- **Cons**: More initial refactoring. Changes import paths across all components. Slightly larger diff.
- **Effort**: High (requires restructuring components to consume data from props/imports)

#### 3. **Hybrid — Extract reusable data, keep page-specific content inline** — Extract name, social links, PDF path, title, location into constants. Leave page-specific content (project cards, education entries) inline with replaced values.
- **Pros**: Addresses the most painful scattered references (name appears 15+ times across files). Lower effort than full extraction. Balances cleanliness with pragmatism.
- **Cons**: Still some data scattered. Not a fully clean architecture. Future changes still touch multiple files for page content.
- **Effort**: Medium

### Recommendation

**Approach 3 (Hybrid)** — Extract the following into a new `src/constants/profile.js`:
- `PROFILE_NAME` ("Elvis Joel Chávez Moreira")
- `PROFILE_NAME_SHORT` ("Elvis") — for the Google-styled logo
- `PROFILE_TITLE` ("Desarrollador web y móvil | JavaScript | Python | TypeScript")
- `PROFILE_LOCATION` ("Manta, Manabí, Ecuador")
- `PROFILE_EMAIL`, `PROFILE_PHONE`
- `PROFILE_GITHUB_USER`, `PROFILE_LINKEDIN_URL` (if available)
- `PROFILE_DESCRIPTION` — short bio
- `PROFILE_PHOTO` — import path for profile photo

Update `cvPdf.js` filename constants.

For page-specific data (projects, education, experience entries), replace inline in each component file. This follows the project's existing patterns while eliminating the most repetitive name/link scattering.

The Google-style landing page theme (Home page) SHOULD stay — it's the core design identity of the template. Simply change the letters from "Gastón" to "Elvis". Note: "Gastón" has 6 letters (G-a-s-t-ó-n) while "Elvis" has 5 (E-l-v-i-s), so the color pattern will need adjustment and the visual balance may differ slightly.

### Risks

1. **Photo size/composition**: Gastón's photos are portrait headshots. Elvis may have different aspect ratio photos. Carousel images may need resizing.
2. **Experience data mismatch**: Gastón has 1 experience entry; Elvis has 2. The page layout may need adjustment if content overflows.
3. **Education section overhaul**: Elvis only has 1 formal education entry (ULEAM), not 10 like Gastón. The page will look sparse — consider adding course details from the CV to flesh it out.
4. **Project count**: Elvis has 3 featured projects vs Gastón's 12. The Proyectos page will be shorter — may look unbalanced.
5. **Conocimientos section**: Gastón's skills were organized differently (by category). Elvis has a broader skills list — may want to reorganize.
6. **LinkedIn URL unknown**: Need to confirm if Elvis has a LinkedIn profile. If not, remove all LinkedIn links/buttons.
7. **PDF path**: PDF filename must be updated and new PDF placed in `/public`.
8. **Footer animation**: The footer expands "Gastón" with repeating letters — will need complete redesign for "Elvis" (different letter count, rhythm).
9. **About page carousel**: Photos are Gastón's personal photos — need fresh photos from Elvis.
10. **Page emptiness risk**: Several sections will have significantly less content. Consider adding extra detail from Elvis's CV (e.g., more project details, course descriptions) to fill pages.

### Ready for Proposal

**Yes** — the exploration is complete. The orchestrator should tell the user that:

- 14 source files need editing across all pages, components, and constants
- ~40+ images need replacement (profile photos, carousel, project screenshots, institution logos)
- 1 PDF file needs replacement
- The Google-style theme should be preserved but adapted to "Elvis"
- The hybrid approach (extract name/links to constants + inline page content replacement) is recommended
- Some pages will have significantly less content — should consider enriching with CV details
- LinkedIn URL needs confirmation — will impact all social link references
- Favicon should be updated
