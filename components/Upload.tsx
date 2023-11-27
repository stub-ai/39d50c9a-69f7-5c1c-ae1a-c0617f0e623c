import React from 'react';

const Upload = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">Upload File</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Select file</label>
          <input type="file" className="w-full p-2 border rounded" accept=".dxf,.pdf" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default Upload;