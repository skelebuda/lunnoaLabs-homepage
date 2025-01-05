import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AudioPlayer = ({ className , audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);
  
  // Define the paths
  const audioPath1 = '/audio/demographics.mp3';
  const audioPath2 = '/audio/clientData.mp3';
  const audioPath3 = '/audio/marlon.mp3';

  // Determine which audio path to use
  let audioPath = audioPath3; // default value
  
  console.log(audioFile)
  if (audioFile === 1) {  
    audioPath = audioPath1;
  } else if (audioFile === 2) {
    audioPath = audioPath2;
  } else if (audioFile === 3) {
    audioPath = audioPath3;
  }

  useEffect(() => {
    // Verify the audio file is accessible
    fetch(audioPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Audio file is accessible');
      })
      .catch(error => {
        console.log('Error accessing audio file:', error);
        setError(error);
      });
  }, [audioPath]); // Add audioPath as dependency

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

  if (error) {
    console.error('Audio error state:', error);
  }

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
          Error loading audio
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;