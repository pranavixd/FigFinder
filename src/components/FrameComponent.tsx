import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
  tablermessages?: string;
  messages?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onBottomNavIconClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  onBottomNavIconClick,
  tablermessages,
  propWidth,
  messages,
  propMinWidth,
}) => {
  const tablermessagesIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const messagesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const navigate = useNavigate();

  const onBottomNavIconClick1 = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-px text-center text-sm text-black font-poppins ${className}`}
    >
      <div
        className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-6 px-px pb-4 gap-2 cursor-pointer z-[1]"
        onClick={onBottomNavIconClick}
      >
        <div className="flex flex-row items-start justify-start py-0 px-5">
          <img
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={tablermessages}
            style={tablermessagesIconStyle}
          />
        </div>
        <div
          className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[69px]"
          style={messagesStyle}
        >
          {messages}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
