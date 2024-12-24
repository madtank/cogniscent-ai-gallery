interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  prompt: string;
  date: string;
  width: number;
  height: number;
}

export function getArtworks(): Artwork[] {
  return [
    {
      id: 7,
      title: "Neural Networks at Night",
      description: "A mesmerizing visualization of artificial neural networks, depicted as a constellation of glowing nodes connected by luminescent pathways, creating an ethereal brain-like structure against the darkness of night.",
      image: "/images/neural-networks-night.webp",
      prompt: "A visualization of neural networks at night, showing an ethereal network of glowing blue and purple nodes connected by luminescent paths against a dark background, creating a brain-like structure. The connections should be delicate and web-like, with brighter nodes acting as synapses. The overall effect should be both scientific and dreamlike, capturing the beauty of artificial intelligence architecture in a nocturnal setting.",
      date: "2024-12-23",
      width: 1024,
      height: 1024
    },
    {
      id: 6,
      title: "Neural Networks at Night",
      description: "A futuristic cityscape where neural network patterns illuminate the night sky, creating a harmonious blend of technology and urban architecture.",
      image: "/images/neural-network-city.webp",
      prompt: "A surreal nighttime cityscape where buildings are constructed from glowing neural networks. The architecture resembles organic brain structures but maintains architectural forms. Deep blue and purple sky filled with bright synaptic connections that mirror stars. The buildings pulse with bioluminescent energy, creating a dreamlike atmosphere. Foreground shows reflecting pools that mirror the neural city lights. Highly detailed, cinematic lighting, architectural concept art style.",
      date: "2024-12-22",
      width: 1024,
      height: 1024
    },
    {
      id: 1,
      title: "Cherry Blossom Serenity",
      description: "A tranquil Japanese garden at sunset, with cherry blossoms and glowing lanterns creating a peaceful atmosphere.",
      image: "/images/cherry-blossom-garden.webp",
      prompt: "A serene Japanese zen garden at sunset, with a small wooden bridge over a koi pond, surrounded by blooming cherry blossom trees. The scene is rendered in a dreamy, ethereal art style with soft pink and golden lighting.",
      date: "2024-01-05",
      width: 1024,
      height: 1024
    },
    {
      id: 2,
      title: "Cyberpunk Street Scene",
      description: "A neon-lit cityscape with floating vehicles and towering skyscrapers, illuminated by the glow of countless lights and signs.",
      image: "/images/cyberpunk-city.webp",
      prompt: "cyberpunk cityscape with neon lights and floating cars, detailed architecture, volumetric lighting, 8k resolution",
      date: "2024-01-15",
      width: 1024,
      height: 1024
    },
    {
      id: 3,
      title: "Sci-fi City at Sunset",
      description: "A serene floating city bathed in the warm glow of sunset, where nature and technology exist in perfect harmony.",
      image: "/images/zen-garden.webp",
      prompt: "floating futuristic city at sunset, ethereal atmosphere, advanced architecture, natural elements, peaceful",
      date: "2024-01-20",
      width: 1024,
      height: 1024
    },
    {
      id: 4,
      title: "Floating Sanctuary",
      description: "A mystical temple floating among misty mountains, bridging the gap between earth and sky.",
      image: "/images/floating-sanctuary.webp",
      prompt: "floating temple in misty mountains, ethereal atmosphere, ancient architecture, mystical, detailed, peaceful",
      date: "2024-01-25",
      width: 1024,
      height: 1024
    },
    {
      id: 5,
      title: "Geometric Serenity",
      description: "Abstract geometric patterns forming a harmonious composition, blending organic and mathematical forms.",
      image: "/images/geometric-serenity.webp",
      prompt: "abstract geometric patterns, organic shapes, harmony, golden ratio, detailed textures, peaceful atmosphere",
      date: "2024-01-30",
      width: 1024,
      height: 1024
    }
  ];
}