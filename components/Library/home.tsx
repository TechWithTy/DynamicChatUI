import React from "react";
import { Info, Users, FileText, Image, PlusCircle } from "lucide-react";
import ImageCard from "./card";
interface Item {
  title: string;
  description: string;
}

interface CardRowProps {
  rowName: string;
  items: Item[];
}

const CardRow: React.FC<CardRowProps> = ({ rowName, items }) => {
  return (
    <div className="text-white">
      {/* Row Title and Info icon */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-bold">{rowName}</h2>
        <button>
          <Info size={24} className="text-gray-400 hover:text-gray-200" />
        </button>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <ImageCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrls={[
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
            ]}
            commentCount={12} // Placeholder count
            userCount={27} // Placeholder count
          />
        ))}
      </div>
    </div>
  );
};

interface Row {
  name: string;
  items: Item[];
}

interface DynamicGridProps {
  data: Row[];
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ data }) => {
  return (
    <div className="bg-gray-900 p-8">
      {data.map((row, index) => (
        <CardRow key={index} rowName={row.name} items={row.items} />
      ))}
    </div>
  );
};

export default DynamicGrid;
