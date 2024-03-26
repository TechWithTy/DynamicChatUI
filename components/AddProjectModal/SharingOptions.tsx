'use client'
import { ChevronDown, Globe, Globe2Icon, LinkIcon } from "lucide-react";
import React, { useState } from 'react';

const SharingOptions = ({ link }: { link: string }) => {

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link).then(() => {
      // Display a success message or handle copied state
      console.log('Link copied to clipboard!');
    });
  };

  return (
    <div className="dark:bg-neutral-950 text-white p-5 lg:p-10 flex justify-between items-center rounded-md space-x-4">
      <div className="flex items-center">
        <Globe className="h-5 w-5 text-lime-500" />
        <span className="ml-2">Anyone with the link</span>
      </div>
      <div className="px-4 flex items-center gap-4">
        <div className="flex gap-4 text-lg">
          <select id="privacy" name="privacy" className="dark:bg-neutral-950 border-0 outline-0 ring-0 rounded cursor-pointer text-sm py-1 px-2">
            <option value="view">can view</option>
            <option value="edit">can edit</option>
          </select>
          <label htmlFor="privacy" className="dark:text-lime-500 cursor-pointer"><ChevronDown /></label>
        </div>
        <button
          type="button"
          onClick={handleCopyLink}
          className="ml-auto dark:shadow-inner dark:shadow-neutral-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 hover:bg-gray-500 rounded py-1 px-3 flex items-center"
        >
          <LinkIcon className="h-4 w-4 text-gray-300" />
          <span className="ml-2 text-sm">Copy Link</span>
        </button>
      </div>
    </div>
  );
};

export default SharingOptions;
