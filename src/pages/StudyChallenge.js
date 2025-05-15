import React, { useState } from 'react';

function StudyChallenge() {
  const [progress, setProgress] = useState(40); // Example progress

  const challenges = [
    { title: '📘 Pomodoro Session', description: 'Focus for 25 minutes without distractions.' },
    { title: '📵 No Phone Hour', description: 'Keep your phone away for 1 hour.' },
    { title: '📝 To-Do Crusher', description: 'Complete everything on today’s to-do list.' },
    { title: '🎧 Study with Music', description: 'Study with ambient or focus music.' },
    { title: '📚 Read 20 Pages', description: 'Read a chapter or 20 pages of a study book.' },
  ];

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">🎯 Study Challenge</h1>

      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Take on challenges that push you to stay consistent and focused. Track your progress and unlock rewards.
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-lg mb-8">
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-right mt-1 text-blue-600">{progress}% completed</p>
      </div>

      {/* Challenge cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-blue-50 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{challenge.title}</h2>
            <p className="text-gray-700">{challenge.description}</p>
            <button
              onClick={() => setProgress(progress + 10 <= 100 ? progress + 10 : 100)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
            >
              Start Challenge
            </button>
          </div>
        ))}
      </div>

      {/* Motivation */}
      <div className="text-center max-w-lg">
        <p className="italic text-gray-500">
          “Success is the sum of small efforts, repeated day in and day out.” – Robert Collier
        </p>
      </div>
    </div>
  );
}

export default StudyChallenge;
