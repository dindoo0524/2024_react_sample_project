import React from "react";
import { BadgeColorType, BadgeInfo } from "./BadgeInfo";

interface BadgeProps {
  badgeInfo: BadgeInfo;
}

const Badge: React.FC<BadgeProps> = ({ badgeInfo }) => {
  const getColorClass = (): string => {
    switch (badgeInfo.badgeColorType) {
      case BadgeColorType.BLUE:
        return "bg-blue-500";
      case BadgeColorType.RED:
        return "bg-red-500";
      case BadgeColorType.GREEN:
        return "bg-green-500";
      case BadgeColorType.GRAY:
        return "bg-gray-500";
      default:
        return "";
    }
  };

  return (
    <div
      className={`${getColorClass()} px-10px py-4px inline-flex rounded-lg text-white border-gray-600 border-2`}
    >
      {badgeInfo.text}
    </div>
  );
};

export default Badge;
