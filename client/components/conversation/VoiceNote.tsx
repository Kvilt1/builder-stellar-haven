import { useEffect, useRef, useState } from 'react';

/**
 * VoiceNote component
 *
 * This component renders a simple voice‑note message styled to match the rest
 * of the conversation UI.  The design borrows from Snapchat’s voice note
 * interface, which lets people press and hold a phone or microphone icon to
 * record a short audio note【271749874680501†L29-L34】.  When finished, the
 * message appears in the chat as a compact bubble containing a play/pause
 * control, a visual waveform and a timestamp【317224885717255†L46-L53】.  Audio
 * notes are meant for quick voice snippets when typing isn’t practical【909230124662262†L149-L154】.  This
 * implementation focuses on the playback experience within the chat, not on
 * recording.
 */

export interface VoiceNoteProps {
  /**
   * The URL for the audio file.  In a real application this might be
   * dynamically generated or stored on a CDN.
   */
  audioSrc: string;
  /**
   * The colour used to tint the sender’s messages.  This colour is applied
   * to the vertical highlight bar on the left of the bubble.
   */
  senderColor: string;
}

/**
 * Format a number of seconds as mm:ss.  Snapchat voice notes are typically
 * short, so hours are omitted.
 */
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VoiceNote({ audioSrc, senderColor }: VoiceNoteProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Set up event listeners on the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleLoaded = () => setDuration(audio.duration);
    const handleTime = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('timeupdate', handleTime);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('timeupdate', handleTime);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  /**
   * Toggle playback state.  If the audio is playing it will pause; otherwise it
   * will start from the current position.  On iOS devices the first play
   * requires a user gesture, but this handler is bound to a button click so
   * that constraint is satisfied.
   */
  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        /* silence any exceptions, e.g. autoplay restrictions */
      });
    }
  };

  /**
   * Generate a simple pseudo‑waveform.  Snapchat’s voice bubbles display a
   * waveform representing the recorded audio, which provides a quick visual
   * sense of the message length.  Here we create a repeating pattern of
   * vertical bars of varying heights.  You could replace this with a more
   * sophisticated waveform derived from the audio data.
   */
  const barCount = 20;
  const barHeights = Array.from({ length: barCount }, (_, i) => {
    // Create a wave pattern that rises and falls
    const progress = i / (barCount - 1);
    const sineValue = Math.sin(progress * Math.PI);
    // scale between 30% and 100% of the max height
    return 0.3 + 0.7 * sineValue;
  });

  // Calculate playback progress for the active waveform overlay
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="relative flex items-center bg-white border"
      style={{
        borderColor: '#E1E1E1',
        borderRadius: 2,
        height: 56,
        minHeight: 56,
        maxWidth: 438,
        width: '100%',
      }}
    >
      {/* Highlight bar on the left to indicate the sender colour */}
      <div
        style={{
          width: 1.5,
          height: '100%',
          backgroundColor: senderColor,
          borderRadius: '2px 0 0 2px',
        }}
      />
      {/* Play/Pause button */}
      <button
        onClick={togglePlayback}
        className="ml-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        style={{ backgroundColor: '#F2F2F2' }}
      >
        {isPlaying ? (
          // pause icon
          <svg width="12" height="12" viewBox="0 0 20 20" fill="#16191C">
            <rect x="5" y="3" width="3" height="14" />
            <rect x="12" y="3" width="3" height="14" />
          </svg>
        ) : (
          // play icon
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#16191C">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        )}
      </button>
      {/* Waveform container */}
      <div className="mx-3 flex-1 relative h-8 flex items-center overflow-hidden">
        {/* Background bars */}
        <div className="absolute inset-0 flex items-end justify-between" style={{ pointerEvents: 'none' }}>
          {barHeights.map((h, idx) => (
            <span
              key={idx}
              style={{
                width: `${100 / barCount}%`,
                height: `${h * 100}%`,
                backgroundColor: '#E5E7EB', // light gray for background bars
                display: 'block',
                borderRadius: 1,
              }}
            />
          ))}
        </div>
        {/* Foreground progress overlay */}
        <div
          className="absolute inset-0 flex items-end justify-between"
          style={{ pointerEvents: 'none', overflow: 'hidden', width: `${progressPercent}%` }}
        >
          {barHeights.map((h, idx) => (
            <span
              key={idx}
              style={{
                width: `${100 / barCount}%`,
                height: `${h * 100}%`,
                backgroundColor: '#16191C', // dark colour for played bars
                display: 'block',
                borderRadius: 1,
              }}
            />
          ))}
        </div>
      </div>
      {/* Timestamp */}
      <span
        className="mr-3 text-sm"
        style={{ fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 500, color: '#16191C' }}
      >
        {formatTime(currentTime)} / {formatTime(duration || 0)}
      </span>
      {/* Hidden audio element for playback */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
    </div>
  );
}
