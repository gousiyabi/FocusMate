import React, { useEffect, useRef, useState } from 'react';

const DistractionCheck = () => {
  const videoRef = useRef(null);
  const [cameraError, setCameraError] = useState(false);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // ✅ Wait for video metadata to load before trying to play
          videoRef.current.onloadedmetadata = () => {
            videoRef.current
              .play()
              .catch((err) => console.error('Video play error:', err));
          };
        }
      } catch (error) {
        console.error('Camera access denied or not available:', error);
        setCameraError(true);
      }
    };

    getCamera();
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Distraction Detection</h1>

      {cameraError ? (
        <p className="text-red-500">
          Unable to access camera. Please grant permission or check your device settings.
        </p>
      ) : (
        <div className="flex justify-center">
          <video ref={videoRef} autoPlay muted className="w-full max-w-md rounded shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default DistractionCheck;
