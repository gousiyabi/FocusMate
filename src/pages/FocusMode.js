// src/pages/FocusMode.js
import React from 'react';

const FocusMode = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Stay Focused</h1>
      <p className="text-xl mb-6">Avoid distractions and crush your goals!</p>
      <div className="text-6xl font-mono mb-6">00:25:00</div>
      <button className="bg-white text-purple-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-200 transition">
        Start Focus Session
      </button>
    </div>
  );
};

export default FocusMode;
