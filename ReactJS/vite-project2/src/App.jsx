import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home Page</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center my-8">
          <h2 className="text-4xl font-bold mb-4">Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Single User</h4>
              <p>$10/month</p>
              <p>10GB Storage</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">Start Trial</button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Double User</h4>
              <p>$20/month</p>
              <p>20GB Storage</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">Start Trial</button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Triple User</h4>
              <p>$30/month</p>
              <p>30GB Storage</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">Start Trial</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Home Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;