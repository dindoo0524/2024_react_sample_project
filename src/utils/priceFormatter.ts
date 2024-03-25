import { CourseInfo } from "../interface/Course";

interface PriceFormat {
  type: PriceFormatType;
  originalPrice?: string;
  discountPrice?: string;
  discountPercent?: string;
}

export enum PriceFormatType {
  FREE,
  ORIGINAL,
  DISCOUNT,
}

export const formattedCouresPrice = (course: CourseInfo): PriceFormat => {
  if (course.price === 0) {
    return {
      type: PriceFormatType.FREE,
    };
  }

  if (course.discountPrice !== null && course.discountPercent !== null) {
    return {
      type: PriceFormatType.DISCOUNT,
      originalPrice: formattedPrice(course.price),
      discountPrice: formattedPrice(course.discountPrice),
      discountPercent: formattedPrice(course.discountPercent),
    };
  } else {
    return {
      type: PriceFormatType.ORIGINAL,
      originalPrice: formattedPrice(course.price),
    };
  }
};

const formattedPrice = (price: number): string => {
  return new Intl.NumberFormat("ko-KR", {}).format(price) + "원";
};
