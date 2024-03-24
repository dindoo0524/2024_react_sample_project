import { ReactNode } from "react";

interface MainPageLayoutProps {
  children: ReactNode;
  title: string;
  bgColor: string;
}

const MainPageLayout = ({ children, title, bgColor }: MainPageLayoutProps) => {
  return (
    <div>
      <div className={`h-[100px] ${bgColor}`}></div>
      <div className="py-20px">
        <h3 className="text-28px font-bold">{title}</h3>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default MainPageLayout;
