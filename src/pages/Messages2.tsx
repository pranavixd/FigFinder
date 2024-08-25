import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent4 from "../components/FrameComponent4";

const Messages2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMessages3ContainerClick = useCallback(() => {
    navigate("/messages-4");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start gap-[78px] leading-[normal] tracking-[normal] cursor-pointer mq675:gap-[39px] mq825:pl-5 mq825:pr-5 mq825:box-border mq450:gap-[19px]"
      onClick={onMessages3ContainerClick}
    >
      <FrameComponent6 rectangle332="pending_119:1069" />
      <section className="h-[919px] flex-1 flex flex-row items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[14.5px] max-w-[calc(100%_-_385px)] mq675:pl-[14.5px] mq675:pr-[14.5px] mq675:box-border mq825:max-w-full mq450:h-auto">
        <FrameComponent3 />
        <img
          className="mt-[-37px] h-[1017px] w-[3px] relative object-contain mq675:hidden"
          alt=""
        />
        <FrameComponent7 />
      </section>
      <FrameComponent4 propWidth="353px" ellipse18="/ellipse-18@2x.png" />
    </div>
  );
};

export default Messages2;
