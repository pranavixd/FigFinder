import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";

export type HomeButtonType = {
  className?: string;
};

const HomeButton: FunctionComponent<HomeButtonType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/calender");
  }, [navigate]);

  const onFrameImageClick = useCallback(() => {
    navigate("/groups");
  }, [navigate]);

  return (
    <div
      className={`ml-[-62px] w-[179px] rounded-xl bg-gray-200 flex flex-col items-start justify-start pt-[76px] pb-[53px] pl-[52px] pr-[30px] box-border gap-[26px] text-center text-sm text-dimgray-200 font-poppins mq750:pt-[49px] mq750:pb-[34px] mq750:box-border ${className}`}
    >
      <div className="w-[179px] h-[745px] relative rounded-xl bg-gray-200 hidden" />
      <div className="w-[77px] flex flex-row items-start justify-start py-0 px-px box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-3.5">
          <div className="flex flex-row items-start justify-start relative">
            <input
              className="!m-[0] h-[22px] w-[22px] absolute top-[14px] left-[-19px] overflow-hidden shrink-0 z-[1]"
              type="checkbox"
            />
            <div className="rounded-xl bg-azure flex flex-col items-start justify-start pt-4 px-3.5 pb-[11px] z-[2]">
              <div className="w-[70px] h-[75px] relative rounded-xl bg-azure hidden" />
              <div className="h-[27px] flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5 box-border">
                <img
                  className="h-[29px] w-[31px] relative overflow-hidden shrink-0 z-[3]"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslighthomeoutline.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[41px] z-[4]">
                Home
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-black">
            <div
              className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[22px] px-[3px] pb-[5px] gap-[7px] cursor-pointer z-[1]"
              onClick={onFrameContainerClick1}
            >
              <div className="flex flex-row items-start justify-start py-0 pl-[21px] pr-[23px]">
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/simplelineiconscalender.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[64px]">
                Calendar
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent
        onBottomNavIconClick={onFrameContainerClick}
        tablermessages="/tablermessages.svg"
        propWidth="22px"
        messages="Messages"
        propMinWidth="69px"
      />
      <div className="flex flex-row items-start justify-start pt-0 pb-[17px] pl-[7px] pr-0">
        <img
          className="h-[91px] w-[90px] relative overflow-hidden shrink-0 object-contain cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/frame-7@2x.png"
          onClick={onFrameImageClick}
        />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[22px] pb-[19px] text-black">
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/ggmoreo.svg"
            />
          </div>
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[34px] z-[1]">
            More
          </div>
        </div>
      </div>
      <img
        className="w-[71px] h-[70px] relative rounded-[50%] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
    </div>
  );
};

export default HomeButton;
