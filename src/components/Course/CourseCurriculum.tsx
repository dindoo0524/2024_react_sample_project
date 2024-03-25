import {
  AiOutlineWifi,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlinePlaySquare,
  AiOutlineStar,
} from "react-icons/ai";
import { CurriculumInfo } from "../../interface/Course";
import React from "react";

interface CurriculumInfoType {
  iconComponent: JSX.Element;
  type: string;
}

interface CourseCurriculumProps {
  curriculum: CurriculumInfo;
}

enum CurriculumType {
  LIVE = "00",
  VIDEO = "02",
  OFFLINE = "04",
  DIGITAL = "06",
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ curriculum }) => {
  let curriculumInfo: CurriculumInfoType;
  switch (curriculum.curriculumTypeCd) {
    case CurriculumType.LIVE:
      curriculumInfo = {
        iconComponent: <AiOutlineWifi />,
        type: "Live",
      };
      break;
    case CurriculumType.VIDEO:
      curriculumInfo = {
        iconComponent: <AiOutlinePlaySquare />,
        type: "동영상타입",
      };
      break;
    case CurriculumType.OFFLINE:
      curriculumInfo = {
        iconComponent: <AiOutlineCalendar />,
        type: "오프라인타입",
      };
      break;
    case CurriculumType.DIGITAL:
      curriculumInfo = {
        iconComponent: <AiOutlineBook />,
        type: "디지털타입",
      };
      break;
    default:
      curriculumInfo = {
        iconComponent: <AiOutlineStar />,
        type: "알 수 없는 타입",
      };
      break;
  }
  return (
    <div className="flex p-12px items-center">
      <div className="text-[30px] text-primary mr-20px">
        {curriculumInfo.iconComponent}
      </div>
      <div>
        <div className="font-bold">{curriculumInfo.type}</div>
        <div>{curriculum.title}</div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
