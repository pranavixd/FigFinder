import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent9 from "../components/FrameComponent9";

const Calender: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-row items-end justify-between pt-[33px] pb-0 pl-0 pr-10 box-border leading-[normal] tracking-[normal] gap-5 text-center text-base text-black font-poppins mq1050:pl-5 mq1050:pr-5 mq1050:pb-5 mq1050:box-border">
      <section className="h-[873.1px] w-[1087px] absolute !m-[0] top-[-36px] right-[0px] bg-white border-darkgray-200 border-[1px] border-solid box-border" />
      <img
        className="h-[674px] w-1.5 absolute !m-[0] bottom-[8px] left-[585px] object-contain z-[1]"
        loading="lazy"
        alt=""
      />
      <div className="h-px w-[1081px] absolute !m-[0] top-[211px] right-[6px] border-darkgray-200 border-t-[1px] border-solid box-border z-[2]" />
      <img
        className="h-[5px] w-[1096px] absolute !m-[0] top-[322px] right-[-9px] object-contain z-[2]"
        alt=""
      />
      <div className="h-px w-[1080px] absolute !m-[0] right-[-2px] bottom-[371px] border-darkgray-200 border-t-[1px] border-solid box-border z-[2]" />
      <div className="h-px w-[1088px] absolute !m-[0] right-[-1px] bottom-[225px] border-darkgray-200 border-t-[1px] border-solid box-border z-[2]" />
      <div className="flex flex-row items-end justify-start gap-[65px] min-w-[456px] max-w-full mq450:gap-8 mq450:flex-wrap mq1050:flex-1">
        <div className="w-[179px] flex flex-col items-start justify-start gap-[30px] min-w-[179px] mq450:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[62px]">
            <div className="w-[38px] relative tracking-[-0.02em] leading-[150%] inline-block min-w-[38px]">
              Logo
            </div>
          </div>
          <FrameComponent9 />
        </div>
        <div className="h-[783px] flex flex-col items-end justify-start pt-0 px-0 pb-[745px] box-border gap-[63px] min-w-[212px] text-[25px] lg:pb-[484px] lg:box-border mq450:flex-1 mq750:pb-[315px] mq750:box-border">
          <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[39px]">
            <div className="relative tracking-[-0.02em] leading-[38px] font-medium whitespace-pre-wrap shrink-0 z-[1] mq450:text-xl mq450:leading-[30px]">
              January 2024
            </div>
          </div>
          <div className="w-[153px] h-[806.1px] flex flex-row items-start justify-between py-0 pl-5 pr-0 box-border shrink-0 gap-5">
            <img
              className="h-[673.7px] w-px relative object-contain z-[1]"
              loading="lazy"
              alt=""
            />
            <img
              className="h-[806.1px] w-[2.4px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-[791.9px] w-[526.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[23.1px] min-w-[526.5px] max-w-full mq450:h-auto mq450:pl-[23.1px] mq450:pr-[23.1px] mq450:box-border mq1050:flex-1">
        <div className="h-[904.3px] w-[161px] flex flex-row items-end justify-start mq450:hidden">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch h-[791px] flex flex-col items-start justify-start pt-0 px-0 pb-[749px] box-border gap-[87px] lg:pb-[487px] lg:box-border mq750:pb-[317px] mq750:box-border">
              <Button
                className="self-stretch h-[42px] shrink-0 z-[1]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "14",
                  background: "#e1f3f4",
                  borderRadius: "12px",
                  "&:hover": { background: "#e1f3f4" },
                  height: 42,
                }}
              >
                Today
              </Button>
              <div className="h-[764.3px] flex flex-row items-start justify-start py-0 px-5 box-border shrink-0">
                <div className="self-stretch w-px relative border-darkgray-200 border-r-[1px] border-solid box-border shrink-0 z-[1]" />
              </div>
            </div>
          </div>
          <div className="h-[765.3px] w-px relative border-darkgray-200 border-r-[1px] border-solid box-border z-[1]" />
        </div>
        <div className="h-[791.9px] flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[750.4px] box-border gap-[108.4px] max-w-[calc(100%_-_184px)] lg:pb-[488px] lg:box-border mq450:h-auto mq450:gap-[54px] mq450:max-w-full mq750:pb-[317px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[18.2px] shrink-0 mq450:flex-wrap">
            <Button
              className="h-[41.5px] flex-[0.6724] min-w-[105px] z-[1] mq450:flex-1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "14",
                background: "#e1f3f4",
                borderRadius: "12px",
                "&:hover": { background: "#e1f3f4" },
                height: 41.5,
              }}
            >
              Month view
            </Button>
            <Button
              className="h-[41.5px] flex-1 min-w-[105px] z-[1]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "14",
                background: "#89eaef",
                borderRadius: "12px",
                "&:hover": { background: "#89eaef" },
                height: 41.5,
              }}
            >
              Add event
            </Button>
          </div>
          <div className="w-[314.5px] h-[645px] flex flex-row items-start justify-center py-0 px-5 box-border shrink-0">
            <div className="self-stretch w-[126px] flex flex-row items-start justify-between shrink-0 gap-5">
              <div className="self-stretch flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="w-px flex-1 relative border-darkgray-200 border-r-[1px] border-solid box-border z-[1]" />
              </div>
              <div className="self-stretch w-px relative border-darkgray-200 border-r-[1px] border-solid box-border z-[3]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
