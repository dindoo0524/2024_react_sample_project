import { useEffect, useState } from "react";
import MainPageLayout from "../components/Layouts/MainPageLayout";
import Course from "../components/Course/Course";

export interface CourseInfo {
  courseSeq: number;
  channelSeq: number;
  title: string;
  subTitle: string | null;
  categorySeq: number | null;
  categoryName: string | null;
  price: number;
  priceEx: number;
  discountPriceAmount: number | null;
  categoryTitle: string | null;
  publicCd: string;
  currency: string;
  userLimitTypeCd: string;
  payStartAt: string;
  payEndAt: string;
  maxUserCount: number | null;
  minUserCount: number | null;
  reviewRate: number;
  channelOrd: number;
  createdAt: string;
  linkPackage: boolean;
  reviewCount: number;
  materialPrice: number;
  materialPriceEx: number;
  imageUrl: string;
  attendCount: number;
  acceptCnt: number;
  acceptPercent: number;
  packageAttendCount: number;
  discountPercent: number | null;
  discountPercentEx: number;
  discountPrice: number | null;
  discountPriceEx: number | null;
  likeAt: string | null;
  vodDays: number;
  teachers: Teacher[];
  discountStartAt: string | null;
  discountEndAt: string | null;
  displayCurrency: string;
}

interface Teacher {
  userSeq: number;
  siteUserId: string | null;
  courseSeq: number;
  name: string;
  nickname: string;
  email: string;
  profileImageUrl: string;
  userTypeCd: string;
  publicTypeCd: number;
  publicText: string;
  isZoomHost: number;
}

const Courses = () => {
  const [courses, setCourses] = useState<CourseInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses: () => Promise<void> = async () => {
    const response = await fetch(
      "https://dev-rest.liveklass.com/v3.0/channels/101/courses?size=48"
    );
    const data = await response.json();
    if (response.ok) {
      setCourses(data.courses);
      setLoading(false);
    } else {
      setCourses([]);
    }
  };

  return (
    <div>
      <MainPageLayout title="클래스" bgColor="bg-purple-400">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-wrap mx-[-8px]">
            {courses.map((course, index) => (
              <Course course={course} key={index} />
            ))}
          </div>
        )}
      </MainPageLayout>
    </div>
  );
};

export default Courses;
