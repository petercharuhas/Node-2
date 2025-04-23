import React from 'react';
import TimeConverter from './components/TimeConverter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Timeword</h1>
          <p className="text-blue-100 mt-1">Convert time to natural language</p>
        </div>
        <div className="p-8">
          <TimeConverter />
        </div>
      </div>
      
      <footer className="mt-10 text-center text-gray-500 text-sm">
        <p>© 2025 Timeword · All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;