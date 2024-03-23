import React from "react";
import { Users, MessageCircle } from "lucide-react";

interface ImageCardProps {
  title: string;
  description: string;
  imageUrls: string[]; // Array of image URLs for thumbnails
  commentCount: number;
  userCount: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageUrls,
  commentCount,
  userCount,
}) => {
  return (
    <div className="space-y-4 rounded-lg bg-gray-800 p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="flex -space-x-4 overflow-hidden">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            className="h-16 w-full min-w-[4rem] rounded-lg object-cover"
            src={url}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-400">
          <img
            className="mr-2 h-8 w-8 rounded-full border-2 border-gray-700 object-cover"
            src="https://via.placeholder.com/32" // Placeholder avatar image
            alt="User avatar"
          />
          <Users size={20} className="mr-2" />
          {userCount}
        </div>
        <div className="flex items-center text-gray-400">
          <MessageCircle size={20} className="mr-2" />
          {commentCount}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
