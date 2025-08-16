# Food Promart e‑Tax Request Form

Single page React application for submitting e‑Tax invoice requests.

## Quick start

```bash
npm install
npm run dev
```

## Environment variables

- `VITE_ETAX_ENDPOINT` – API endpoint for submitting the form. Default `/api/etax`.

## Notes

- Address data sourced from [Thai province data](https://github.com/kongvut/thai-province-data).
- Language preference persists in `localStorage`.
- Change brand color or logo by editing assets in `src/assets/svg` or `tailwind.config.js`.

## Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run preview` – preview build
- `npm run lint` – lint source
- `npm run format` – format with Prettier

## Folder structure

```
src/
  assets/
  components/
  hooks/
  locales/
  pages/
  schema/
  services/
  state/
  styles/
  utils/
```
