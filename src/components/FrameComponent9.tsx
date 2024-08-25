import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onMessagesIconContainerClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/groups");
  }, [navigate]);

  return (
    <div
      className={`self-stretch rounded-xl bg-gray-200 flex flex-col items-start justify-start pt-[76px] pb-[53px] pl-[34px] pr-[30px] gap-[45px] text-center text-sm text-black font-poppins mq750:pt-[49px] mq750:pb-[34px] mq750:box-border ${className}`}
    >
      <div className="w-[179px] h-[745px] relative rounded-xl bg-gray-200 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start gap-0.5">
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
          <img
            className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/materialsymbolslighthomeoutline1.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[26px]">
          <div className="w-[67px] flex flex-row items-start justify-start pt-0 px-[13px] pb-[15px] box-border text-dimgray-200">
            <div className="h-12 flex-1 relative">
              <img
                className="absolute top-[0px] left-[5px] w-[31px] h-[29px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/materialsymbolslighthomeoutline.svg"
              />
              <div className="absolute top-[27px] left-[0px] tracking-[-0.02em] leading-[150%] inline-block min-w-[41px] z-[1]">
                Home
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <div className="rounded-xl bg-azure flex flex-col items-start justify-start pt-3 pb-[13px] pl-1.5 pr-0 gap-[7px] z-[1]">
              <div className="w-[70px] h-[75px] relative rounded-xl bg-azure hidden" />
              <div className="flex flex-row items-start justify-start py-0 px-[21px]">
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/simplelineiconscalender.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[64px] z-[2]">
                Calendar
              </div>
            </div>
          </div>
          <FrameComponent1
            onFrameContainerClick1={onMessagesIconContainerClick}
            icbaselineGroup="/tablermessages.svg"
            propWidth="22px"
            groups="Messages"
            propMinWidth="69px"
          />
          <FrameComponent
            onBottomNavIconClick={onFrameContainerClick}
            tablermessages="/icbaselinegroup.svg"
            propWidth="26px"
            messages="Groups"
            propMinWidth="50px"
          />
          <div className="flex flex-row items-start justify-start py-0 px-4">
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
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-[26px]">
        <img
          className="h-[70px] w-[71px] relative rounded-[50%] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent9;
