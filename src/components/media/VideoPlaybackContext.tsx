import { createContext, useCallback, useContext, useMemo, useRef } from "react";

type Registry = Map<string, () => void>;

type VideoPlaybackValue = {
  register: (id: string, pause: () => void) => () => void;
  notifyPlaying: (id: string) => void;
  notifyStopped: (id: string) => void;
};

const VideoPlaybackContext = createContext<VideoPlaybackValue | null>(null);

/** Ensures only one video plays at a time within this subtree. */
export function VideoPlaybackProvider({ children }: { children: React.ReactNode }) {
  const registry = useRef<Registry>(new Map());
  const current = useRef<string | null>(null);

  const register = useCallback((id: string, pause: () => void) => {
    registry.current.set(id, pause);
    return () => {
      registry.current.delete(id);
      if (current.current === id) current.current = null;
    };
  }, []);

  const notifyPlaying = useCallback((id: string) => {
    const prev = current.current;
    if (prev && prev !== id) registry.current.get(prev)?.();
    current.current = id;
  }, []);

  const notifyStopped = useCallback((id: string) => {
    if (current.current === id) current.current = null;
  }, []);

  const value = useMemo(
    () => ({ register, notifyPlaying, notifyStopped }),
    [register, notifyPlaying, notifyStopped],
  );

  return (
    <VideoPlaybackContext.Provider value={value}>
      {children}
    </VideoPlaybackContext.Provider>
  );
}

export function useVideoPlayback() {
  return useContext(VideoPlaybackContext);
}
