// src/pages/RewardSystem.js
import React from 'react';

const RewardSystem = () => {
  const rewards = [
    "🎉 You're doing amazing!",
    "💡 Every second you focus makes a difference!",
    "📈 Small steps = big results!",
    "🚀 Keep it up, future genius!",
    "🧠 Smart work always wins!",
  ];

  const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🌟 You Earned a Reward!</h1>
      <p className="text-2xl mb-6 text-center">{randomReward}</p>
      <img
        src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif"
        alt="Celebration"
        className="w-64 h-64 rounded-xl shadow-lg"
      />
      <p className="mt-6 text-md italic">Come back after your next challenge for more rewards!</p>
    </div>
  );
};

export default RewardSystem;
