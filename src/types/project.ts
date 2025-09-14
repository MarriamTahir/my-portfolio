// src/types/project.ts
// Project data model used across the project.
// Add/remove optional fields as needed, but keep names consistent with data/projects.ts

export interface Project {
  id: number
  title: string
  description: string
  images: string[]        // screenshots: images[0] is hero image
  tags: string[]          // tech/tags
  type?: 'development' | 'figma'
  videos?: string[]       // optional: array of video embed src (YouTube iframe src)
  liveLink?: string       // optional: deployed site URL for development projects
  figmaLink?: string      // optional: public prototype link for figma projects
}
