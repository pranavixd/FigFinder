import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/calender");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/groups");
  }, [navigate]);

  return (
    <div
      className={`w-[179px] flex flex-col items-start justify-start py-0 pl-0 pr-2.5 box-border gap-[30px] text-center text-base text-black font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[52px]">
        <div className="w-[38px] relative tracking-[-0.02em] leading-[150%] inline-block min-w-[38px]">
          Logo
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[76px] pb-[168px] pl-[43px] pr-[30px] relative gap-20 text-sm mq750:pt-[49px] mq750:pb-[109px] mq750:box-border">
        <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[21px] text-dimgray-200">
            <div className="flex-1 flex flex-col items-start justify-start gap-3.5">
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
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-black">
                <div
                  className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[22px] px-[3px] pb-[5px] gap-[7px] cursor-pointer z-[1]"
                  onClick={onFrameContainerClick}
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
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-px">
            <div
              className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-6 px-px pb-4 gap-2 cursor-pointer z-[1]"
              onClick={onFrameContainerClick1}
            >
              <div className="flex flex-row items-start justify-start py-0 px-5">
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/tablermessages.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[69px]">
                Messages
              </div>
            </div>
          </div>
          <div
            className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-6 pb-4 pl-4 pr-[30px] gap-[5px] cursor-pointer z-[1]"
            onClick={onFrameContainerClick2}
          >
            <div className="flex flex-row items-start justify-end py-0 pl-[13px] pr-[11px]">
              <img
                className="h-[25px] w-[26px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icbaselinegroup.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[50px]">
              Groups
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-10px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 w-full h-full" />
          <input
            className="m-0 absolute top-[90px] left-[34px] w-[22px] h-[22px] overflow-hidden z-[1]"
            type="checkbox"
          />
          <img
            className="absolute top-[622px] left-[52px] rounded-[50%] w-[71px] h-[70px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="absolute top-[519px] left-[80px] w-[22px] h-[22px] overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/ggmoreo.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[34px] z-[1]">
            More
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
