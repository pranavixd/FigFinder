import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  ellipse18?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  propWidth,
  ellipse18,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[307px] bg-gray-100 flex flex-col items-start justify-start pt-[51px] px-[22px] pb-12 box-border gap-[19px] z-[1] text-center text-lg text-black font-poppins mq825:hidden mq825:pt-[33px] mq825:pb-[31px] mq825:box-border ${className}`}
    >
      <div
        className="w-[353px] h-[1036px] relative bg-gray-100 hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div className="flex flex-row items-start justify-start py-0 px-[50px] text-xl">
        <div className="flex flex-col items-start justify-start gap-[18px]">
          <div className="flex flex-row items-start justify-start py-0 pl-[15px] pr-[18px]">
            <img
              className="h-[108px] w-[110px] relative rounded-[50%] object-cover z-[2]"
              loading="lazy"
              alt=""
              src={ellipse18}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] z-[2] mq450:text-base mq450:leading-[24px]">
              Travel Buddies
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-[21px] text-4xs text-darkgray-100">
              <div className="relative tracking-[-0.02em] leading-[14px] font-medium inline-block min-w-[104px] z-[2]">
                Travel explore the world
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3.5 pl-[7px] pr-2">
        <div className="flex-1 flex flex-row items-start justify-between gap-5">
          <div className="w-[130px] flex flex-col items-start justify-start gap-[42px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[83px] z-[2]">{`Members `}</h1>
              <button className="cursor-pointer [border:none] py-0 pl-[5px] pr-0 bg-[transparent] flex flex-row items-start justify-start">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[11px]">
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <img
                      className="w-[11px] h-[11px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <h2 className="m-0 relative text-mini tracking-[-0.02em] leading-[23px] font-medium font-poppins text-darkgray-100 text-center inline-block min-w-[103px] z-[2]">
                    Add Members
                  </h2>
                </button>
              </button>
            </div>
            <div className="w-[115px] flex flex-row items-start justify-start py-0 px-1 box-border text-mini">
              <div className="flex-1 flex flex-col items-end justify-start gap-[26px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[27px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
                      <img
                        className="h-[38px] w-10 relative rounded-[50%] object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/ellipse-24@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                        <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[53px] z-[2]">
                          Simron
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="flex flex-row items-start justify-start gap-[9px]">
                        <img
                          className="h-[37px] w-[42px] relative rounded-[50%] object-cover z-[2]"
                          loading="lazy"
                          alt=""
                          src="/ellipse-12-6@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[40px] z-[2]">
                            Kevin
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[13px]">
                  <img
                    className="h-[38px] w-[38px] relative rounded-[50%] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/ellipse-22@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[54px] z-[2]">
                      Rithesh
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <img
              className="w-[22.1px] h-[11.2px] relative overflow-hidden shrink-0 object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/weuiarrowoutlined1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[22px] h-[22px] relative overflow-hidden shrink-0 hidden" />
      <div className="overflow-hidden flex flex-col items-end justify-start pt-[7px] pb-[11px] pl-[11px] pr-[93px] gap-[34px] z-[2]">
        <div className="flex flex-row items-start justify-end py-0 pl-0 pr-1">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[115px]">{`Attachments `}</h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-[7px] text-smi">
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="flex flex-col items-end justify-start gap-[37px]">
              <img
                className="w-[22px] h-[21px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/carbondocument.svg"
              />
              <div className="flex flex-col items-end justify-start gap-[46px]">
                <img
                  className="w-[23px] h-[21px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/arcticonshuaweiphotos.svg"
                />
                <div className="flex flex-col items-start justify-start gap-9">
                  <img
                    className="w-[22px] h-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/arcticonsvideosummarizer.svg"
                  />
                  <img
                    className="w-[21px] h-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/dashiconsadminlinks.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[21.7px]">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[20px] font-medium font-[inherit] inline-block min-w-[74px]">
                Documents
              </h3>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 text-3xs text-darkgray-100">
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap inline-block min-w-[96px]">
                  129 Files 375 Videos
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px]">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                  <h3 className="m-0 w-11 relative text-inherit tracking-[-0.02em] leading-[20px] font-medium font-[inherit] inline-block min-w-[44px]">
                    Photos
                  </h3>
                </div>
                <div className="relative text-3xs tracking-[-0.02em] leading-[150%] font-medium text-darkgray-100 whitespace-pre-wrap inline-block min-w-[96px]">
                  129 Files 375 Videos
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px]">
              <div className="flex flex-col items-start justify-start gap-1.5">
                <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                  <h3 className="m-0 w-11 relative text-inherit tracking-[-0.02em] leading-[20px] font-medium font-[inherit] inline-block min-w-[44px]">
                    Videos
                  </h3>
                </div>
                <div className="relative text-3xs tracking-[-0.02em] leading-[150%] font-medium text-darkgray-100 whitespace-pre-wrap inline-block min-w-[96px]">
                  129 Files 375 Videos
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-0">
              <div className="flex flex-col items-start justify-start gap-3">
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[20px] font-medium font-[inherit] inline-block min-w-[31px]">
                  Links
                </h3>
                <div className="relative text-3xs tracking-[-0.02em] leading-[150%] font-medium text-darkgray-100 whitespace-pre-wrap inline-block min-w-[96px]">
                  129 Files 375 Videos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
