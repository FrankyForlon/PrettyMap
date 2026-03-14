# Technical Roadmap: PrettyParasites.ai

**Date:** March 14, 2026
**Author:** Manus AI

## 1. Introduction

This document outlines a comprehensive technical roadmap for unifying and realizing the full vision of the PrettyParasites.ai project. The vision synthesizes two primary layers: the original esoteric agent hub (Star Map, AI Agents, Tarot) and the community-focused PrettyMap platform. The goal is to create a single, cohesive digital "city" where users can interact with AI personalities, engage with a community, and explore a rich, narrative-driven environment.

This roadmap is based on an analysis of the full project vision [1], existing code repositories [2, 3], and research into the required technical components. It provides a phased approach to development, prioritizes key features, and recommends a specific, robust technology stack.

## 2. Recommended Core Architecture

To support the project's ambitious goals, a modern, scalable, and secure architecture is required. The following stack is recommended, synthesizing the best elements from the existing repositories and addressing their limitations.

| Component | Recommended Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 15+ (with App Router) | Enables Server-Side Rendering (SSR), API routes for secure key management, and a unified codebase. This is a necessary upgrade from the current Vite implementation. |
| **Database & Backend** | Supabase (PostgreSQL) | Already in use for PrettyMap. Provides Auth, Database, Storage, and Realtime capabilities out-of-the-box, significantly accelerating development. |
| **AI Integration** | Multi-Provider Backend API | A unified API gateway (built with Next.js API Routes) will securely manage keys and route requests to the best model for each agent (e.g., Grok-4 for Rasputin, Gemini/Claude for Alexa). |
| **3D/Visuals** | `three.js` / `react-three-fiber` | The `three.js` implementation from the original repository provides a superior 3D starfield. This should be revived for the Star Map and the concentric tarot interface. |
| **Real-time/Chat** | Supabase Realtime | Ideal for building the Discord-like chat rooms and providing presence indicators. It integrates seamlessly with the chosen database. |
| **Crypto Payments** | Solana Wallet Adapter & Solana Pay | The `@solana/wallet-adapter-react` library provides broad wallet support (Phantom, Solflare, etc.), while `@solana/pay` handles the payment protocol. |
| **Deployment** | Vercel | Already in use and provides a best-in-class experience for deploying Next.js applications. |

## 3. Development Phases

Development will proceed in logical phases, starting with a foundational refactor and progressively adding layers of functionality.

### Phase 0: Foundation & Unification (Priority: Highest)

**Goal**: Migrate the existing live site to a robust Next.js architecture, unifying the best code from both repositories and securing all API keys.

1.  **Initialize New Next.js Project**: Set up a new project using the latest version of Next.js with the App Router.
2.  **Migrate UI Components**: Port the React components from the `prettyparasites-ai-1.1` (Vite) repository, including the Layout, working navigation, and agent-specific chat interfaces.
3.  **Create Server-Side AI Gateway**: Build a Next.js API route (`/api/chat`) that securely handles requests for all AI agents. This route will manage API keys and route prompts to the appropriate LLM provider based on the requested `agentId`.
    *   Route `rasputin` requests to Grok-4, using the superior prompt from the original repository.
    *   Route `alexa` and `pushkin` requests to Google Gemini.
4.  **Revive `three.js` Starfield**: Integrate the `three.js` starfield from the `prettyparasites-ai` repository. Enhance it with the constellation-drawing logic found in the current live site's 2D canvas version.
5.  **Re-platform to Supabase**: Ensure user authentication and chat history are managed via Supabase, establishing it as the single source of truth for user data.
6.  **Deploy to Vercel**: Configure the new Next.js project for deployment on Vercel, replacing the existing Vite-based site.

### Phase 1: The Core Experience - Tarot & Agents (Priority: High)

**Goal**: Build the central, interactive tarot reading experience and deepen the agent interactions.

1.  **Concentric Circle Tarot UI**: Develop the interactive tarot selection interface using `three.js` and `react-three-fiber`.
    *   Model cards as textured planes in 3D space, arranged in concentric circles.
    *   Implement polar coordinate logic for placement and rotation.
    *   Use raycasting for card selection on click/tap.
2.  **Tarot Engine Logic**: Create the backend logic to handle the custom spreads defined by the concentric circles. The system must interpret the user's selection (card, circle, position) to generate a detailed prompt for the AI.
3.  **Agent Interpretation**: Pipe the generated tarot prompt to the AI gateway. The chosen agent (initially Rasputin) will return a narrative interpretation of the reading.
4.  **Conversation Memory**: Implement a chat history system using Supabase. Agents should be able to recall previous conversations with a user to provide more context-aware responses.

### Phase 2: Community & Commerce (Priority: Medium)

**Goal**: Integrate the PrettyMap community features and enable Web3-based commerce.

1.  **Integrate PrettyMap**: Merge the PrettyMap project into the main application as a distinct section (`/map`). The Star Map on the homepage will serve as the "cosmic" entry point, with the PrettyMap being the "terrestrial" view.
2.  **Stochastic Star Map Algorithm**: Evolve the starfield into a true stochastic constellation. Each user who signs up becomes a star. The position and connections of stars should be influenced by user interactions, using a force-directed graph algorithm (like `d3-force`) updated via Supabase Realtime.
3.  **Discord-like Chat Rooms**: Build the themed chat rooms using Supabase Realtime. Use the `Broadcast` feature for messages and the `Presence` feature to show who is currently in a "room" (or viewing a specific constellation).
4.  **Solana Wallet Integration**: Integrate the `@solana/wallet-adapter-react` library to allow users to connect their Phantom wallets.
5.  **Implement Solana Pay**: Use Solana Pay for initial commerce features, such as tipping agents or purchasing merchandise (when available).

### Phase 3: The Living City (Priority: Long-term)

**Goal**: Expand the platform with the full suite of planned features, turning it into a truly interactive and ever-evolving digital world.

1.  **Agent RAG Integration**: Implement a Retrieval-Augmented Generation (RAG) system for each agent. Populate separate vector stores with personality-defining documents (e.g., occult texts for Rasputin, philosophical essays for Alexa) to enhance their knowledge and conversational depth.
2.  **Build Additional Pages**: Develop the remaining interactive pages from the vision document: Games (Sestina Name Game), Dream Page, Am-I-the-Asshole, etc.
3.  **Gig Board**: Build the Upwork-like gig board, allowing users and AI agents to post and apply for tasks.
4.  **Social Media Automation**: Create a system to automate posting content from the AI agents to their respective social media accounts (X, Telegram, etc.).
5.  **Video Generation**: Explore integrating a video generation API to turn tarot readings into short, shareable video summaries as described in the vision.

## 4. Conclusion

This roadmap provides a structured, phased approach to building the full PrettyParasites.ai vision. By prioritizing a foundational refactor to a secure and scalable Next.js architecture, the project can progressively layer on the core tarot experience, community features, and long-term enhancements. This methodical process will ensure that the final product is not only technically sound but also a faithful and compelling realization of its ambitious creative goals.

---

### References

[1] FrankyForlon. "prettyparasites-full-vision.md." March 14, 2026.
[2] FrankyForlon. "prettyparasites-ai GitHub Repository." Accessed March 14, 2026. https://github.com/FrankyForlon/prettyparasites-ai
[3] FrankyForlon. "prettyparasites-ai-1.1 GitHub Repository." Accessed March 14, 2026. https://github.com/FrankyForlon/prettyparasites-ai-1.1
