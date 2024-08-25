import { FunctionComponent } from "react";

export type MessageExchangeType = {
  className?: string;
  yayImExcitedToMeetYouGuys?: string;
};

const MessageExchange: FunctionComponent<MessageExchangeType> = ({
  className = "",
  yayImExcitedToMeetYouGuys,
}) => {
  return (
    <div
      className={`w-[248px] flex flex-row items-start justify-start py-0 px-[17px] box-border text-center text-sm text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[7px]">
        <div className="flex flex-row items-start justify-end py-0 px-[7px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[26px] z-[1]">{`You `}</h3>
        </div>
        <div className="self-stretch rounded-6xs bg-white flex flex-row items-start justify-start pt-3 px-3.5 pb-[11px] whitespace-nowrap z-[1] text-3xs">
          <div className="h-[38px] w-[214px] relative rounded-6xs bg-white hidden" />
          <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap z-[2]">
            {yayImExcitedToMeetYouGuys}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageExchange;
