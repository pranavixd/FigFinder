import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/calender");
  }, [navigate]);

  return (
    <div
      className={`w-[169px] flex flex-col items-start justify-start pt-11 pb-[282px] pl-[41px] pr-[31px] box-border relative gap-[84px] text-center text-sm text-dimgray-200 font-poppins mq450:pt-5 mq450:pb-[119px] mq450:box-border mq1000:pt-[29px] mq1000:pb-[183px] mq1000:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
          <div className="flex flex-col items-end justify-start gap-[22px]">
            <div
              className="overflow-hidden flex flex-col items-start justify-start pt-7 px-4 pb-[3px] cursor-pointer z-[3]"
              onClick={onFrameContainerClick1}
            >
              <div className="h-[27px] flex flex-row items-start justify-start py-0 pl-[5px] pr-[9px] box-border">
                <img
                  className="h-[29px] w-[31px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslighthomeoutline.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[41px]">
                Home
              </div>
            </div>
            <div
              className="overflow-hidden flex flex-col items-start justify-start pt-[22px] px-[3px] pb-[5px] gap-[7px] cursor-pointer z-[1] text-black"
              onClick={onFrameContainerClick2}
            >
              <div className="flex flex-row items-start justify-start py-0 pl-[21px] pr-[23px]">
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/simplelineiconscalender.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[64px]">
                Calendar
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
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-1.5 text-black">
          <div className="rounded-xl bg-azure flex flex-col items-end justify-start pt-3.5 px-2.5 pb-2.5 gap-[5px] z-[1]">
            <div className="w-[70px] h-[75px] relative rounded-xl bg-azure hidden" />
            <div className="flex flex-row items-start justify-end py-0 pl-[13px] pr-[11px]">
              <img
                className="h-[25px] w-[26px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/icbaselinegroup.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[50px] z-[2]">
              Groups
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-10px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 w-full h-full" />
        <input
          className="m-0 absolute top-[70px] left-[34px] w-[22px] h-[22px] overflow-hidden z-[1]"
          type="checkbox"
        />
        <img
          className="absolute top-[729px] left-[59px] rounded-[50%] w-[71px] h-[70px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="absolute top-[499px] left-[80px] w-[22px] h-[22px] overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/ggmoreo.svg"
        />
        <div className="absolute top-[56px] left-[53px] rounded-xl bg-azure w-[70px] h-[75px] z-[2]" />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[13px] text-black">
        <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[55px] z-[1]">
          Itinerary
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
