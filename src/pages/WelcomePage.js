import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-10">
      <h1 className="text-5xl font-bold mb-10 text-center drop-shadow-lg">🎯 FocusMate</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
        <button
          onClick={() => navigate('/focus')}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Focus Mode
        </button>
        <button
          onClick={() => navigate('/distraction')}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Distraction Check
        </button>
        <button
          onClick={() => navigate('/rewards')}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Reward System
        </button>
        <button
          onClick={() => navigate('/challenge')}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Study Challenge
        </button>
        <button
          onClick={() => navigate('/analytics')}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Analytics
        </button>
        <button
          onClick={() => navigate('/settings')}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
