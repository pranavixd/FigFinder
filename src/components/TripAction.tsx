import { FunctionComponent } from "react";
import RectangleComponent from "./RectangleComponent";

export type TripActionType = {
  className?: string;
  rectangle320?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const TripAction: FunctionComponent<TripActionType> = ({
  className = "",
  rectangle320,
  image,
  image1,
  image2,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[13px] box-border max-w-full text-center text-xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start relative max-w-full">
        <h2 className="!m-[0] absolute top-[41px] left-[55px] text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[126px] mq450:text-base mq450:leading-[24px]">
          Create a Trip
        </h2>
        <RectangleComponent
          rectangle320={rectangle320}
          image={image}
          image1={image1}
          image2={image2}
        />
        <div className="w-[58px] h-[59px] absolute !m-[0] top-[29px] right-[15px]">
          <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-aliceblue w-[58px] h-[55px]" />
          <img
            className="absolute top-[0px] left-[17px] w-[12.8px] h-[12.8px] z-[6]"
            alt=""
            src="/vector-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default TripAction;
