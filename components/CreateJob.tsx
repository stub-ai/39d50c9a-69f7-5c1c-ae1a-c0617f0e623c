import React from 'react';

const CreateJob = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">Create Job</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Job name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateJob;