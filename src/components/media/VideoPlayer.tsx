import { useCallback, useEffect, useRef, useState } from "react";
import {
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  title: string;
  tag: string;
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
}

/** In-place video player. Never autoplays; user must press play. */
export function VideoPlayer({
  title,
  tag,
  videoUrl,
  posterUrl,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setControlsVisible(false);
    }, 2600);
  }, []);

  useEffect(() => () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    setStarted(true);
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
    showControls();
  }, [showControls]);

  const seekBy = (secs: number) => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = Math.max(0, Math.min(el.duration || 0, el.currentTime + secs));
    showControls();
  };

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    showControls();
  };

  const overlayVisible = !playing;

  return (
    <div
      className={cn(
        "group/player relative h-full w-full overflow-hidden rounded-xl bg-[hsl(var(--surface-elevated))]",
        className,
      )}
      onMouseMove={showControls}
      onMouseLeave={() => playing && setControlsVisible(false)}
    >
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          onPlay={() => {
            setPlaying(true);
            showControls();
          }}
          onPause={() => {
            setPlaying(false);
            setControlsVisible(true);
          }}
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
          onClick={togglePlay}
        />
      ) : (
        // Placeholder block — no media yet.
        <div className="flex h-full w-full items-center justify-center bg-muted/30">
          <span className="px-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Placeholder
          </span>
        </div>
      )}

      {/* Poster / idle overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-background/80 via-background/10 to-background/40 p-4 motion-safe:transition-opacity motion-safe:duration-300",
          overlayVisible
            ? "opacity-100"
            : "opacity-0 group-hover/player:opacity-100",
        )}
      >
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {tag}
        </span>
        <p className="text-sm font-medium text-foreground">{title}</p>
      </div>

      {/* Center play button */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={started ? "Play" : "Play"}
          className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur motion-safe:transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Play className="size-6" aria-hidden="true" />
        </button>
      )}

      {/* Control bar */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-background/85 px-3 py-2 backdrop-blur motion-safe:transition-opacity motion-safe:duration-300",
          controlsVisible || !playing
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={progress}
          aria-label="Seek"
          onChange={(e) => {
            const el = videoRef.current;
            if (el) el.currentTime = Number(e.target.value);
            setProgress(Number(e.target.value));
          }}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-muted accent-[hsl(var(--brand-primary))]"
        />
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => seekBy(-10)}
            aria-label="Rewind 10 seconds"
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => seekBy(10)}
            aria-label="Forward 10 seconds"
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCw className="size-4" />
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="ml-auto inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
