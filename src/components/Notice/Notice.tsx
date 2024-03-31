import { NoticeInfo } from "../../interface/Notice";
import { formattedDateTime } from "../../utils/dateTimeFormatter";
import { extractTextFromHTML } from "../../utils/extractTextFromHTML";
import Badge from "../Common/Badge/Badge";
import { BadgeColorType, BadgeInfo } from "../Common/Badge/BadgeInfo";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";

interface NoticeProps {
  notice: NoticeInfo;
}

const Notice = ({ notice }: NoticeProps) => {
  const badgeInfo: BadgeInfo = notice.isImportant
    ? {
        badgeColorType: BadgeColorType.RED,
        text: "중요",
      }
    : {
        badgeColorType: BadgeColorType.BLUE,
        text: "일반",
      };

  const contentText = extractTextFromHTML(notice.content);

  return (
    <div className="p-20px relative bg-gray-100 mb-10px rounded-lg">
      <Badge badgeInfo={badgeInfo}></Badge>
      <p className="font-bold text-20px py-20px">{notice.title}</p>
      <p className="line-clamp-3 text-gray-600 mb-40px">{contentText}</p>
      <div className="flex">
        <div className="flex items-center mr-20px">
          <AiOutlineClockCircle className="text-20px"></AiOutlineClockCircle>
          <span className="text-gray-600 ml-10px">
            {formattedDateTime(notice.createdAt, "YYYY.MM.DD HH:mm")}
          </span>
        </div>

        <div className="flex items-center">
          <AiOutlineEye className="text-20px"></AiOutlineEye>
          <span className="text-gray-600 ml-10px">{notice.viewCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Notice;
