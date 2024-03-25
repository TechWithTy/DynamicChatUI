import React from "react";
import { MessageCircle, Users, Menu } from "lucide-react";
import Image from "next/image";

interface ImageCardProps {
  title: string;
  description: string;
  imageUrls: string[]; // Array of image URLs for thumbnails
  avatarUrls: string[]; // Array of avatar URLs
  commentCount: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageUrls,
  avatarUrls,
  commentCount,
}) => {
  return (
    <div className="relative space-y-4 rounded-lg bg-gray-800 p-4">
      <button className="absolute right-4 top-4">
        <Menu size={24} className="text-gray-400 hover:text-gray-200" />
      </button>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="flex justify-start space-x-2">
        {imageUrls.map((url, index) => (
          <Image
            width={150}
            height={150}
            key={index}
            className="h-16 w-1/3 rounded-lg object-cover"
            src={url}
            alt={`Thumbnail ${index + 1}`}
            style={{ maxWidth: "calc(33.333% - 0.5rem)" }} // Adjust based on the number of images and desired spacing
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center -space-x-2">
          {avatarUrls.slice(0, 3).map((url, index) => (
            <Image
              width={30}
              height={30}
              key={index}
              className="h-8 w-8 rounded-full border-2 border-gray-800 object-cover"
              src={url}
              alt={`Avatar ${index + 1}`}
              style={{ zIndex: avatarUrls.length - index }}
            />
          ))}
          {avatarUrls.length > 3 && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-xs text-white">
              +{avatarUrls.length - 3}
            </div>
          )}
          <div className="pl-2">
            <Users size={20} className="text-gray-400" />
          </div>
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
