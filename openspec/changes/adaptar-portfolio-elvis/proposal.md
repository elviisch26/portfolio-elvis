# Proposal: Adaptar Portfolio Elvis

## Intent
Adapt Gastón García Bauer's Google-style portfolio to display Elvis Chávez's personal data — name, bio, experience, education, projects, skills — while keeping the theme and visual identity.

## Scope

### In Scope
- Extract shared data (name, photo, role, GitHub, location, email) into `src/constants/profile.js`
- Replace personal content across 15 files
- Replace profile photo and project images
- Remove all LinkedIn references
- Simplify footer (remove animated name)
- Remove carousel from QuienSoy
- Update PDF CV and page title

### Out of Scope
- No new features, pages, or structural refactoring
- No testing (no test runner configured)
- No backend or API

## Capabilities

No existing specs in `openspec/specs/`. Pure data adaptation — no spec-level behavior changes.

### New Capabilities
None.

### Modified Capabilities
None.

## Approach
Hybrid: extract most-repeated data (name, photo, role, GitHub, location, email) to `src/constants/profile.js`. Update `cvPdf.js`. Replace page-specific content (bio, experience, education, projects, skills) inline in each JSX component.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `index.html` | Modified | Page title |
| `src/constants/profile.js` | **New** | Shared profile constants |
| `src/constants/cvPdf.js` | Modified | PDF filename + download name |
| `src/pages/Home.jsx` | Modified | Letter spans (Gastón → Elvis) |
| `src/pages/CurriculumVitae.jsx` | Modified | InfoCard data, photo import |
| `src/pages/QuienSoy.jsx` | Modified | Bio text, remove carousel |
| `src/pages/Proyectos.jsx` | Modified | 12 projects → 3 |
| `src/pages/Educacion.jsx` | Modified | 10 entries → Elvis's data |
| `src/pages/Conocimientos.jsx` | Modified | Full content rewrite |
| `src/pages/Experiencia.jsx` | Modified | 1 → 2 experience entries |
| `src/components/Navbar/Navbar.jsx` | Modified | Photo, name, URLs, remove LinkedIn |
| `src/components/NavbarCv/NavbarCv.jsx` | Modified | Photo, name, remove LinkedIn |
| `src/components/Footer/Footer.jsx` | Modified | Location text |
| `src/components/FooterCv/FooterCv.jsx` | Modified | Remove animated name, location text |
| `src/components/PersonalCard/PersonalCard.jsx` | Modified | All personal data, remove LinkedIn |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Pages shorter (fewer projects/education) → sparse | High | Add CV detail where available |
| Photo aspect ratio differs from original | Medium | Test build; adjust CSS if needed |
| Conocimientos layout may break with different content | Medium | Rewrite → test visually |
| No test runner → manual QA only | High | Build check + visual review |

## Rollback
Git-based: commit each change logically. Full rollback via `git checkout` of pre-change branch. Partial rollback via revert of individual commits.

## Dependencies
- Elvis's CV PDF placed in `/public`
- Profile photo available at user-provided path

## Success Criteria
- [ ] `npm run build` succeeds
- [ ] All Gastón references replaced by Elvis content
- [ ] Profile photo displays correctly in all components
- [ ] GitHub link points to `github.com/elviisch26`, LinkedIn absent site-wide
- [ ] Footer is simple — no animated expanding name
- [ ] QuienSoy page has no carousel
