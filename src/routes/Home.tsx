import joy from "../assets/images/joy_computer.png";
import TypingAnimation from "../components/Common/TypingAmination/TypingAnimation";

const Home = () => {
  return (
    <div className="text-center flex flex-col items-center my-[50px]">
      <div className="font-mono text-[50px] h-[80px]">
        <TypingAnimation fullText="Welcom to JOYFUL CODING ❤️"></TypingAnimation>
      </div>
      <img src={joy} alt="joy" />
    </div>
  );
};

export default Home;
