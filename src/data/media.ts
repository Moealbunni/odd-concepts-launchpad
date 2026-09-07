import amerrVideo from "@/assets/media/amerr_final.mp4.asset.json";
import amerrPoster from "@/assets/media/amerr_final.jpg.asset.json";
import room44Video from "@/assets/media/room_44_promo.mp4.asset.json";
import room44Poster from "@/assets/media/room_44_promo.jpg.asset.json";
import v5153 from "@/assets/media/img_5153.mp4.asset.json";
import p5153 from "@/assets/media/img_5153.jpg.asset.json";
import v3694 from "@/assets/media/img_3694.mp4.asset.json";
import p3694 from "@/assets/media/img_3694.jpg.asset.json";
import v3761 from "@/assets/media/img_3761.mp4.asset.json";
import p3761 from "@/assets/media/img_3761.jpg.asset.json";
import v4062 from "@/assets/media/img_4062.mp4.asset.json";
import p4062 from "@/assets/media/img_4062.jpg.asset.json";
import v4370 from "@/assets/media/img_4370.mp4.asset.json";
import p4370 from "@/assets/media/img_4370.jpg.asset.json";
import v4378 from "@/assets/media/img_4378.mp4.asset.json";
import p4378 from "@/assets/media/img_4378.jpg.asset.json";
import v4519 from "@/assets/media/img_4519.mp4.asset.json";
import v4693 from "@/assets/media/img_4693.mp4.asset.json";
import p4693 from "@/assets/media/img_4693.jpg.asset.json";
import v4744 from "@/assets/media/img_4744.mp4.asset.json";
import p4744 from "@/assets/media/img_4744.jpg.asset.json";
import v4745 from "@/assets/media/img_4745.mp4.asset.json";
import p4745 from "@/assets/media/img_4745.jpg.asset.json";
import v5015 from "@/assets/media/img_5015.mp4.asset.json";
import p5015 from "@/assets/media/img_5015.jpg.asset.json";
import v5217 from "@/assets/media/img_5217.mp4.asset.json";
import p5217 from "@/assets/media/img_5217.jpg.asset.json";
import p4519 from "@/assets/media/img_4519.jpg.asset.json";

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

export const videos: MediaItem[] = [
  {
    id: "video-room44",
    title: "Room 44 — brand promo",
    category: "video",
    ratio: 1620 / 1080,
    videoUrl: room44Video.url,
    posterUrl: room44Poster.url,
  },
  {
    id: "video-amer",
    title: "Amer Central AC — brand promo",
    category: "video",
    ratio: 1620 / 1080,
    videoUrl: amerrVideo.url,
    posterUrl: amerrPoster.url,
  },
  {
    id: "video-5153",
    title: "Studio production cut",
    category: "video",
    ratio: 1620 / 1080,
    videoUrl: v5153.url,
    posterUrl: p5153.url,
  },
  {
    id: "video-5217",
    title: "Studio production cut",
    category: "video",
    ratio: 1620 / 1080,
    videoUrl: v5217.url,
    posterUrl: p5217.url,
  },
];

export const ugc: MediaItem[] = [
  {
    id: "ugc-3694",
    title: "Vertical social cut",
    category: "ugc",
    ratio: 1440 / 2560,
    videoUrl: v3694.url,
    posterUrl: p3694.url,
  },
  {
    id: "ugc-3761",
    title: "Vertical social cut",
    category: "ugc",
    ratio: 1080 / 1920,
    videoUrl: v3761.url,
    posterUrl: p3761.url,
  },
  {
    id: "ugc-4062",
    title: "Wide social cut",
    category: "ugc",
    ratio: 2548 / 1080,
    videoUrl: v4062.url,
    posterUrl: p4062.url,
  },
  {
    id: "ugc-4693",
    title: "Vertical social cut",
    category: "ugc",
    ratio: 1080 / 1936,
    videoUrl: v4693.url,
    posterUrl: p4693.url,
  },
  {
    id: "ugc-4744",
    title: "Vertical social cut",
    category: "ugc",
    ratio: 1080 / 1920,
    videoUrl: v4744.url,
    posterUrl: p4744.url,
  },
  {
    id: "ugc-4745",
    title: "Vertical social cut",
    category: "ugc",
    ratio: 1080 / 1920,
    videoUrl: v4745.url,
    posterUrl: p4745.url,
  },
  {
    id: "ugc-5015",
    title: "Vertical social cut",
    category: "ugc",
    ratio: 1080 / 1936,
    videoUrl: v5015.url,
    posterUrl: p5015.url,
  },
];

export const photos: MediaItem[] = [];

export const ads: MediaItem[] = [
  {
    id: "ad-4370",
    title: "Ad creative cut",
    category: "ad",
    ratio: 1914 / 1080,
    videoUrl: v4370.url,
    posterUrl: p4370.url,
  },
  {
    id: "ad-4378",
    title: "Ad creative cut",
    category: "ad",
    ratio: 1930 / 1080,
    videoUrl: v4378.url,
    posterUrl: p4378.url,
  },
  {
    id: "ad-4519",
    title: "Ad creative cut",
    category: "ad",
    ratio: 1930 / 1080,
    videoUrl: v4519.url,
    posterUrl: p4519.url,
  },
];

export const categoryLabel: Record<MediaCategory, string> = {
  video: "Video",
  ugc: "UGC",
  photo: "Photo",
  ad: "Ad",
};
