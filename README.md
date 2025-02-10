# Application mobile _Wetale_

<p align="center">
    <img src="logo.svg" width="300" alt="Wetale logo">
</p>

## _Wetale_, what is it?

**_Wetale_ is a student project made by 5 [MMI](https://en.wikipedia.org/wiki/Bachelor_universitaire_de_technologie#Science_sector) students in 2025.**
_Wetale_ is a mobile application that allows you to read stories, and make choice with community, inspired by "Choose Your Own Adventure" books.

## Why a mobile application?

We chose to develop _Wetale_ as a mobile application because interactive storytelling is best experienced on a device that is always within reach.  
A smartphone allows users to read and make choices anywhere, whether they are commuting, relaxing at home, or waiting in a queue.  
Additionally, the mobile format encourages short and engaging reading sessions, making it more accessible to a wider audience.  
A key advantage of the mobile application is the ability to download stories directly to the device, allowing users to enjoy content offline.

## How to install _Wetale_?

Currently, _Wetale_ is in development and not yet available for download, soon you will be able to download it from the Google Play Store.

## How this repository is organized?

This project uses [Tauri](https://tauri.app/) to build the mobile application and [SvelteKit](https://svelte.dev/) for the frontend framework.
For running the project, you need to have :

- [Node.js](https://nodejs.org/en/) to run and compile the SvelteKit part of the project.
- [Pnpm](https://pnpm.io/) for the package manager of Node.js.
- [Rust](https://www.rust-lang.org/) to run and compile the Tauri part of the project.

This repository is organized like this :

- `/src` & `/static` : contains the SvelteKit part of the project (SvelteKit use [Vite](https://vitejs.dev/) as bundler).
- `/src-tauri` : contains the Tauri part of the project, in Rust.

When the app is built, the Tauri part is compiled and the SvelteKit part is bundled in the `/build` folder.
The final app use the native WebView of the platform (Android) to display the SvelteKit part (cloned from `/build`).

## Commands

```bash
# Run the SvelteKit part in dev mode (deprecated because don't run the Tauri part)
pnpm run dev
# Run prettier and fix the code
pnpm run lint
# Run the SvelteKit part in dev mode and start a window with Tauri (in the current platform) that display the SvelteKit part
pnpm run tauri:dev
# Run the SvelteKit part in dev mode and start a window with Tauri that display the SvelteKit part in an Android emulator (need to have an Android emulator running, following the Tauri documentation : https://tauri.app/start/prerequisites/#android)
pnpm run tauri:android:dev
# Build the app for Android (Google Play) (need to have an Android emulator running, following the Tauri documentation : https://tauri.app/start/prerequisites/#android)
pnpm run tauri:google-play:build
```
