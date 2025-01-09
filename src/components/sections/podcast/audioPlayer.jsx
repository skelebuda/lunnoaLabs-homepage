import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AudioPlayer = ({ className, profileId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);
  
  // Update audioPathMap to use numeric IDs
  const audioPathMap = {
    1: '/audio/demographics.mp3',
    2: '/audio/clientData.mp3',
    3: '/audio/marlon.mp3'
  };

  // Get audio path based on profile ID with fallback
  const audioPath = audioPathMap[profileId] || audioPathMap[3];

  useEffect(() => {

    
    // Verify the audio file is accessible
    const checkAudio = async () => {
      try {
        const response = await fetch(audioPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Audio file is accessible:', audioPath);
        setError(null);
      } catch (error) {
        console.error('Error accessing audio file:', error);
        setError(error);
      }
    };

    checkAudio();
  }, [audioPath, profileId]);

  const togglePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.error('Playback error:', err);
        setError(err);
      }
    }
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlayPause}
        className="h-12 w-12 rounded-full flex items-center justify-center"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6 ml-1" />
        )}
      </Button>
      
      <audio
        ref={audioRef}
        controls
        preload="auto"
        className="w-64"
        onError={(e) => {
          console.error('Audio element error:', e);
          setError(e);
        }}
      >
        <source 
          src={audioPath} 
          type="audio/mpeg"
          onError={(e) => {
            console.error('Source element error:', e);
            setError(e);
          }}
        />
        Your browser does not support the audio element.
      </audio>

      {error && (
        <div className="text-red-500">
          Error loading audio: Please check if file exists at {audioPath}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;