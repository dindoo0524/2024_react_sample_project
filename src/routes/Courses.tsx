import { useEffect, useState } from "react";
import MainPageLayout from "../components/Layouts/MainPageLayout";
import Course from "../components/Course/Course";
import { CourseInfo } from "../interface/Course";

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
