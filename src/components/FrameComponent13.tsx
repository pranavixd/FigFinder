import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";

export type FrameComponent13Type = {
  className?: string;
  teenyiconsdownOutline?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent13: FunctionComponent<FrameComponent13Type> = ({
  className = "",
  propTop,
  propHeight,
  teenyiconsdownOutline,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const onTeenyiconsdownOutlineClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full h-full overflow-hidden text-center text-xl text-black font-poppins ${className}`}
      style={frameDivStyle}
    >
      <div className="absolute w-[calc(100%_-_21px)] top-[18px] right-[13px] left-[8px] rounded-3xl bg-white h-[279px]" />
      <h2 className="m-0 absolute top-[55px] left-[57px] text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] whitespace-pre-wrap z-[1] mq450:text-base mq450:leading-[24px]">
        Upcoming Travels
      </h2>
      <div className="absolute top-[108px] left-[43px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-[619px] h-[65px] hidden" />
      <div className="absolute top-[195px] left-[43px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-[619px] h-[65px] hidden" />
      <div className="absolute top-[51px] left-[717px] rounded-lg bg-white border-silver border-[1px] border-solid box-border w-[39px] h-[37px] hidden" />
      <img
        className="absolute top-[131px] left-[614px] w-[22px] h-[22px] overflow-hidden hidden"
        alt=""
        src="/simplelineiconscalender.svg"
      />
      <div className="absolute top-[214px] left-[92px] text-base tracking-[-0.02em] leading-[150%] hidden">
        Beach Getaway in Miami
      </div>
      <div className="absolute top-[215px] left-[476px] text-sm tracking-[-0.02em] leading-[150%] hidden">
        September 5, 2024
      </div>
      <img
        className="absolute top-[215px] left-[614px] w-[22px] h-[22px] overflow-hidden hidden"
        alt=""
        src="/simplelineiconscalender.svg"
      />
      <img
        className="absolute top-[59px] left-[725px] w-[22px] h-[22px] overflow-hidden hidden cursor-pointer"
        alt=""
        onClick={onTeenyiconsdownOutlineClick}
        src={teenyiconsdownOutline}
      />
    </div>
  );
};

export default FrameComponent13;
