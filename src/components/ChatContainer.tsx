import { FunctionComponent } from "react";

export type ChatContainerType = {
  className?: string;
};

const ChatContainer: FunctionComponent<ChatContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[385px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full text-center text-xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-6 max-w-full">
        <img
          className="h-[61px] w-[63px] relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src="/ellipse-14@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[178px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] z-[1] mq450:text-base mq450:leading-[24px]">
                Travel Buddies
              </h1>
              <div className="flex flex-row items-start justify-start py-0 px-2 text-4xs text-yellowgreen">
                <div className="relative tracking-[-0.02em] leading-[14px] font-medium inline-block min-w-[65px] z-[1]">
                  Rahul is typing
                </div>
              </div>
            </div>
            <div className="w-[85px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <img
                className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/group-16.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
