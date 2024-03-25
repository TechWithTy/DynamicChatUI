// AddProjectModal.tsx
import React, { Dispatch, SetStateAction, useState } from 'react';
import { XCircle } from 'lucide-react';
import Modal from "../shared/modal";

interface AddProjectModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, setIsOpen }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('public');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ projectName, description, privacy });
    // Handle project creation logic here
  };

  return (
    <Modal
      showModal={isOpen}
      setShowModal={setIsOpen}
    >
          <form onSubmit={handleSubmit} className="space-y-4  container bg-gray-50 dark:bg-black p-5 lg:p-10 rounded-lg">
              <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add New Project</h2>
                  <button onClick={() => setIsOpen(false)} type="button" className="text-gray-500 hover:text-red-500">
            <XCircle size={24} />
          </button>
        </div>
        <div>
                  <label htmlFor="projectName" className="block text-sm font-medium dark:text-gray-200">
            Project Name
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
                      className="mt-1 block w-full dark:bg-gray-800  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
                  <label htmlFor="description" className="block text-sm font-medium dark:text-gray-200">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border dark:bg-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>
        <fieldset className="space-y-2">
                  <legend className="text-sm font-medium dark:text-gray-200">Privacy</legend>
          <div className="flex items-center">
            <input
              id="public"
              type="radio"
              name="privacy"
              value="public"
              checked={privacy === 'public'}
              onChange={() => setPrivacy('public')}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
                      <label htmlFor="public" className="ml-2 block text-sm dark:text-gray-200">
              Public
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="private"
              type="radio"
              name="privacy"
              value="private"
              checked={privacy === 'private'}
              onChange={() => setPrivacy('private')}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
                      <label htmlFor="private" className="ml-2 block text-sm dark:text-gray-200">
              Private
            </label>
          </div>
        </fieldset>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Project
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
