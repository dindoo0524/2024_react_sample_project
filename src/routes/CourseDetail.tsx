import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { courseSeq } = useParams();

  return <div>CourseDetail For {courseSeq}</div>;
};

export default CourseDetail;
