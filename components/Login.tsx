import React from 'react';

const Login = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;