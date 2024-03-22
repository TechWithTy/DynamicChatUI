import Image from "next/image";
import React from "react";

// Define the types for the user props
interface UserProps {
    user: {
        firstName: string;
        lastName: string;
        email: string;
        image?: string;
    };
    isOnline: boolean;
}

// UserIndicator component
const UserIcon: React.FC<UserProps> = ({ user, isOnline }) => {
    return (
        <div className="relative flex items-center space-x-3">
            {/* User image or placeholder */}
            <div className="relative">
                {user.image ? (
                    <Image
                        width={30}
                        height={30}
                        src={
                            user.image ??
                            `https://api.dicebear.com/7.x/initials/svg?seed=${user.firstName}&backgroundColor=7cb342,c0aede,b6e3f4,8e24aa,d81b60,d1d4f9&backgroundType=gradientLinear`
                        }
                        alt={`${user.firstName} ${user.lastName}`}
                        className="h-12 w-12 rounded-full"
                    />
                ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                        {user.firstName[0].toUpperCase()}
                        {user.lastName[0].toUpperCase()}
                    </div>
                )}
                <div className="absolute -right-1 -top-1 bg-gray-300  p-1 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span
                        className={` block h-3 w-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"
                            }`}
                    />
                </div>
            </div>

            {/* Online indicator */}
        </div>
    );
};

export default UserIcon;
