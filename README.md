> **Note:** This project was bootstrapped and the full source code was reconstructed by Manus, an autonomous AI agent, based on the live deployed website at `https://prettyai-2evhys4h.manus.space`.

# PrettyMap (`prettyparasites.ai`)

**Live Site:** [**https://prettyai-2evhys4h.manus.space**](https://prettyai-2evhys4h.manus.space)

PrettyMap is a digital cartography project designed to visualize and explore the emerging landscape of AI-assisted creative culture. It serves as an interactive map and community hub for artists, developers, writers, and creators who are leveraging artificial intelligence in their work. The platform aims to connect individuals, showcase projects, and provide resources for this growing ecosystem.

## Features

- **Interactive World Map:** A full-viewport Google Map, custom-styled with the "Deep Bloom" dark theme, displaying 25 initial, color-coded pins for meetups, creators, gigs, and events.
- **Collapsible Sidebar:** A Discord-inspired sidebar with categorized channels for different creative disciplines, providing a familiar interface for community navigation.
- **Content Pages:** Dedicated pages for "About," "Education," and a "Gigs" board to provide context, learning resources, and opportunities within the community.
- **"Deep Bloom" Design System:** A unique, bioluminescent dark theme featuring deep blacks, glowing teals and purples, frosted-glass UI panels, and fluid animations powered by Framer Motion.

## Tech Stack

The project is built with a modern, performant, and scalable tech stack.

| Category      | Technology                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| **Framework** | [React](https://react.dev/) (via [Vite](https://vitejs.dev/))                                            |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)                                                          |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)                                                                 |
| **Animation** | [Framer Motion](https://www.framer.com/motion/)                                                        |
| **Mapping**   | [Google Maps Platform](https://mapsplatform.google.com/) (with `@vis.gl/react-google-maps`)              |
| **Routing**   | [React Router](https://reactrouter.com/)                                                                 |
| **Deployment**| [Vercel](https://vercel.com/)                                                                            |

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    gh repo clone FrankyForlon/PrettyMap
    cd PrettyMap
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install, pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Google Maps API key:
    ```
    VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Project Structure

The codebase is organized into a standard Vite + React project structure:

```
PrettyMap/
├── public/
│   └── favicon.svg
├── research/               # Litkarta research files and screenshots
│   ├── litkarta-research.md
│   └── *.webp              # Screenshot references
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MapView.tsx
│   │   ├── MemberCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── data/               # Static data files
│   │   ├── channels.ts
│   │   ├── courses.ts
│   │   ├── gigs.ts
│   │   ├── mapPins.ts
│   │   ├── mapStyle.ts
│   │   └── members.ts
│   ├── pages/              # Page-level components
│   │   ├── AboutPage.tsx
│   │   ├── EducationPage.tsx
│   │   ├── GigsPage.tsx
│   │   └── MapPage.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── DIARY.md                # Project diary (Culture ship voice)
├── RESEARCH.md             # Research on hosting, domain, roadmap
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Future Roadmap

Based on initial research, the following features are planned to evolve PrettyMap into a fully-fledged community platform:

-   **User Authentication:** Implementing a robust authentication system (likely using Clerk) to allow users to create profiles.
-   **Database & User Submissions:** Integrating a database (e.g., Supabase) to allow authenticated users to submit their own pins to the map, subject to moderation.
-   **Real-Time Chat:** Adding real-time chat functionality to the sidebar channels to foster live community interaction.
-   **Domain:** Pointing `prettyparasites.ai` from GoDaddy to Vercel (see RESEARCH.md for step-by-step instructions).

## License

This project is licensed under the MIT License.
