// App.js
import React from 'react';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Dashboard>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to Your Dashboard
        </h1>
        
        {/* Your dashboard content goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Card 1</h3>
            <p className="text-gray-600">Dashboard content goes here.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Card 2</h3>
            <p className="text-gray-600">More dashboard content.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Card 3</h3>
            <p className="text-gray-600">Additional information.</p>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default App;