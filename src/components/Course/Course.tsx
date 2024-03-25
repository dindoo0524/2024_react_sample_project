import { Link } from "react-router-dom";
import {
  formattedCouresPrice,
  PriceFormatType,
} from "../../utils/priceFormatter";
import { AiFillStar } from "react-icons/ai";
import { CourseInfo } from "../../interface/Course";

interface CourseProps {
  course: CourseInfo;
}

const Course = ({ course }: CourseProps) => {
  // reviewRate를 소수점 한 자리까지 반올림하여 문자열로 변환
  const formattedReviewRate = course.reviewRate.toFixed(1);

  // 가격 format 처리
  const formattedPrice = formattedCouresPrice(course);

  return (
    <div className="w-1/4 px-8px relative">
      <div
        className="h-[180px] bg-cover rounded-[12px]"
        style={{
          backgroundImage: `url(${course.imageUrl})`,
        }}
      ></div>
      <div className="py-10px">
        <p className="text-20px font-semibold">{course.title}</p>
        <ul>
          {course.teachers.map((teacher, index) => (
            <li key={index}>(강사) {teacher.nickname}</li>
          ))}
        </ul>
        {formattedPrice.type === PriceFormatType.DISCOUNT ? (
          <div className="flex items-center">
            <span className="text-red-500 text-20px font-bold">
              {formattedPrice.discountPercent}%
            </span>
            <span className="line-through text-gray-400">
              {formattedPrice.originalPrice}
            </span>
          </div>
        ) : null}
        <div>
          {formattedPrice.type === PriceFormatType.DISCOUNT
            ? formattedPrice.originalPrice
            : null}
        </div>
        <div
          className={`text-20px font-bold ${
            formattedPrice.type === PriceFormatType.FREE ? "text-primary" : ""
          }`}
        >
          {formattedPrice.type === PriceFormatType.FREE
            ? "무료"
            : formattedPrice.type === PriceFormatType.DISCOUNT
            ? formattedPrice.discountPrice
            : formattedPrice.originalPrice}
        </div>
        <div className="flex items-center">
          <AiFillStar className="text-yellow-400 text-20px" />
          {formattedReviewRate} ({course.reviewCount})
        </div>
      </div>
      <Link
        to={`/classes/${course.courseSeq}`}
        className="absolute top-0 bottom-0 left-0 right-0"
      ></Link>
    </div>
  );
};

export default Course;
