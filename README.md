# Instruções para instalação do EXPO 👋

## Get started

1. Instalar Node.JS
   ```bash
   # installs fnm (Fast Node Manager)
   winget install Schniz.fnm
   # configure fnm environment
   fnm env --use-on-cd | Out-String | Invoke-Expression
   # download and install Node.js
   fnm use --install-if-missing 20
   # verifies the right Node.js version is in the environment
   node -v # should print `v20.18.0`
   # verifies the right npm version is in the environment
   npm -v # should print `10.8.2`
   ```

2. Instalar Expo no diretório baixado
   
   ```bash
   npm install expo
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

Arquivo principal está em ....