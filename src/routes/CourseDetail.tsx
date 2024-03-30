import { useParams } from "react-router-dom";
import CourseDetailLayout from "../components/Layouts/CourseDetailLayout";
import { useEffect, useState } from "react";
import { formattedDateTime } from "../utils/dateTimeFormatter";
import RatingStar from "../components/RatingStar";
import { CourseInfo, CurriculumInfo } from "../interface/Course";
import CourseCurriculum from "../components/Course/CourseCurriculum";

interface CourseProps {
  course?: CourseInfo;
  curriculums: CurriculumInfo[];
}

const CourseDetail = () => {
  const [course, setCourse] = useState<CourseInfo>();
  const [curriculums, setCurriculums] = useState<CurriculumInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const { courseSeq } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseResponse, curriculumResponse] = await Promise.all([
          fetch(
            `https://dev-rest.liveklass.com/v1.0/channels/101/courses/${courseSeq}`
          ),
          fetch(
            `https://dev-rest.liveklass.com/v1.0/channels/101/courses/${courseSeq}/curriculums`
          ),
        ]);

        const courseData = await courseResponse.json();
        const curriculumData = await curriculumResponse.json();

        if (courseResponse.ok && curriculumResponse.ok) {
          setCourse(courseData.course);
          setCurriculums(curriculumData.list);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [courseSeq]);

  return (
    <CourseDetailLayout>
      CourseDetail For {courseSeq}
      {loading ? (
        <div>Loading..</div>
      ) : (
        <CourseDetailContent course={course} curriculums={curriculums} />
      )}
    </CourseDetailLayout>
  );
};

const CourseDetailContent = ({ course, curriculums }: CourseProps) => {
  const formattedReviewRate = course?.reviewRate.toFixed(1);

  return (
    <>
      <div
        className="h-[500px] bg-cover rounded-[12px]"
        style={{ backgroundImage: `url(${course?.imageUrl})` }}
      ></div>
      <p className="text-20px font-semibold mt-20px">
        모집기간 :{" "}
        {course?.payStartAt && course?.payEndAt
          ? formattedDateTime(course?.payStartAt, "YYYY년 M월 D일") +
            "~" +
            formattedDateTime(course?.payEndAt, "YYYY년 M월 D일")
          : "무제한"}
      </p>

      <div className="flex items-center my-20px">
        <span className="text-[30px] mr-10px">{formattedReviewRate}</span>
        <RatingStar rating={course?.reviewRate || 0} />
      </div>

      <div className="my-20px">
        <h4 className="font-bold text-[30px] mb-20px">클래스 소개</h4>
        <div
          dangerouslySetInnerHTML={{ __html: course?.introduction || "" }}
        ></div>
      </div>

      {/* TODO: 커리큘럼 작업 */}
      <div className="my-20px">
        <h4 className="font-bold text-[30px] mb-20px">커리큘럼</h4>
        {curriculums.map((curriculum, index) => (
          <CourseCurriculum curriculum={curriculum} />
        ))}
      </div>
    </>
  );
};

export default CourseDetail;
