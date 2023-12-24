import { meta  ,shopify, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "IPG Tech Support",
        company_name: "Marx Pay",
        icon: meta,
        iconBg: "#accbe1",
        date: "Augest 2022 - April 2023",
        points: [
            "Addressed and debugged hardware, software and network issues through systematic troubleshooting, maintaining .",
            "Assisted clients in resolving payment gateway integration problems through configuration adjustments and custom code solutions.",
            "Edited and updated Marx Pay website frontend, improving UI/UX through better information architecture and design enhancements.",
            "Led testing for new product features on staging environments, expediting development cycles by identifying defects early.",
            "Recognized for calm and patient customer interactions even during high stress incidents."
            
        ],
    },
    {
        title: "Digital Marketer",
        company_name: "WeAssyst",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jun 2022 - Nov 2023",
        points: [
            "Conducted digital marketing campaigns across multiple channels including Google Ads, Facebook Ads, and social media platforms",
            "Expanded social media outreach, substantially growing the community of followers and enhancing user interaction.",
            "Developed and implemented content marketing strategies to drive website traffic and engagement.",
            "Applied analytical tools to monitor and report on campaign performance, optimizing spend and maximizing returns.",
            "Created and maintained a strategic content schedule to uphold a consistent brand voice and message across platforms.",
            "Collaborated with cross-functional teams to align marketing efforts with overall business goals.",	
        ],
    },
    {
        title: "WordPress Web Designer",
        company_name: "Freelancer",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Jan 2023",
        points: [
            "Crafted over 20 customized WordPress websites for diverse clientele, enhancing their online presence.",
            "Collaborated with clients to gather requirements and translate them into functional, user-friendly designs.",
            "Integrated SEO Provided ongoing website maintenance and updates, ensuring security and relevancy.",
            "Provided ongoing website maintenance and support.",
            "Conducted website analytics reviews to advise clients on content and design optimization.",
            "Implemented custom WordPress themes and plugins to meet specific client needs.",
            
        ],
    },
    {
        title: "social media marketing specialist",
        company_name: "Zimona",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developed and implemented innovative social media strategies to increase brand awareness and engagement across various platforms including Facebook, Instagram, and Tiktok.",
            "Created compelling content calendars, ensuring consistent and high-quality content that resonates with the target audience and aligns with brand messaging.",
            "Managed paid social media campaigns, monitoring budgets and optimizing ad spend for maximum ROI.",
            "Analyzed social media metrics and KPIs using tools like Google Analytics and platform-specific insights to measure campaign success and inform future strategies.",
            "Fostered a vibrant online community by engaging with followers, responding to queries in a timely manner, and moderating discussions to maintain a positive brand image.",
            "Stayed abreast of social media trends and algorithm changes to adapt content and strategy, ensuring continued growth and relevance in the digital space.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/isurulkh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/isurulkh/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];