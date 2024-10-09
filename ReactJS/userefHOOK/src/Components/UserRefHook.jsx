import React, { useRef } from 'react';

const UserRefHook = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Ref Hook</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleFocus}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Focus Input
      </button>
    </div>
  );
};

export default UserRefHook;