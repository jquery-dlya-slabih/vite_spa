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

### TO DO

- browserslist
- bundle analyze
- enhance eslint
- testing library
- test build for legacy browsers
- dotenv
- enhance tsconfig
- redux toolkit with jsonplaceholder api
