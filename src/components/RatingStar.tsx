import { AiFillStar } from "react-icons/ai";

interface RatingStarProps {
  rating: number;
}

const RatingStar: React.FC<RatingStarProps> = ({ rating }) => {
  const roundedRating = Math.floor(rating);
  return (
    <div>
      <ul className="flex">
        {[...Array(roundedRating)].map((_, index) => (
          <AiFillStar
            key={index}
            className="text-[30px] text-yellow-300 mr-1"
          />
        ))}
        {[...Array(5 - roundedRating)].map((_, index) => (
          <AiFillStar key={index} className="text-[30px] text-gray-100 mr-1" />
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default RatingStar;
