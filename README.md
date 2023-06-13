# vite_spa

### For https on dev:

- install [mkcert](https://github.com/FiloSottile/mkcert)
- create a folder `ssl` in the project root
- in `ssl` folder run command `mkcert -key-file key.pem -cert-file cert.pem spa.vite.ru`
- run command for macOS `sudo nano /etc/hosts`
- add line `127.0.0.1 spa.vite.ru`
- save changes and close file

### For start dev

- npm ci
- npm run dev

### Commands

- `npm run dev` - dev mode
- `npm run build` - prod bundle
- `npm run analyze` - prod bundle stats
- `npm run preview` - vite preview

### TO DO

- enhance eslint
- testing library
- dotenv
- enhance tsconfig
- redux toolkit with jsonplaceholder api

### TO TEST

- browserslist [https://github.com/vitejs/vite/tree/main/packages/plugin-legacy, https://github.com/marcofugaro/browserslist-to-esbuild]
