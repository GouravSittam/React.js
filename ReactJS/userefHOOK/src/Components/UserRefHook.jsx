import React, { useRef, useState } from 'react';

const UserRefHook = () => {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const mobileRef = useRef(null);

  const [message, setMessage] = useState('');

  const handleFocus = (ref) => {
    ref.current.focus();
    setMessage(`Input field ${ref.current.placeholder} is focused!`);
  };

  const handleClear = () => {
    nameRef.current.value = '';
    lastNameRef.current.value = '';
    cityRef.current.value = '';
    countryRef.current.value = '';
    mobileRef.current.value = '';
    setMessage('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Ref Hook</h2>
      <input ref={nameRef} type="text" placeholder="Name" className="border p-2 mb-2 w-full" />
      <input ref={lastNameRef} type="text" placeholder="Last Name" className="border p-2 mb-2 w-full" />
      <input ref={cityRef} type="text" placeholder="City" className="border p-2 mb-2 w-full" />
      <input ref={countryRef} type="text" placeholder="Country" className="border p-2 mb-2 w-full" />
      <input ref={mobileRef} type="text" placeholder="Mobile Number" className="border p-2 mb-4 w-full" />
      <div className="flex space-x-2">
        <button
          onClick={() => handleFocus(nameRef)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Focus Name
        </button>
        <button
          onClick={() => handleFocus(lastNameRef)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Focus Last Name
        </button>
        <button
          onClick={() => handleFocus(cityRef)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Focus City
        </button>
        <button
          onClick={() => handleFocus(countryRef)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Focus Country
        </button>
        <button
          onClick={() => handleFocus(mobileRef)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Focus Mobile
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear All
        </button>
      </div>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default UserRefHook;
