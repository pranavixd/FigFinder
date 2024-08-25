import { FunctionComponent } from "react";
import NavigationItem from "../components/NavigationItem";
import CardDetails from "../components/CardDetails";
import FrameComponent2 from "../components/FrameComponent2";

const Select1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-y-auto flex flex-row items-start justify-start pt-[54px] px-0 pb-2 box-border gap-3 leading-[normal] tracking-[normal] text-center text-base text-black font-poppins lg:flex-wrap">
      <div className="w-[169px] flex flex-col items-start justify-start gap-[30px]">
        <div className="flex flex-row items-start justify-start py-0 px-[52px]">
          <div className="w-[38px] relative tracking-[-0.02em] leading-[150%] inline-block min-w-[38px]">
            Logo
          </div>
        </div>
        <NavigationItem />
      </div>
      <main className="w-[1058px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start gap-0.5 max-w-full mq750:pl-0.5 mq750:pr-0.5 mq750:box-border">
          <CardDetails
            teenyiconsdownOutline="pending_I43:1842;9:202"
            propTop="0px"
            propHeight="100%"
            rectangle320="pending_I43:1889;9:426"
            image="/image-1@2x.png"
            image1="/image-2@2x.png"
            image2="/image-3@2x.png"
          />
          <FrameComponent2
            blankLineHeight="929px"
            blankLinePadding="2px 0px 0px"
            httpslottiefilescomanimat="/httpslottiefilescomanimationssunshowericonanimatedweathericonoy1mfkrgtf@2x.png"
            tripsSeparator="pending_43:1902"
          />
        </section>
      </main>
    </div>
  );
};

export default Select1;
