import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import ChatContainer from "../components/ChatContainer";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";

const Messages: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOptionBubbleClick = useCallback(() => {
    navigate("/messages-2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start gap-[78px] leading-[normal] tracking-[normal] text-center text-4xs text-darkgray-100 font-poppins mq675:gap-[39px] mq825:pl-5 mq825:pr-5 mq825:box-border mq450:gap-[19px]">
      <div className="h-full w-[452px] absolute !m-[0] top-[0px] right-[228px] bottom-[0px]">
        <div className="absolute top-[-42px] left-[0px] w-[452px] h-[1017px]">
          <img className="absolute top-[0px] left-[0px] w-full h-full" alt="" />
        </div>
        <div className="absolute top-[175px] left-[136px] border-silver border-t-[1px] border-solid box-border w-44 h-px z-[1]" />
        <div className="absolute top-[169px] left-[45px] tracking-[-0.02em] leading-[14px] font-medium whitespace-pre-wrap inline-block min-w-[75px] z-[1]">{`Today, Aug  29th `}</div>
      </div>
      <section className="h-[919px] flex-1 flex flex-row items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[14.5px] max-w-[calc(100%_-_385px)] text-left text-3xs text-black font-poppins mq675:pl-[14.5px] mq675:pr-[14.5px] mq675:box-border mq825:max-w-full mq450:h-auto">
        <FrameComponent3 />
        <img
          className="mt-[-37px] h-[1017px] w-[3px] relative object-contain mq675:hidden"
          alt=""
        />
        <div className="w-[417px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_478px)] shrink-0 mq675:hidden mq675:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-px w-[143px] absolute !m-[0] top-[130px] left-[9px] border-silver border-t-[1px] border-solid box-border z-[1]" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[116px] max-w-full mq450:gap-[58px]">
              <ChatContainer />
              <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[9px] max-w-full">
                <img
                  className="h-[39px] w-[39px] relative rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src="/ellipse-17@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[240px] max-w-full">
                  <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[3px] text-center text-sm">
                    <div className="flex flex-row items-start justify-start gap-4">
                      <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[47px]">{`James `}</h3>
                      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-5xs text-darkgray-100">
                        <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap inline-block min-w-[32px] z-[1]">
                          9.20 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[302px] flex flex-row items-start justify-start pt-0 pb-1 pl-0 pr-5 box-border">
                    <div className="flex-1 rounded-6xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-2 px-[11px] pb-[13px] z-[1]">
                      <div className="h-[66px] w-[282px] relative rounded-6xs bg-whitesmoke-100 hidden" />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium z-[2]">
                        Hi guys ! I am thinking of a trip how many are
                        interested let me know we will plan accordingly and
                        answer the poll we will decide
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-6xs bg-whitesmoke-100 flex flex-col items-start justify-start pt-2 px-[11px] pb-2.5 box-border gap-[7px] max-w-full z-[1]">
                    <div className="w-[369px] h-[85px] relative rounded-6xs bg-whitesmoke-100 hidden max-w-full" />
                    <div className="w-[260px] relative tracking-[-0.02em] leading-[150%] font-medium inline-block z-[2]">
                      Time to vote! 🗳️
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium inline-block max-w-full z-[2]">
                        Please cast your vote for our upcoming trip's dates and
                        activities. Your choices will help shape our travel
                        plans, so make sure to pick what works best for you!
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-6xs bg-whitesmoke-100 flex flex-col items-start justify-start pt-5 pb-[9px] pl-[25px] pr-[22px] box-border gap-[11px] max-w-full z-[1] text-4xs">
                    <div className="w-[369px] h-[150px] relative rounded-6xs bg-whitesmoke-100 hidden max-w-full" />
                    <div className="relative text-3xs tracking-[-0.02em] leading-[150%] font-medium z-[2]">
                      Which destination should we choose for our upcoming trip?
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                      <div className="flex flex-col items-start justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-2.5">
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <div
                              className="w-[15px] h-3.5 relative rounded-[50%] bg-gainsboro cursor-pointer z-[2]"
                              onClick={onOptionBubbleClick}
                            />
                          </div>
                          <div className="relative tracking-[-0.02em] leading-[14px] inline-block min-w-[21px] z-[2]">
                            Paris
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[9px]">
                          <div className="h-3.5 w-[15px] relative rounded-[50%] bg-gainsboro z-[2]" />
                          <div className="relative tracking-[-0.02em] leading-[14px] inline-block min-w-[28px] z-[2]">
                            Japan
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                      <div className="flex-1 flex flex-row items-end justify-between gap-5">
                        <div className="flex flex-col items-start justify-start gap-4">
                          <div className="flex flex-row items-start justify-start gap-[9.7px]">
                            <div className="h-3.5 w-[15px] relative rounded-[50%] bg-gainsboro shrink-0 z-[2]" />
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="relative tracking-[-0.02em] leading-[14px] inline-block min-w-[32px] shrink-0 z-[2]">
                                London
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-2 text-5xs text-darkgray-100">
                            <div className="h-[15px] w-[38px] relative">
                              <img
                                className="absolute top-[0px] left-[0px] rounded-[50%] w-[15px] h-[15px] object-cover z-[2]"
                                alt=""
                                src="/visual-indicators@2x.png"
                              />
                              <img
                                className="absolute top-[0px] left-[11px] rounded-[50%] w-3.5 h-[15px] object-cover z-[3]"
                                alt=""
                                src="/visual-indicators1@2x.png"
                              />
                              <img
                                className="absolute top-[0px] left-[22px] rounded-[50%] w-4 h-[15px] object-cover z-[4]"
                                loading="lazy"
                                alt=""
                                src="/ellipse-29@2x.png"
                              />
                            </div>
                            <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[58px] z-[2]">
                              Total Votes : 20
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1 text-5xs">
                          <div className="rounded-8xs bg-paleturquoise flex flex-row items-start justify-start pt-1 pb-[3px] pl-5 pr-[19px] z-[2]">
                            <div className="h-[19px] w-[57px] relative rounded-8xs bg-paleturquoise hidden" />
                            <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[18px] z-[3]">
                              Vote
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
      </section>
      <FrameComponent4 ellipse18="/ellipse-18@2x.png" />
    </div>
  );
};

export default Messages;
