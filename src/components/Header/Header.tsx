import { Link } from "react-router-dom";

interface Navigator {
  title: string;
  path: string;
}

const Header = () => {
  const navigators: Navigator[] = [
    {
      title: "소개",
      path: "/about",
    },
    {
      title: "클래스",
      path: "/classes",
    },
    {
      title: "공지",
      path: "/notice",
    },
    {
      title: "나의 강의실",
      path: "/mypage",
    },
  ];

  return (
    <header className="flex justify-between py-40px px-[100px]">
      <Link to="/">
        <h1 className="font-mono font-bold text-[40px] mr-[100px]">
          JOYFUL CODING ❤️
        </h1>
      </Link>
      <nav>
        <ul className="flex text-20px">
          {navigators.map((navigator, index) => (
            <li
              className={`py-10px px-20px ${
                index === 3 ? "text-orange-500" : ""
              }`}
              key={index}
            >
              <Link to={navigator.path}>{navigator.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
