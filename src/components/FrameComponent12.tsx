import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFindTheGroupsClick = useCallback(() => {
    navigate("/dashboard-options");
  }, [navigate]);

  return (
    <header
      className={`w-[1197px] flex flex-row items-start justify-end py-0 px-6 box-border max-w-full text-center text-base text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
        <div className="w-[38px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
          <div className="self-stretch relative tracking-[-0.02em] leading-[150%] inline-block min-w-[38px] whitespace-nowrap">
            Logo
          </div>
        </div>
        <div className="w-[948px] flex flex-row items-start justify-start gap-24 max-w-full text-5xl mq725:gap-6 mq1000:gap-12">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[38px] max-w-full mq725:gap-[19px]">
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[85px] whitespace-nowrap">{`Groups `}</h1>
              </div>
              <div className="flex-1 rounded-11xl bg-white flex flex-row items-start justify-start pt-[17px] px-[30px] pb-[19px] box-border gap-[39px] max-w-full text-lg-5 text-lightgray mq450:gap-[19px] mq1000:hidden">
                <div className="h-16 w-[528px] relative rounded-11xl bg-white hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-[26px] h-6 relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/materialsymbolslightsearch.svg"
                  />
                </div>
                <div
                  className="relative tracking-[-0.02em] leading-[28px] whitespace-nowrap cursor-pointer z-[1] mq450:hidden"
                  onClick={onFindTheGroupsClick}
                >
                  Find the groups and friends
                </div>
              </div>
            </div>
          </div>
          <div className="w-[201px] flex flex-row items-start justify-start gap-[14.5px] text-3xs">
            <div className="h-[23px] w-[26px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellowgreen w-full h-full z-[1]" />
              <div className="absolute top-[4px] left-[9px] tracking-[-0.02em] leading-[150%] inline-block min-w-[7px] z-[2]">
                5
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="self-stretch h-[66px] relative">
                <div className="absolute top-[0px] left-[0px] w-[67px] flex flex-row items-start justify-start">
                  <div className="h-[66px] flex-1 relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                    <img
                      className="absolute top-[18px] left-[19px] w-[29px] h-[29px] overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/materialsymbolslightnotificationsoutline.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[2px] left-[48px] w-[27px] h-[23px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellowgreen w-full h-full z-[2]" />
                  <div className="absolute top-[4px] left-[6px] tracking-[-0.02em] leading-[150%] inline-block min-w-[16px] z-[3]">
                    10+
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start relative">
                <div className="h-[66px] w-[calc(100%_-_4px)] absolute !m-[0] top-[0px] right-[4px] left-[0px] rounded-[50%] bg-white" />
                <img
                  className="h-[70px] w-[71px] relative rounded-[50%] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent12;
