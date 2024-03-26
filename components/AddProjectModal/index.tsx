// AddProjectModal.tsx
import React, { Dispatch, SetStateAction, useState } from "react";
import { XCircle } from "lucide-react";
import Modal from "../shared/modal";
import SharingOptions from "./SharingOptions";

interface AddProjectModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({
    isOpen,
    setIsOpen,
}) => {
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [privacy, setPrivacy] = useState("public");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ projectName, description, privacy });
    // Handle project creation logic here
  };

  return (
      <Modal showModal={isOpen} setShowModal={setIsOpen}>
          <form
              onSubmit={handleSubmit}
              className="container lg:w-1/2 mx-auto  space-y-4 rounded-lg bg-gray-50 p-5 lg:p-10 dark:bg-gradient-to-b dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-800 dark:shadow-inner dark:shadow-neutral-700"
          >
              <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add New Project</h2>
                  <button
                      onClick={() => setIsOpen(false)}
                      type="button"
                      className="text-gray-500 hover:text-red-500"
                  >
            <XCircle size={24} />
          </button>
        </div>
        <div>
                  <label
                      htmlFor="projectName"
                      className="block text-sm font-medium dark:text-gray-200"
                  >
            Project Name
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
                      className="mt-1 block w-full rounded-md  border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800"
            required
          />
        </div>
        <div>
                  <label
                      htmlFor="description"
                      className="block text-sm font-medium dark:text-gray-200"
                  >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800"
            rows={4}
            required
          ></textarea>
        </div>
              <SharingOptions link={`${process.env.VERCEL}/project/${projectName}`} />
              <div className="mt-4 flex justify-end">
          <button
            type="submit"
                      className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Project
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
