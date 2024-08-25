import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent1Type = {
  className?: string;
  icbaselineGroup?: string;
  groups?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onFrameContainerClick1?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  onFrameContainerClick1,
  icbaselineGroup,
  propWidth,
  groups,
  propMinWidth,
}) => {
  const icbaselineGroupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/groups");
  }, [navigate]);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-end justify-start pt-6 pb-4 pl-4 pr-[30px] gap-[5px] cursor-pointer z-[1] text-center text-sm text-black font-poppins ${className}`}
      onClick={onFrameContainerClick1}
    >
      <div className="flex flex-row items-start justify-end py-0 pl-[13px] pr-[11px]">
        <img
          className="h-[25px] w-[26px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={icbaselineGroup}
          style={icbaselineGroupIconStyle}
        />
      </div>
      <div
        className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[50px]"
        style={groupsStyle}
      >
        {groups}
      </div>
    </div>
  );
};

export default FrameComponent1;
