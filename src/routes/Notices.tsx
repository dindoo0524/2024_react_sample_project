import { useEffect, useState } from "react";
import MainPageLayout from "../components/Layouts/MainPageLayout";
import { NoticeInfo } from "../interface/Notice";
import Notice from "../components/Notice/Notice";

const Notices = () => {
  const [notices, setNotices] = useState<NoticeInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices: () => Promise<void> = async () => {
    // const url =
    //   "https://dev-rest.liveklass.com/v2.0/channels/notices?channelSeq=101";
    const url =
      "https://rest.liveklass.com/v2.0/channels/notices?channelSeq=2089";
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      setNotices(data.list);
      setLoading(false);
    } else {
      setNotices([]);
    }
  };

  return (
    <div>
      <MainPageLayout title="공지" bgColor="bg-blue-400">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="mx-[-8px]">
            {notices.map((notice, index) => (
              <Notice notice={notice} key={index} />
            ))}
          </div>
        )}
      </MainPageLayout>
    </div>
  );
};

export default Notices;
