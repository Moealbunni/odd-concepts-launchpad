export type MediaCategory = "video" | "ugc" | "photo" | "ad";

export type MediaItem = {
  id: string;
  title: string;
  category: MediaCategory;
  ratio: number; // e.g. 9/16, 16/9, 1/1
  videoUrl?: string;
  posterUrl?: string;
  imageUrl?: string;
};

/** Placeholder slots only — real media drops in without refactoring. */
export const videos: MediaItem[] = [
  { id: "video-1", title: "Sample slot — awaiting media", category: "video", ratio: 16 / 9 },
  { id: "video-2", title: "Sample slot — awaiting media", category: "video", ratio: 9 / 16 },
  { id: "video-3", title: "Sample slot — awaiting media", category: "video", ratio: 1 },
];

export const ugc: MediaItem[] = [
  { id: "ugc-1", title: "Sample slot — awaiting media", category: "ugc", ratio: 9 / 16 },
  { id: "ugc-2", title: "Sample slot — awaiting media", category: "ugc", ratio: 1 },
  { id: "ugc-3", title: "Sample slot — awaiting media", category: "ugc", ratio: 16 / 9 },
];

export const photos: MediaItem[] = [
  { id: "photo-1", title: "Sample slot — awaiting media", category: "photo", ratio: 1 },
  { id: "photo-2", title: "Sample slot — awaiting media", category: "photo", ratio: 9 / 16 },
  { id: "photo-3", title: "Sample slot — awaiting media", category: "photo", ratio: 16 / 9 },
];

export const ads: MediaItem[] = [
  { id: "ad-1", title: "Sample slot — awaiting media", category: "ad", ratio: 16 / 9 },
  { id: "ad-2", title: "Sample slot — awaiting media", category: "ad", ratio: 1 },
  { id: "ad-3", title: "Sample slot — awaiting media", category: "ad", ratio: 9 / 16 },
];

export const categoryLabel: Record<MediaCategory, string> = {
  video: "Video",
  ugc: "UGC",
  photo: "Photo",
  ad: "Ad",
};
