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
import vViral from "@/assets/media/viral_video_ideas.mp4.asset.json";
import pViral from "@/assets/media/viral_video_ideas.jpg.asset.json";
import vWinter from "@/assets/media/winter_is_coming.mp4.asset.json";
import pWinter from "@/assets/media/winter_is_coming.jpg.asset.json";
import v5217 from "@/assets/media/img_5217.mp4.asset.json";
import p5217 from "@/assets/media/img_5217.jpg.asset.json";
import vClientAd from "@/assets/media/client_ad.mp4.asset.json";
import pClientAd from "@/assets/media/client_ad.jpg.asset.json";
import vClientAd2 from "@/assets/media/client_ad_2.mp4.asset.json";
import pClientAd2 from "@/assets/media/client_ad_2.jpg.asset.json";
import vCineAd1 from "@/assets/media/cinematic_ad_1.mp4.asset.json";
import pCineAd1 from "@/assets/media/cinematic_ad_1.jpg.asset.json";
import vCineAd2 from "@/assets/media/cinematic_ad_2.mp4.asset.json";
import pCineAd2 from "@/assets/media/cinematic_ad_2.jpg.asset.json";
import vSpotAd from "@/assets/media/the_spot_ad.mp4.asset.json";
import pSpotAd from "@/assets/media/the_spot_ad.jpg.asset.json";
import vRoom44Reel from "@/assets/media/room44_reel.mp4.asset.json";
import pRoom44Reel from "@/assets/media/room44_reel.jpg.asset.json";
import vEvArt1 from "@/assets/media/event_artwork_1.mp4.asset.json";
import pEvArt1 from "@/assets/media/event_artwork_1.jpg.asset.json";
import vEvArt2 from "@/assets/media/event_artwork_2.mp4.asset.json";
import pEvArt2 from "@/assets/media/event_artwork_2.jpg.asset.json";
import vEvArt3 from "@/assets/media/event_artwork_3.mp4.asset.json";
import pEvArt3 from "@/assets/media/event_artwork_3.jpg.asset.json";
import vEvArt4 from "@/assets/media/event_artwork_4.mp4.asset.json";
import pEvArt4 from "@/assets/media/event_artwork_4.jpg.asset.json";
import vEvArt5 from "@/assets/media/event_artwork_5.mp4.asset.json";
import pEvArt5 from "@/assets/media/event_artwork_5.jpg.asset.json";
import vViralReel1 from "@/assets/media/viral_reel_1.mp4.asset.json";
import pViralReel1 from "@/assets/media/viral_reel_1.jpg.asset.json";
import vViralReel2 from "@/assets/media/viral_reel_2.mp4.asset.json";
import pViralReel2 from "@/assets/media/viral_reel_2.jpg.asset.json";
import vViralReel3 from "@/assets/media/viral_reel_3.mp4.asset.json";
import pViralReel3 from "@/assets/media/viral_reel_3.jpg.asset.json";
import vCineStory3 from "@/assets/media/cine_story_3.mp4.asset.json";
import pCineStory3 from "@/assets/media/cine_story_3.jpg.asset.json";
import vCineStory4 from "@/assets/media/cine_story_4.mp4.asset.json";
import pCineStory4 from "@/assets/media/cine_story_4.jpg.asset.json";
import vCineStory5 from "@/assets/media/cine_story_5.mp4.asset.json";
import pCineStory5 from "@/assets/media/cine_story_5.jpg.asset.json";
import vAvatar1 from "@/assets/media/avatar_1.mp4.asset.json";
import pAvatar1 from "@/assets/media/avatar_1.jpg.asset.json";
import vVideoEdits from "@/assets/media/video_edits.mp4.asset.json";
import pVideoEdits from "@/assets/media/video_edits.jpg.asset.json";
import vAvatar2 from "@/assets/media/avatar_2.mp4.asset.json";
import pAvatar2 from "@/assets/media/avatar_2.jpg.asset.json";
import vAvatar3 from "@/assets/media/avatar_3.mp4.asset.json";
import pAvatar3 from "@/assets/media/avatar_3.jpg.asset.json";

export type MediaGroup = "cinematic" | "reels";
export type MediaCategory = "ads" | "storytelling" | "promos" | "avatar" | "videoEdits" | "eventArtwork" | "viral" | "shoots";

export type MediaItem = {
  id: string;
  title: string;
  ratio: number; // width / height — determines grouping: >=1 cinematic, <1 reels
  category: MediaCategory;
  videoUrl: string;
  posterUrl: string;
};

/** Single source of truth. Group membership is derived from `ratio`, never hardcoded. */
export const mediaItems: MediaItem[] = [
  { id: "m-clientad", title: "Client Ad", ratio: 1936 / 1080, category: "ads", videoUrl: vClientAd.url, posterUrl: pClientAd.url },
  { id: "m-clientad2", title: "Client Ad II", ratio: 1920 / 1080, category: "ads", videoUrl: vClientAd2.url, posterUrl: pClientAd2.url },
  { id: "m-cinead1", title: "Cinematic Ad I", ratio: 1936 / 1080, category: "ads", videoUrl: vCineAd1.url, posterUrl: pCineAd1.url },
  { id: "m-cinead2", title: "Cinematic Ad II", ratio: 1936 / 1080, category: "ads", videoUrl: vCineAd2.url, posterUrl: pCineAd2.url },
  { id: "m-spotad", title: "Cinematic Ad III", ratio: 1920 / 1080, category: "ads", videoUrl: vSpotAd.url, posterUrl: pSpotAd.url },
  { id: "m-room44", title: "Venue Promo", ratio: 1620 / 1080, category: "promos", videoUrl: room44Video.url, posterUrl: room44Poster.url },
  { id: "m-amer", title: "Company Mascot & Storyline", ratio: 1620 / 1080, category: "storytelling", videoUrl: amerrVideo.url, posterUrl: amerrPoster.url },
  { id: "m-viral", title: "Viral Video Ideas", ratio: 1914 / 1080, category: "viral", videoUrl: vViral.url, posterUrl: pViral.url },
  { id: "m-winter", title: "Viral Video", ratio: 1440 / 1080, category: "viral", videoUrl: vWinter.url, posterUrl: pWinter.url },
  { id: "m-4429", title: "Cinematic Realism — Story Telling", ratio: 1936 / 1080, category: "storytelling", videoUrl: v4429.url, posterUrl: p4429.url },
  { id: "m-4745", title: "Company Promo I", ratio: 1080 / 1920, category: "promos", videoUrl: v4745.url, posterUrl: p4745.url },
  { id: "m-5217", title: "Company Promo II", ratio: 1620 / 1080, category: "promos", videoUrl: v5217.url, posterUrl: p5217.url },
  { id: "m-4744", title: "Company Promo III", ratio: 1080 / 1920, category: "promos", videoUrl: v4744.url, posterUrl: p4744.url },
  { id: "m-4693", title: "Company Promo IV", ratio: 1080 / 1936, category: "promos", videoUrl: v4693.url, posterUrl: p4693.url },
  { id: "m-5015", title: "Venue Photoshoot", ratio: 1080 / 1936, category: "shoots", videoUrl: v5015.url, posterUrl: p5015.url },
  { id: "m-room44reel", title: "Venue Promo", ratio: 1080 / 1920, category: "promos", videoUrl: vRoom44Reel.url, posterUrl: pRoom44Reel.url },
  { id: "m-4519", title: "Story Telling", ratio: 1930 / 1080, category: "storytelling", videoUrl: v4519.url, posterUrl: p4519.url },
  { id: "m-3761", title: "Futuristic Promo", ratio: 1080 / 1920, category: "promos", videoUrl: v3761.url, posterUrl: p3761.url },
  { id: "m-3694", title: "Modeling Photoshoot", ratio: 1440 / 2560, category: "shoots", videoUrl: v3694.url, posterUrl: p3694.url },
  { id: "m-evart1", title: "Event Artwork I", ratio: 1080 / 1920, category: "eventArtwork", videoUrl: vEvArt1.url, posterUrl: pEvArt1.url },
  { id: "m-evart2", title: "Event Artwork II", ratio: 1080 / 1920, category: "eventArtwork", videoUrl: vEvArt2.url, posterUrl: pEvArt2.url },
  { id: "m-evart3", title: "Event Artwork III", ratio: 1080 / 1920, category: "eventArtwork", videoUrl: vEvArt3.url, posterUrl: pEvArt3.url },
  { id: "m-evart4", title: "Event Artwork IV", ratio: 1080 / 1920, category: "eventArtwork", videoUrl: vEvArt4.url, posterUrl: pEvArt4.url },
  { id: "m-evart5", title: "Event Artwork V", ratio: 1080 / 1920, category: "eventArtwork", videoUrl: vEvArt5.url, posterUrl: pEvArt5.url },
  { id: "m-viralreel1", title: "Viral Reel I", ratio: 720 / 1280, category: "viral", videoUrl: vViralReel1.url, posterUrl: pViralReel1.url },
  { id: "m-viralreel2", title: "Viral Reel II", ratio: 720 / 1280, category: "viral", videoUrl: vViralReel2.url, posterUrl: pViralReel2.url },
  { id: "m-viralreel3", title: "Viral Reel III", ratio: 720 / 1280, category: "viral", videoUrl: vViralReel3.url, posterUrl: pViralReel3.url },
  { id: "m-avatar1", title: "Avatar I", ratio: 720 / 1280, category: "avatar", videoUrl: vAvatar1.url, posterUrl: pAvatar1.url },
  { id: "m-videoedits", title: "Video Edits", ratio: 1080 / 1920, category: "videoEdits", videoUrl: vVideoEdits.url, posterUrl: pVideoEdits.url },
  { id: "m-avatar2", title: "Avatar II", ratio: 720 / 1280, category: "avatar", videoUrl: vAvatar2.url, posterUrl: pAvatar2.url },
  { id: "m-avatar3", title: "Avatar III", ratio: 720 / 1280, category: "avatar", videoUrl: vAvatar3.url, posterUrl: pAvatar3.url },
  { id: "m-4062", title: "Cinematic Story Telling I", ratio: 2548 / 1080, category: "storytelling", videoUrl: v4062.url, posterUrl: p4062.url },
  { id: "m-4370", title: "Cinematic Story Telling II", ratio: 1914 / 1080, category: "storytelling", videoUrl: v4370.url, posterUrl: p4370.url },
  { id: "m-cinestory3", title: "Cinematic Story Telling III", ratio: 1280 / 720, category: "storytelling", videoUrl: vCineStory3.url, posterUrl: pCineStory3.url },
  { id: "m-cinestory4", title: "Cinematic Story Telling IV", ratio: 1280 / 720, category: "storytelling", videoUrl: vCineStory4.url, posterUrl: pCineStory4.url },
  { id: "m-cinestory5", title: "Cinematic Story Telling V", ratio: 1280 / 720, category: "storytelling", videoUrl: vCineStory5.url, posterUrl: pCineStory5.url },
  { id: "m-4378", title: "Instagram Virality — Cinematic Shoot", ratio: 1930 / 1080, category: "shoots", videoUrl: v4378.url, posterUrl: p4378.url },
  
];

export function getGroup(item: MediaItem): MediaGroup {
  return item.ratio >= 1 ? "cinematic" : "reels";
}

export const groupLabel: Record<MediaGroup, string> = {
  cinematic: "Cinematic",
  reels: "Reels",
};
