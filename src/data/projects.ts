// ✅ Project type definition (interface)
export interface Project {
  id: number
  title: string
  description: string
  images: string[]        // 👈 Hero image + other screenshots
  tags: string[]          // 👈 Tech stack tags
  type?: 'development' | 'figma'
  videos?: string[]       // 👈 Optional: multiple video demos (for development)
  liveLink?: string       // 👈 Optional: live Netlify/Vercel deployment link (for development)
  figmaLink?: string      // 👈 Optional: figma prototype share link (for figma projects)
}

// ✅ All Projects
const projects: Project[] = [
  // -------------------------------
  // 1️⃣ Figma Project Example
  // -------------------------------
  {
    id: 1,
    title: "Interior Website Design",
    description:
      "A Figma prototype for an interior design website with a clean, modern, and user-friendly interface.",
    images: [
      "/projects/interior.webp",  // 👈 Hero image (700px height in detail view)
      // "/projects/interior-page1.jpg", // 👈 Extra screenshot(s)
      // "/projects/interior-page2.jpg"
    ],
    tags: ["Figma", "UI/UX", "Prototype"],
    type: "figma",
    figmaLink:
      "https://www.figma.com/proto/6wTLZYZHkJC8cIPrFoOpc7/GDmentor?node-id=122-732" // 👈 Paste your share link here
  },

  // -------------------------------
  // 2️⃣ Development Project Example
  // -------------------------------
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A modern personal portfolio built with React, TypeScript, and Tailwind CSS. Fully responsive with glassmorphism design.",
    images: [
      "/projects/dev.webp", // 👈 Hero image (always first)
      // "/projects/portfolio-about.jpg",
      // "/projects/portfolio-projects.jpg",
      // "/projects/portfolio-contact.jpg"
    ],
    tags: ["React", "TypeScript", "Tailwind", "Design"],
    type: "development",
    videos: [
      // "https://www.youtube.com/embed/ScMzIvxBSi4", // c👈 Example video link (replace with real demo)
      // "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ],
    // liveLink: "https://your-portfolio.netlify.app" // 👈 Your deployed link
  }
]

export default projects
