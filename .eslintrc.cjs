module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/components/InfoCard/', 'src/components/NavbarCv/', 'src/components/FooterCv/', 'src/components/SearchboxHome/', 'src/components/SearchBoxCv/', 'src/components/PersonalCard/', 'src/components/Carousel/', 'src/pages/CurriculumVitae.jsx', 'src/pages/QuienSoy.jsx', 'src/pages/Proyectos.jsx', 'src/pages/Educacion.jsx', 'src/pages/Conocimientos.jsx', 'src/pages/Experiencia.jsx'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
