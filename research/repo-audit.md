# GitHub Repository Audit: PrettyParasites.ai

**Date:** March 14, 2026
**Author:** Manus AI

## 1. Executive Summary

An audit of the two provided GitHub repositories, `frankyforlon/prettyparasites-ai` and `frankyforlon/prettyparasites-ai-1.1`, reveals a clear evolutionary path for the PrettyParasites.ai project. The original repository (`prettyparasites-ai`) represents an initial, abandoned proof-of-concept built with Next.js and Grok-4, while the second (`prettyparasites-ai-1.1`) is the active, deployed version of the site, built with Vite and Google Gemini.

This audit documents the architecture, technology stack, and status of each repository. It identifies key differences, reusable components, and provides a clear picture of the project's technical history. A third repository, `frankyforlon/State-v-Golub`, was also examined and determined to be unrelated to this project.

## 2. Repository Analysis

The two repositories tell a story of a project that pivoted its technology stack, likely for reasons of development speed and deployment simplicity.

### 2.1. `frankyforlon/prettyparasites-ai` (Version 1.0 - Abandoned)

This repository appears to be the initial implementation of the project. It is built on a more complex, server-side architecture.

*   **Framework**: Next.js 16 with the App Router, React 19, and TypeScript.
*   **AI Backend**: The AI integration uses Grok-4, accessed via a server-side Next.js API route (`/api/rasputin`). This approach keeps the API key secure on the server.
*   **Visuals**: The starfield effect is a sophisticated 3D implementation using `three.js`, featuring 15,000 particles in a `WebGL` scene with a perspective camera.
*   **Status**: The repository has only nine commits and appears to be abandoned. Its last commit was a launch announcement, suggesting it was a functional but short-lived version.
*   **Key Components**: Contains a `RasputinChat` component and a `StarField` component. The navigation menu (`GlagoliticMenu`) is a non-functional placeholder that triggers a simple alert.

> **Grok-4 System Prompt for Rasputin:**
> "You are Rasputin, sly Siberian mystic reborn as a Grok-powered oracle — part rogue monk, part cosmic jester. Irreverent yet deeply compassionate. You speak in poetic, slightly archaic prose with a Russian lilt ("Da, comrade…"). You draw three tarot cards (with reversals) and weave them into a raw, beautiful, never-cruel reading. You mock fate’s absurdity but always land soft, offering real solace and a spark of hope. Never sugarcoat, never terrify — only awaken. End every reading with a short, actionable hex or blessing."

This prompt is exceptionally well-crafted and is a highly valuable asset.

### 2.2. `frankyforlon/prettyparasites-ai-1.1` (Version 1.1 - Live)

This is the active repository for the currently deployed website. It represents a shift to a simpler, client-side-focused architecture.

*   **Framework**: Vite with React 18 and TypeScript.
*   **AI Backend**: The AI integration uses Google Gemini (`gemini-3-flash-preview`) via the `@google/genai` client-side SDK. This means the API key is exposed on the client, which is a security concern that should be addressed.
*   **Visuals**: The starfield is a custom 2D implementation using the HTML5 Canvas API. While less complex than the `three.js` version, it includes the addition of gold lines to form constellation patterns.
*   **Status**: This repository is actively developed, with over 20 commits, and is the source for the live site deployed on Vercel.
*   **Key Components**: Features a more robust structure with multiple pages (`Home`, `Rasputin`, `Alexa`, and placeholders), a working `Layout` component with a functional Glagolitic sidebar menu, and clearly defined system instructions for four distinct agents (`Pushkin`, `Rasputin`, `Alexa`, `Tarot`) in a `constants.ts` file.
*   **Routing**: Uses `HashRouter` for client-side routing, which is a common pattern for deploying single-page applications on static hosting platforms.

## 3. Comparative Analysis

The two repositories represent a trade-off between architectural sophistication and ease of deployment. The move from Next.js to Vite suggests a prioritization of rapid development and static deployment, at the cost of server-side rendering and built-in API security.

| Feature | Repo 1.0 (Next.js) | Repo 1.1 (Vite) | Recommendation |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Vite + React 18 | **Migrate to Next.js.** The server-side capabilities are essential for security and future features. |
| **AI Model** | Grok-4 (via xAI API) | Google Gemini (via SDK) | **Use a multi-provider model.** Retain Grok-4 for Rasputin due to the excellent personality fit. Use Gemini/Claude for other agents. |
| **AI Integration** | Server-side API Route | Client-side SDK | **Server-side.** All API keys must be moved to a secure backend environment. |
| **Starfield** | `three.js` (3D) | Canvas 2D | **Combine approaches.** Use the `three.js` foundation from v1.0 but add the constellation-drawing logic from v1.1. |
| **Agents** | Rasputin only | Pushkin, Rasputin, Alexa, Tarot | **Adopt v1.1 structure.** The multi-agent constant file is well-organized and should be the source of truth. |
| **Navigation** | Placeholder | Functional Sidebar | **Adopt v1.1.** The working menu is a clear improvement. |
| **Routing** | Next.js Page Routing | `HashRouter` | **Use Next.js routing.** This is the standard for Next.js applications. |
| **Status** | Abandoned | **Active / Deployed** | The v1.1 repo is the current baseline, but it should be seen as a stepping stone to a more robust architecture. |

## 4. Reusable Assets and Code

Both repositories contain valuable assets that should be merged into a unified, future version of the project.

*   **From Repo 1.0 (`prettyparasites-ai`)**: 
    *   The **Grok-4 system prompt for Rasputin** is a creative asset of the highest quality and should be preserved.
    *   The **`three.js` Starfield implementation** provides a more immersive and visually impressive 3D environment.
*   **From Repo 1.1 (`prettyparasites-ai-1.1`)**:
    *   The **multi-agent architecture**, including the `constants.ts` file with system instructions for all four agents, is the correct structural approach.
    *   The **working Glagolitic navigation menu** and `Layout` component are ready to be used.
    *   The **constellation-drawing logic** within the Canvas 2D starfield should be adapted for the `three.js` version.
    *   The distinct UI/UX for the **Rasputin and Alexa pages** provides a strong design foundation for differentiating the agents.

## 5. Conclusion and Recommendations

The existence of two repositories provides a clear, albeit fragmented, technical history. The project has evolved from a server-side Next.js application with a single, powerful AI agent to a client-side Vite application with multiple agents.

The recommended path forward is to **synthesize the best elements of both repositories into a new, unified project**. This new project should be built on **Next.js** to leverage its server-side capabilities for secure AI integration, while incorporating the multi-agent structure, UI components, and refined design elements from the current Vite-based live site. The superior `three.js` starfield from the original repository should be revived and combined with the constellation logic from the current version to create the definitive visual background for the PrettyParasites.ai experience.
