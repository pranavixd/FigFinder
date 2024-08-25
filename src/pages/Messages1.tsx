import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import InputContainer from "../components/InputContainer";
import FrameComponent4 from "../components/FrameComponent4";

const Messages1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMessages2ContainerClick = useCallback(() => {
    navigate("/messages-3");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/groups");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start gap-[78px] leading-[normal] tracking-[normal] cursor-pointer mq750:pl-5 mq750:pr-5 mq750:box-border mq675:gap-[39px] mq450:gap-[19px]"
      onClick={onMessages2ContainerClick}
    >
      <FrameComponent6 rectangle332="pending_109:653" />
      <section className="h-[919px] flex-1 flex flex-row items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[14.5px] max-w-[calc(100%_-_385px)] text-center text-base text-black font-poppins mq750:max-w-full mq675:pl-[14.5px] mq675:pr-[14.5px] mq675:box-border mq450:h-auto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[42px] max-w-[calc(100%_-_449px)] mq675:hidden mq675:max-w-full mq450:gap-[21px]">
          <div className="flex flex-row items-start justify-start py-0 px-[62px]">
            <h2 className="m-0 w-[38px] relative text-inherit tracking-[-0.02em] leading-[150%] font-normal font-[inherit] inline-block min-w-[38px]">
              Logo
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start max-w-full text-5xl">
            <div className="w-[372px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[118px] mq450:text-lgi mq450:leading-[29px]">{`Messages `}</h1>
            </div>
            <div className="self-stretch flex flex-row items-end justify-center gap-7 text-sm text-dimgray-200 mq450:flex-wrap">
              <div className="w-[158px] flex flex-col items-end justify-start min-w-[158px] mq450:flex-1">
                <div className="flex flex-row items-start justify-end py-0 px-[26px]">
                  <div
                    className="overflow-hidden flex flex-col items-start justify-start pt-7 px-4 pb-[3px] cursor-pointer z-[2]"
                    onClick={onFrameContainerClick}
                  >
                    <div className="h-[27px] flex flex-row items-start justify-start py-0 pl-[5px] pr-[9px] box-border">
                      <img
                        className="h-[29px] w-[31px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/materialsymbolslighthomeoutline.svg"
                      />
                    </div>
                    <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-normal font-[inherit] inline-block min-w-[41px]">
                      Home
                    </h3>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[151px] pb-[255px] pl-[59px] pr-[9px] relative gap-20 mt-[-65px] text-black mq750:pb-[166px] mq750:box-border mq450:pb-[108px] mq450:box-border">
                  <div className="flex flex-row items-start justify-start pt-0 px-[5px] pb-[7px]">
                    <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-normal font-[inherit] inline-block min-w-[64px] z-[1]">
                      Calendar
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[43px]">
                    <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                      <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-normal font-[inherit] inline-block min-w-[69px] z-[2]">
                        Messages
                      </h3>
                    </div>
                    <div
                      className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-6 pb-4 pl-2.5 pr-[30px] gap-[5px] cursor-pointer z-[1]"
                      onClick={onFrameContainerClick1}
                    >
                      <div className="flex flex-row items-start justify-end py-0 pl-[13px] pr-[11px]">
                        <img
                          className="h-[25px] w-[26px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/icbaselinegroup.svg"
                        />
                      </div>
                      <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-normal font-[inherit] inline-block min-w-[50px]">
                        Groups
                      </h3>
                    </div>
                  </div>
                  <div className="w-[174px] h-[832px] absolute !m-[0] bottom-[-62px] left-[-16px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 w-full h-full" />
                    <img
                      className="absolute top-[28px] left-[50px] w-[22px] h-[22px] overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/materialsymbolslighthomeoutline1.svg"
                    />
                    <img
                      className="absolute top-[585px] left-[70px] rounded-[50%] w-[71px] h-[70px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                    <img
                      className="absolute top-[457px] left-[96px] w-[22px] h-[22px] overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/ggmoreo.svg"
                    />
                    <div className="absolute top-[221px] left-[76px] rounded-xl bg-azure w-[70px] h-[75px] z-[1]">
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-azure w-full h-full hidden" />
                      <img
                        className="absolute top-[8px] left-[24px] w-[22px] h-[22px] overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src="/tablermessages.svg"
                      />
                    </div>
                    <img
                      className="absolute top-[122px] left-[101px] w-[22px] h-[22px] overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/simplelineiconscalender.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-normal font-[inherit] inline-block min-w-[55px] z-[1]">
                      Itinerary
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border min-w-[169px] text-left text-3xs text-darkgray-100">
                <div className="self-stretch flex flex-col items-start justify-start gap-[33px] mq450:gap-4">
                  <div className="self-stretch rounded-3xs bg-ghostwhite flex flex-row items-start justify-start pt-[15px] px-[7px] pb-[13px] gap-[17px]">
                    <div className="h-[47px] w-[260px] relative rounded-3xs bg-ghostwhite hidden" />
                    <img
                      className="h-[19px] w-[21px] relative overflow-hidden shrink-0 min-h-[19px] z-[1]"
                      alt=""
                      src="/materialsymbolslightsearch1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[86px] z-[1]">
                        Search for people
                      </div>
                    </div>
                  </div>
                  <div className="w-[231px] flex flex-row items-start justify-start py-0 px-[3px] box-border text-center text-mini text-black">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[9px]">
                      <div className="flex-1 flex flex-col items-end justify-start gap-[37px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                          <div className="self-stretch flex flex-row items-start justify-start gap-2">
                            <img
                              className="h-[50px] w-[54px] relative rounded-[50%] object-cover"
                              loading="lazy"
                              alt=""
                              src="/ellipse-13@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="flex flex-col items-start justify-start gap-[5px]">
                                <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[107px]">
                                  Travel Buddies
                                </h2>
                                <div className="flex flex-row items-start justify-start py-0 px-1.5 text-4xs text-yellowgreen">
                                  <div className="relative tracking-[-0.02em] leading-[14px] font-medium inline-block min-w-[65px]">
                                    Rahul is typing
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 pr-[27px] gap-[15px]">
                            <img
                              className="h-[50px] w-[54px] relative rounded-[50%] object-cover"
                              loading="lazy"
                              alt=""
                              src="/ellipse-11@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start gap-[5px]">
                              <h2 className="m-0 w-[53px] relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[53px]">
                                Simron
                              </h2>
                              <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-4xs text-yellowgreen">
                                <div className="relative tracking-[-0.02em] leading-[14px] font-medium inline-block min-w-[71px]">
                                  Simron is typing
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-1.5 pb-1.5 text-xs text-darkgray-100">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[34px]">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[76px]">
                                All Messages
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-mini text-black">
                              <div className="flex flex-col items-start justify-start gap-[42px]">
                                <img
                                  className="w-[49px] h-[46px] relative rounded-[50%] object-cover"
                                  loading="lazy"
                                  alt=""
                                  src="/ellipse-12@2x.png"
                                />
                                <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                                  <div className="flex flex-col items-start justify-start gap-[37px]">
                                    <img
                                      className="w-[49px] h-[46px] relative rounded-[50%] object-cover"
                                      loading="lazy"
                                      alt=""
                                      src="/ellipse-12-1@2x.png"
                                    />
                                    <img
                                      className="w-[49px] h-[46px] relative rounded-[50%] object-cover"
                                      loading="lazy"
                                      alt=""
                                      src="/ellipse-12-2@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start gap-[41px]">
                                <div className="flex flex-col items-end justify-start pt-0 pb-[7px] pl-0 pr-5 gap-[5px]">
                                  <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[40px]">
                                    Kevin
                                  </h2>
                                  <div className="relative text-4xs tracking-[-0.02em] leading-[14px] font-medium text-darkgray-100 inline-block min-w-[38px]">
                                    lets goo!
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                                  <div className="flex flex-col items-end justify-start gap-[3px]">
                                    <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[54px]">
                                      Rithesh
                                    </h2>
                                    <div className="relative text-4xs tracking-[-0.02em] leading-[14px] font-medium text-darkgray-100 inline-block min-w-[53px]">
                                      Dope Idea !!
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start py-0 pl-3 pr-0">
                                  <div className="flex flex-col items-start justify-start gap-[9px]">
                                    <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[23px]">
                                      Lily
                                    </h2>
                                    <div className="relative text-4xs tracking-[-0.02em] leading-[14px] font-medium text-darkgray-100 inline-block min-w-[83px]">
                                      Lets see about that
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[9px] pr-1">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[9px]">
                            <div className="flex flex-col items-start justify-start gap-8">
                              <img
                                className="w-[49px] h-[46px] relative rounded-[50%] object-cover"
                                loading="lazy"
                                alt=""
                                src="/ellipse-12-3@2x.png"
                              />
                              <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                                <img
                                  className="h-[46px] w-[49px] relative rounded-[50%] object-cover"
                                  loading="lazy"
                                  alt=""
                                  src="/ellipse-12-4@2x.png"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-0">
                                <img
                                  className="h-[46px] w-[49px] relative rounded-[50%] object-cover"
                                  loading="lazy"
                                  alt=""
                                  src="/ellipse-12-5@2x.png"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-8">
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[9px]">
                                <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[37px]">
                                  John
                                </h2>
                                <div className="relative text-4xs tracking-[-0.02em] leading-[14px] font-medium text-darkgray-100 inline-block min-w-[46px]">
                                  I will come
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-[3px]">
                                <div className="flex flex-col items-start justify-start gap-[9px]">
                                  <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[57px]">
                                    Naveen
                                  </h2>
                                  <div className="relative text-4xs tracking-[-0.02em] leading-[14px] font-medium text-darkgray-100 inline-block min-w-[84px]">
                                    Woahh ! Im excited
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 pl-2 pr-0">
                                <div className="flex flex-col items-start justify-start gap-[9px]">
                                  <div className="flex flex-row items-start justify-start py-0 px-px">
                                    <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[23px] font-medium font-[inherit] inline-block min-w-[55px]">
                                      William
                                    </h2>
                                  </div>
                                  <div className="relative text-4xs tracking-[-0.02em] leading-[14px] font-medium text-darkgray-100 inline-block min-w-[84px]">
                                    Woahh ! Im excited
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[47px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-5xs">
                        <div className="self-stretch flex flex-col items-end justify-start gap-[62px]">
                          <div className="flex flex-row items-start justify-end py-0 pl-2.5 pr-[5px]">
                            <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap inline-block min-w-[32px]">
                              9.20 PM
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-end justify-start gap-[118px]">
                            <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap inline-block min-w-[32px]">
                              9.00 PM
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[76px]">
                                <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[29px]">
                                  6:00PM
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[71px]">
                                    <div className="flex flex-row items-start justify-start py-0 pl-px pr-2">
                                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[28px]">
                                        7:00PM
                                      </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[77px]">
                                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[31px] whitespace-nowrap">
                                        6:00 AM
                                      </div>
                                      <div className="self-stretch flex flex-col items-start justify-start gap-[66px]">
                                        <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[31px] whitespace-nowrap">
                                          7:00 AM
                                        </div>
                                        <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px]">
                                          <div className="w-8 relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[32px] whitespace-nowrap">
                                            8:45 AM
                                          </div>
                                        </div>
                                        <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-0">
                                          <div className="w-8 relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[32px] whitespace-nowrap">
                                            8:45 AM
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mt-[-37px] h-[1017px] w-[3px] relative object-contain mq675:hidden"
          alt=""
        />
        <div className="w-[417px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_478px)] shrink-0 mq675:hidden mq675:max-w-full">
          <InputContainer />
        </div>
      </section>
      <FrameComponent4 propWidth="307px" ellipse18="/ellipse-18@2x.png" />
    </div>
  );
};

export default Messages1;
