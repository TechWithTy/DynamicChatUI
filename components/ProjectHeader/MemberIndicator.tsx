import Image from "next/image";
import React from 'react';

// Define the types for the user props
interface User {
    firstName?: string;
    lastName?: string;
    image?: string;
    isOnline: boolean;
}

interface MembersIndicatorProps {
    users: User[];
    additionalCount: number;
}

// MembersIndicator component
const MembersIndicator: React.FC<MembersIndicatorProps> = ({ users, additionalCount }) => {
    const displayedUsers = users.slice(0, 4).reverse(); // Reverse the users for display

    return (
        <div className="flex pl-4">
            {displayedUsers.map((user, index) => (
                <div
                    key={index}
                    className={`relative  rounded-2xl w-10 h-10 border-4 border-white dark:border-gray-800 ${index !== 0 ? '-ml-4' : ''}`}
                    style={{ zIndex: displayedUsers.length - index }} // Leftmost avatar will have the highest z-index
                >
                    <div className="overflow-clip h-full w-full rounded-2xl">
                        <Image
                            width={40}
                            height={40}
                            src={user.image ||
                                `https://api.dicebear.com/7.x/initials/svg?seed=${user.firstName}${user.lastName}&backgroundColor=7cb342,c0aede,b6e3f4,8e24aa,d81b60,d1d4f9&backgroundType=gradientLinear`
                            }
                            alt={`${user.firstName} ${user.lastName}`}
                            className=" h-full w-full"
                        />
                        {user.isOnline && (
                        <span className="absolute top-0 right-0 block rounded-full w-3 h-3 bg-green-500" />
                    )}
                    </div>
                    
                </div>
            ))}
            {additionalCount > 0 && (
                <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gray-300 dark:bg-gray-900 border-4 border-white dark:border-gray-800 -ml-4">
                    +{additionalCount}
                </div>
            )}
        </div>
    );
};

export default MembersIndicator;
