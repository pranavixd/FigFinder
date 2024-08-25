import { FunctionComponent } from "react";
import MessageExchange from "./MessageExchange";

export type ChatHistoryType = {
  className?: string;
};

const ChatHistory: FunctionComponent<ChatHistoryType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[452px] !m-[0] absolute h-full top-[0px] right-[228px] bottom-[0px] flex flex-col items-start justify-start pt-[174px] px-[55px] pb-[25px] box-border gap-[125px] max-w-full text-center text-4xs text-darkgray-100 font-poppins ${className}`}
    >
      <div className="w-[264px] flex flex-row items-start justify-start pt-0 px-0 pb-[324px] box-border gap-3.5">
        <div className="relative tracking-[-0.02em] leading-[14px] font-medium whitespace-pre-wrap inline-block min-w-[75px] z-[1]">{`Today, Aug  29th `}</div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="self-stretch h-px relative border-silver border-t-[1px] border-solid box-border z-[1]" />
        </div>
      </div>
      <MessageExchange yayImExcitedToMeetYouGuys="Yay ! I’m  excited to meet you guys" />
      <div className="w-full h-[1017px] absolute !m-[0] right-[0px] bottom-[-56px] left-[0px]">
        <img className="absolute top-[0px] left-[0px] w-full h-full" alt="" />
        <img
          className="absolute top-[694px] left-[295px] rounded-[50%] w-10 h-[38px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/ellipse-24@2x.png"
        />
        <img
          className="absolute top-[887px] left-[300px] rounded-[50%] w-10 h-[38px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/ellipse-24@2x.png"
        />
      </div>
      <MessageExchange yayImExcitedToMeetYouGuys=" I’m  excited to meet you Lily" />
    </div>
  );
};

export default ChatHistory;
