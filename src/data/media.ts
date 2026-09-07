import amerrVideo from "@/assets/media/amerr_final.mp4.asset.json";
import amerrPoster from "@/assets/media/amerr_final.jpg.asset.json";
import room44Video from "@/assets/media/room_44_promo.mp4.asset.json";
import room44Poster from "@/assets/media/room_44_promo.jpg.asset.json";
import v3694 from "@/assets/media/img_3694.mp4.asset.json";
import p3694 from "@/assets/media/img_3694.jpg.asset.json";
import v3761 from "@/assets/media/img_3761.mp4.asset.json";
import p3761 from "@/assets/media/img_3761.jpg.asset.json";
import v4062 from "@/assets/media/img_4062.mp4.asset.json";
import p4062 from "@/assets/media/img_4062.jpg.asset.json";
import v4429 from "@/assets/media/img_4429.mp4.asset.json";
import p4429 from "@/assets/media/img_4429.jpg.asset.json";
import v4370 from "@/assets/media/img_4370.mp4.asset.json";
import p4370 from "@/assets/media/img_4370.jpg.asset.json";
import v4378 from "@/assets/media/img_4378.mp4.asset.json";
import p4378 from "@/assets/media/img_4378.jpg.asset.json";
import v4519 from "@/assets/media/img_4519.mp4.asset.json";
import p4519 from "@/assets/media/img_4519.jpg.asset.json";
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

export type MediaGroup = "cinematic" | "reels";

export type MediaItem = {
  id: string;
  title: string;
  ratio: number; // width / height — determines grouping: >=1 cinematic, <1 reels
  videoUrl: string;
  posterUrl: string;
};

/** Single source of truth. Group membership is derived from `ratio`, never hardcoded. */
export const mediaItems: MediaItem[] = [
  { id: "m-room44", title: "Venue Promo", ratio: 1620 / 1080, videoUrl: room44Video.url, posterUrl: room44Poster.url },
  { id: "m-amer", title: "Company Mascot & Storyline", ratio: 1620 / 1080, videoUrl: amerrVideo.url, posterUrl: amerrPoster.url },
  { id: "m-4745", title: "Company Promo I", ratio: 1080 / 1920, videoUrl: v4745.url, posterUrl: p4745.url },
  { id: "m-5217", title: "Company Promo II", ratio: 1620 / 1080, videoUrl: v5217.url, posterUrl: p5217.url },
  { id: "m-4744", title: "Company Promo III", ratio: 1080 / 1920, videoUrl: v4744.url, posterUrl: p4744.url },
  { id: "m-4693", title: "Company Promo IV", ratio: 1080 / 1936, videoUrl: v4693.url, posterUrl: p4693.url },
  { id: "m-5015", title: "Venue Photoshoot", ratio: 1080 / 1936, videoUrl: v5015.url, posterUrl: p5015.url },
  { id: "m-4519", title: "Story Telling", ratio: 1930 / 1080, videoUrl: v4519.url, posterUrl: p4519.url },
  { id: "m-3761", title: "Futuristic Promo", ratio: 1080 / 1920, videoUrl: v3761.url, posterUrl: p3761.url },
  { id: "m-3694", title: "Modeling Photoshoot", ratio: 1440 / 2560, videoUrl: v3694.url, posterUrl: p3694.url },
  { id: "m-4062", title: "Cinematic Story Telling I", ratio: 2548 / 1080, videoUrl: v4062.url, posterUrl: p4062.url },
  { id: "m-4370", title: "Cinematic Story Telling II", ratio: 1914 / 1080, videoUrl: v4370.url, posterUrl: p4370.url },
  { id: "m-4378", title: "Instagram Virality — Cinematic Shoot", ratio: 1930 / 1080, videoUrl: v4378.url, posterUrl: p4378.url },
];

export function getGroup(item: MediaItem): MediaGroup {
  return item.ratio >= 1 ? "cinematic" : "reels";
}

export const groupLabel: Record<MediaGroup, string> = {
  cinematic: "Cinematic",
  reels: "Reels",
};
