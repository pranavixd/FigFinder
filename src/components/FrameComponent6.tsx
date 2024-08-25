import { FunctionComponent } from "react";

export type FrameComponent6Type = {
  className?: string;
  rectangle332?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
  rectangle332,
}) => {
  return (
    <div
      className={`w-[452px] !m-[0] absolute h-full top-[0px] right-[228px] bottom-[0px] flex flex-col items-start justify-start pt-[174px] px-[55px] pb-[216px] box-border gap-[449px] max-w-full text-center text-4xs text-darkgray-100 font-poppins ${className}`}
    >
      <div className="w-[264px] flex flex-row items-start justify-start gap-3.5">
        <div className="relative tracking-[-0.02em] leading-[14px] font-medium whitespace-pre-wrap inline-block min-w-[75px] z-[1]">{`Today, Aug  29th `}</div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="self-stretch h-px relative border-silver border-t-[1px] border-solid box-border z-[1]" />
        </div>
      </div>
      <div className="w-full h-[1017px] absolute !m-[0] right-[0px] bottom-[-56px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          alt=""
          src={rectangle332}
        />
        <img
          className="absolute top-[694px] left-[295px] rounded-[50%] w-10 h-[38px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/ellipse-24@2x.png"
        />
      </div>
      <div className="w-[248px] flex flex-row items-start justify-start py-0 px-[17px] box-border text-sm text-black">
        <div className="flex-1 flex flex-col items-end justify-start gap-[7px]">
          <div className="flex flex-row items-start justify-end py-0 px-[7px]">
            <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[26px] z-[1]">{`You `}</h3>
          </div>
          <div className="self-stretch rounded-6xs bg-white flex flex-row items-start justify-start pt-3 px-3.5 pb-[11px] whitespace-nowrap z-[1] text-3xs">
            <div className="h-[38px] w-[214px] relative rounded-6xs bg-white hidden" />
            <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap z-[2]">
              Yay ! I’m excited to meet you guys
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
