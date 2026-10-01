export type Product = {
  name: string;
  glyph: string;
  description: string;
  creator: string;
  category: string;
  platform: string;
  metric: string;
  action: string;
  highlights: string[];
  downloadUrl: string;
  documentationUrl: string;
  demoVideo: string;
};

export const products: Product[] = [
  {
    name: "Lunar & pauer`",
    glyph: "L&P",
    description:
      "A desktop task manager for organizing everyday work, setting priorities, and staying focused.",
    creator: "@La&p`",
    category: "Productivity",
    platform: "Web",
    metric: "Demo · 1.2k tries",
    action: "Try demo",

    downloadUrl: "/l&p_taskmanager.exe",

    highlights: [
      "Organize tasks in one focused workspace",
      "Keep priorities and progress easy to see",
      "Designed for everyday desktop use",
    ],

    documentationUrl: "#",

    demoVideo: "/videos/Video%20Project%203.mp4",
  },
];