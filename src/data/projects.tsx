import { Project } from "./types";

export const projects: Project[] = [
    {
        id: "spotify-dashboard",
        number: "01",
        title: "Spotify Analytics Dashboard",
        year: "2026",
        category: "Personal",
        role: "Full Stack Engineer",
        overview:
            "Interactive dashboard that visualizes Spotify listening habits, top artists, recently played tracks, and long-term listening insights.",
        challenge:
            "Spotify exposes limited listening history and requires OAuth authentication with automatic token refresh.",
        solution:
            "Built a secure Next.js application using the Spotify Web API, encrypted session cookies, and reusable analytics components.",
        outcome:
            "A responsive dashboard providing users with meaningful listening insights through interactive visualizations.",
        lessonsLearned:
            "Deepened my understanding of OAuth 2.0, authentication flows, API integrations, and frontend data visualization.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Spotify API",
            "Recharts",
            "Tailwind CSS",
        ],
        image: "/projects/spotify/cover.png",
        gallery: [
            "/projects/spotify/dashboard.png",
            "/projects/spotify/artists.png",
            "/projects/spotify/charts.png",
        ],
        demoUrl: "https://spotify.example.com",
        githubUrl: "https://github.com/abbyMikoto/spotify-dashboard",
        featured: true,
    },
    {
        id: "travel-planner",
        number: "02",
        title: "Travel Planner",
        year: "2026",
        category: "Personal",
        role: "Full Stack Engineer",
        overview:
            "A personal travel-planning app for organizing trips — each trip can hold Stays (hotels, airbnbs, etc...), Attractions, and Dining reservations, with optional cover images and website links.",
        // challenge:
        //     "Ensuring updates to the database are accurate and valid. Maintaining data integrity.",
        // solution:
        //     "Built a secure Next.js application using the Spotify Web API, encrypted session cookies, and reusable analytics components.",
        outcome:
            "An interactive planner that provides users with the ability to easily keep track of up coming trips.",
        lessonsLearned:
            "Maintaining data integrity is difficult when there are multiple dependencies.",
        technologies: [
            "Next.js",
            "TypeScript",
            "React",
            "PostgreSql",
            "Tailwind CSS",
        ],
        image: "/projects/travel-planner/cover.png",
        gallery: [
            "/projects/spotify/dashboard.png",
            "/projects/spotify/artists.png",
            "/projects/spotify/charts.png",
        ],
        demoUrl: "https://travel-planner.example.com",
        githubUrl: "https://github.com/abbyMikoto/travel-planner",
        featured: true,
    },





    {
        id: "emr",
        number: "03",
        title: "Electronic Medical Record Platform",
        year: "2024 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "FILL",
        challenge:
            "FILL",
        solution:
            "FILL",
        outcome:
            "FILL",
        lessonsLearned:
            "FILL",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            "Blazor"
        ],
        featured: false,
    },
    {
        id: "api-repository",
        number: "04",
        title: "Redis Caching Library",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "FILL",
        challenge:
            "FILL",
        solution:
            "FILL",
        outcome:
            "FILL",
        lessonsLearned:
            "FILL",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            ""
        ],
        featured: false,
    },
    {
        id: "logging-library",
        number: "05",
        title: "Logging Library",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "FILL",
        challenge:
            "FILL",
        solution:
            "FILL",
        outcome:
            "FILL",
        lessonsLearned:
            "FILL",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            ""
        ],
        featured: false,
    },
    {
        id: "api-validation",
        number: "06",
        title: "API Validation Framework",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "FILL",
        challenge:
            "FILL",
        solution:
            "FILL",
        outcome:
            "FILL",
        lessonsLearned:
            "FILL",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            ""
        ],
        featured: false,
    },
    {
        id: "business",
        number: "07",
        title: "Business Flow Optimization",
        year: "2023 - 2026",
        category: "Professional",
        role: "Software Developer | Data Analyst",
        overview:
            "FILL",
        challenge:
            "FILL",
        solution:
            "FILL",
        outcome:
            "FILL",
        lessonsLearned:
            "FILL",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            ""
        ],
        featured: false,
    },

    
];