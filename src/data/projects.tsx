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
    },

    {
        id: "emr",
        number: "03",
        title: "Electronic Medical Record Platform",
        year: "2024 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "Collaborated with software engineers, architects, and business stakeholders to design and develop a modern cloud-based Electronic Medical Record (EMR) platform. Contributed across the full software development lifecycle, including requirements gathering, solution design, API development, database optimization, frontend and backend implementation, and technical documentation.",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            "Blazor",
            "SQL Server",
            "HTML & CSS"
        ],
    },
    {
        id: "api-repository",
        number: "04",
        title: "Redis Caching Library",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "Built a reusable Redis caching library that supports key and tag generation, configurable TTLs, cache invalidation, and data retrieval. The library follows a cache-aside pattern, checking Redis first and querying the database only when cached data is unavailable.",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure",
            "Redis",
            "SQL Server"
        ],
    },
    {
        id: "logging-library",
        number: "05",
        title: "Logging Library",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "Designed and developed a reusable logging library that standardized structured logging across multiple services. The library generated consistent logging objects and published them to Azure Event Hubs for downstream processing and observability platforms, including Datadog. Implemented step, process, and event logging to improve application monitoring, diagnostics, and operational visibility.",
        technologies: [
            "C#",
            ".NET",
            "Azure Event Hub",
            "Datadog"
        ],
    },
    {
        id: "api-request-framework",
        number: "06",
        title: "Http Request Framework",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "Built a reusable request framework for GET, POST, PUT, and PATCH operations that became the standard implementation across application domains. Designed with scalability and consistency in mind, the framework reduced duplicated code and simplified the development of new services and endpoints.",
        technologies: [
            "C#",
            ".NET",
            "Dapper",
            "Microsoft Azure"
        ]
    },
    {
        id: "api-validation",
        number: "07",
        title: "API Validation Framework",
        year: "2025 - 2026",
        category: "Professional",
        role: "Software Developer",
        overview:
            "Designed, developed, and documented a reusable API validation framework that dynamically validates request payloads across multiple endpoints. The framework leveraged FluentValidation to execute property-specific validation rules, providing a scalable and consistent approach to request validation while reducing duplicated validation logic and simplifying the addition of new API models.",
        technologies: [
            "C#",
            ".NET",
            "Microsoft Azure"
        ],
    },
    {
        id: "billing",
        number: "08",
        title: "Billing & Authorization Flow Optimization",
        year: "2023 - 2026",
        category: "Professional",
        role: "Software Developer | Data Analyst",
        overview:
            "Collaborated with operational and technical teams to redesign billing and authorization workflows through automation and custom software solutions. Developed Microsoft Power Apps to provide users with an intuitive interface for interacting with billing and authorization data, created Power BI dashboards to improve operational visibility and support data-driven decision making, and implemented billing automation processes that streamlined claim generation and updates.",
        technologies: [
            "C#",
            ".NET",
            "SQL Server",
            "Azure Function",
            "Power Apps",
            "Power Automate",
            "Power BI",
        ],
    },

    
];