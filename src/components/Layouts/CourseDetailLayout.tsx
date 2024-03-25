import { ReactNode } from "react";

interface CourseDetailLayoutProps {
  children: ReactNode;
}

const CourseDetailLayout = ({ children }: CourseDetailLayoutProps) => {
  return (
    <div className="max-w-[900px] mx-auto py-[80px]">
      <div>{children}</div>
    </div>
  );
};

export default CourseDetailLayout;
