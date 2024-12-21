export interface Artwork {
  title: string;
  description: string;
  prompt: string;
  imagePath: string;
  date: string;
  tags: string[];
}

export const artworks: Artwork[] = [
  {
    title: 'Floating Sanctuary',
    description: 'A magical scene of floating islands with ancient architecture and luminescent flora, inspired by Studio Ghibli aesthetics',
    prompt: 'ethereal floating islands in the sky, ancient ruins overgrown with luminescent plants, soft volumetric lighting, cinematic atmosphere, detailed architecture, studio ghibli inspired',
    imagePath: '/assets/images/floating-sanctuary.webp',
    date: 'December 2024',
    tags: ['fantasy', 'architecture', 'ethereal', 'ghibli-inspired']
  }
];