import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">⚙️ Settings</h1>
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Theme</label>
          <select className="w-full p-2 border rounded-xl focus:outline-none">
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Notification Preference</label>
          <input type="checkbox" className="mr-2" /> Enable Reminders
        </div>
      </div>
    </div>
  );
};

export default Settings;

