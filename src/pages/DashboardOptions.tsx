import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent13 from "../components/FrameComponent13";
import { useNavigate } from "react-router-dom";
import RectangleComponent from "../components/RectangleComponent";
import FrameComponent2 from "../components/FrameComponent2";

const DashboardOptions: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLondonTitleClick = useCallback(() => {
    navigate("/select-2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-aliceblue overflow-y-auto flex flex-row items-start justify-start pt-[54px] px-0 pb-2 box-border gap-0.5 leading-[normal] tracking-[normal] text-left text-17xl text-black font-poppins lg:flex-wrap">
      <div className="h-[67px] w-[728px] relative rounded-11xl bg-white hidden max-w-full" />
      <div className="h-24 w-[704px] relative tracking-[-0.02em] leading-[160%] font-light whitespace-pre-wrap hidden shrink-0 max-w-full mq450:text-3xl mq450:leading-[35px] mq1050:text-10xl mq1050:leading-[46px]">
        Welcbeaches,ome back, Pranavi Ready to plan t aure ?
      </div>
      <div
        className="h-[182px] w-[622px] relative overflow-y-auto shrink-0 hidden max-w-full text-center text-base"
        data-scroll-to="frameContainer"
      >
        <div className="absolute top-[11px] left-[0px] w-full h-[65px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full" />
          <div className="absolute top-[21px] left-[65px] tracking-[-0.02em] leading-[150%]">
            Beach Getaway in Miami
          </div>
          <div className="absolute top-[24px] left-[432px] text-sm tracking-[-0.02em] leading-[150%] inline-block min-w-[126px]">
            September 5, 2024
          </div>
          <img
            className="absolute top-[21px] left-[570px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="/simplelineiconscalender.svg"
          />
          <input
            className="m-0 absolute top-[19px] left-[18px] w-[26px] h-[26px] overflow-hidden"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[98px] left-[0px] w-full h-[65px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full" />
          <div className="absolute top-[21px] left-[65px] tracking-[-0.02em] leading-[150%]">
            Beach Getaway in Miami
          </div>
          <div className="absolute top-[24px] left-[432px] text-sm tracking-[-0.02em] leading-[150%] inline-block min-w-[126px]">
            September 5, 2024
          </div>
          <img
            className="absolute top-[21px] left-[570px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="/simplelineiconscalender.svg"
          />
          <img
            className="absolute top-[21px] left-[21px] w-[26px] h-[26px] overflow-hidden"
            alt=""
            src="/phclocklight-1.svg"
          />
        </div>
        <div className="absolute top-[53px] left-[536px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-[139px] h-11" />
        <div className="absolute top-[191px] left-[0px] w-full h-[65px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full" />
          <div className="absolute top-[21px] left-[65px] tracking-[-0.02em] leading-[150%]">
            Beach Getaway in Miami
          </div>
          <div className="absolute top-[24px] left-[432px] text-sm tracking-[-0.02em] leading-[150%]">
            September 5, 2024
          </div>
          <img
            className="absolute top-[21px] left-[570px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="/simplelineiconscalender.svg"
          />
        </div>
        <div className="absolute top-[278px] left-[0px] w-full h-[65px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full" />
          <div className="absolute top-[21px] left-[65px] tracking-[-0.02em] leading-[150%]">
            Beach Getaway in Miami
          </div>
          <div className="absolute top-[24px] left-[432px] text-sm tracking-[-0.02em] leading-[150%]">
            September 5, 2024
          </div>
          <input
            className="m-0 absolute top-[21px] left-[570px] w-[22px] h-[22px] overflow-hidden"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[371px] left-[0px] w-full h-[65px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full" />
          <div className="absolute top-[21px] left-[65px] tracking-[-0.02em] leading-[150%]">
            Beach Getaway in Miami
          </div>
          <div className="absolute top-[24px] left-[432px] text-sm tracking-[-0.02em] leading-[150%]">
            September 5, 2024
          </div>
          <img
            className="absolute top-[21px] left-[570px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="/simplelineiconscalender.svg"
          />
        </div>
        <div className="absolute top-[458px] left-[0px] w-full h-[65px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full" />
          <div className="absolute top-[21px] left-[65px] tracking-[-0.02em] leading-[150%]">
            Beach Getaway in Miami
          </div>
          <div className="absolute top-[24px] left-[432px] text-sm tracking-[-0.02em] leading-[150%]">
            September 5, 2024
          </div>
          <input
            className="m-0 absolute top-[21px] left-[570px] w-[22px] h-[22px] overflow-hidden"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[0px] left-[32px] w-[499px] h-[76px] overflow-hidden" />
      </div>
      <FrameComponent5 />
      <section className="w-[798px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full text-left text-sm text-black font-poppins">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
          <div className="self-stretch h-[537px] relative max-w-full mq750:h-auto mq750:min-h-[537]">
            <FrameComponent13
              propTop="232px"
              propHeight="305px"
              teenyiconsdownOutline="pending_I43:165;9:202"
            />
            <div className="absolute top-[0px] left-[6px] rounded-11xl bg-white w-[773px] flex flex-col items-end justify-start pt-7 pb-[39px] pl-[37px] pr-[50px] box-border gap-[76px] max-w-full z-[3]">
              <div className="w-[773px] h-[530px] relative rounded-11xl bg-white hidden max-w-full" />
              <header className="self-stretch flex flex-row items-start justify-between top-[0] z-[99] sticky gap-5 text-center text-lg-5 text-lightgray font-poppins">
                <div className="w-[277px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5">
                    <img
                      className="h-6 w-[26px] relative overflow-hidden shrink-0 z-[4]"
                      alt=""
                      src="/materialsymbolslightsearch.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[28px] whitespace-pre-wrap shrink-0 z-[4]">
                      Search your interests
                    </div>
                  </div>
                </div>
                <img
                  className="h-7 w-[29px] relative overflow-hidden shrink-0 z-[4]"
                  loading="lazy"
                  alt=""
                  src="/hugeiconsbot.svg"
                />
              </header>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[23px] pr-[18px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-center max-w-full [row-gap:20px] mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[320px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[21px] max-w-full mq750:flex-wrap">
                        <div className="w-[150px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[150px] mq750:flex-1">
                          <div className="self-stretch flex flex-col items-end justify-start gap-[41px]">
                            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px]">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[26px]">
                                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0">
                                  <div className="h-11 flex-1 relative">
                                    <div
                                      className="absolute top-[0px] left-[0px] rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border w-full h-full cursor-pointer z-[4]"
                                      onClick={onRectangleClick}
                                    />
                                    <div className="absolute top-[13px] left-[36px] tracking-[-0.02em] leading-[23px] font-light inline-block w-[67px] h-[23px] min-w-[67px] z-[5]">
                                      Beaches
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  className="w-[139px] h-11 z-[4]"
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#000",
                                    fontSize: "14",
                                    background: "#fff",
                                    border: "#aaa9a9 solid 1px",
                                    borderRadius: "20px",
                                    "&:hover": { background: "#fff" },
                                    width: 139,
                                    height: 44,
                                  }}
                                >
                                  Tropical
                                </Button>
                              </div>
                            </div>
                            <div className="w-[142px] flex flex-col items-start justify-start gap-[23px]">
                              <Button
                                className="w-[139px] h-11 z-[4]"
                                disableElevation
                                variant="contained"
                                sx={{
                                  textTransform: "none",
                                  color: "#000",
                                  fontSize: "14",
                                  background: "#fff",
                                  border: "#aaa9a9 solid 1px",
                                  borderRadius: "20px",
                                  "&:hover": { background: "#fff" },
                                  width: 139,
                                  height: 44,
                                }}
                              >
                                Beaches
                              </Button>
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                                <Button
                                  className="h-11 flex-1 z-[4]"
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#000",
                                    fontSize: "14",
                                    background: "#fff",
                                    border: "#aaa9a9 solid 1px",
                                    borderRadius: "20px",
                                    "&:hover": { background: "#fff" },
                                    height: 44,
                                  }}
                                >
                                  Beaches
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[207px] [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[101px]">
                            <div className="w-[139px] flex flex-col items-start justify-start gap-[25px]">
                              <div className="self-stretch h-11 relative">
                                <div
                                  className="absolute top-[0px] left-[0px] rounded-xl bg-white border-paleturquoise border-[1px] border-solid box-border w-full h-full cursor-pointer z-[4]"
                                  onClick={onLondonTitleClick}
                                />
                                <div className="absolute top-[10px] left-[54px] tracking-[-0.02em] leading-[23px] font-light inline-block w-[67px] h-[23px] z-[5]">
                                  Hill
                                </div>
                              </div>
                              <Button
                                className="self-stretch h-11 z-[4]"
                                disableElevation
                                variant="contained"
                                sx={{
                                  textTransform: "none",
                                  color: "#000",
                                  fontSize: "14",
                                  background: "#fff",
                                  border: "#aaa9a9 solid 1px",
                                  borderRadius: "20px",
                                  "&:hover": { background: "#fff" },
                                  height: 44,
                                }}
                              >
                                Cold
                              </Button>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0">
                              <div className="flex-1 flex flex-col items-start justify-start gap-6">
                                <Button
                                  className="self-stretch h-11 z-[4]"
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#000",
                                    fontSize: "14",
                                    background: "#fff",
                                    border: "#aaa9a9 solid 1px",
                                    borderRadius: "20px",
                                    "&:hover": { background: "#fff" },
                                    height: 44,
                                  }}
                                >
                                  Beaches
                                </Button>
                                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                                  <Button
                                    className="h-11 flex-1 z-[4]"
                                    disableElevation
                                    variant="contained"
                                    sx={{
                                      textTransform: "none",
                                      color: "#000",
                                      fontSize: "14",
                                      background: "#fff",
                                      border: "#aaa9a9 solid 1px",
                                      borderRadius: "20px",
                                      "&:hover": { background: "#fff" },
                                      height: 44,
                                    }}
                                  >
                                    Beaches
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[105px]">
                            <div className="self-stretch flex flex-col items-end justify-start gap-[41px]">
                              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2">
                                <div className="flex-1 flex flex-col items-start justify-start gap-6">
                                  <Button
                                    className="w-[139px] h-11 z-[4]"
                                    disableElevation
                                    variant="contained"
                                    sx={{
                                      textTransform: "none",
                                      color: "#000",
                                      fontSize: "14",
                                      background: "#fff",
                                      border: "#aaa9a9 solid 1px",
                                      borderRadius: "20px",
                                      "&:hover": { background: "#fff" },
                                      width: 139,
                                      height: 44,
                                    }}
                                  >
                                    Warm
                                  </Button>
                                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-0">
                                    <Button
                                      className="h-11 flex-1 z-[4]"
                                      disableElevation
                                      variant="contained"
                                      sx={{
                                        textTransform: "none",
                                        color: "#000",
                                        fontSize: "14",
                                        background: "#fff",
                                        border: "#aaa9a9 solid 1px",
                                        borderRadius: "20px",
                                        "&:hover": { background: "#fff" },
                                        height: 44,
                                      }}
                                    >
                                      Beaches
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[139px] flex flex-col items-start justify-start gap-[22px]">
                                <Button
                                  className="self-stretch h-11 z-[4]"
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#000",
                                    fontSize: "14",
                                    background: "#fff",
                                    border: "#aaa9a9 solid 1px",
                                    borderRadius: "20px",
                                    "&:hover": { background: "#fff" },
                                    height: 44,
                                  }}
                                >
                                  Beaches
                                </Button>
                                <Button
                                  className="self-stretch h-11 z-[4]"
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#000",
                                    fontSize: "14",
                                    background: "#fff",
                                    border: "#aaa9a9 solid 1px",
                                    borderRadius: "20px",
                                    "&:hover": { background: "#fff" },
                                    height: 44,
                                  }}
                                >
                                  Beaches
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[485px] overflow-x-auto flex flex-row items-start justify-start pt-3.5 px-3 pb-[15px] box-border gap-6 max-w-full z-[4]">
                      <div className="w-[155px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border">
                        <Button
                          className="self-stretch h-11"
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            background: "#fff",
                            border: "#aaa9a9 solid 1px",
                            borderRadius: "20px",
                            "&:hover": { background: "#fff" },
                            height: 44,
                          }}
                        >
                          Beaches
                        </Button>
                      </div>
                      <Button
                        className="h-11 w-[139px]"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#000",
                          fontSize: "14",
                          background: "#fff",
                          border: "#aaa9a9 solid 1px",
                          borderRadius: "20px",
                          "&:hover": { background: "#fff" },
                          width: 139,
                          height: 44,
                        }}
                      >
                        Beaches
                      </Button>
                      <div className="w-[139px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                        <Button
                          className="self-stretch h-11"
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            background: "#fff",
                            border: "#aaa9a9 solid 1px",
                            borderRadius: "20px",
                            "&:hover": { background: "#fff" },
                            height: 44,
                          }}
                        >
                          Beaches
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[152px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[31.5px]">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[13px]">
                        <div className="h-11 flex-1 relative rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border z-[4]" />
                      </div>
                      <div className="w-[139px] h-11 relative rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border z-[4]" />
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[9px] pr-1">
                        <Button
                          className="h-11 flex-1 z-[4]"
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            background: "#fff",
                            border: "#aaa9a9 solid 1px",
                            borderRadius: "20px",
                            "&:hover": { background: "#fff" },
                            height: 44,
                          }}
                        >
                          Beaches
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[13px] box-border max-w-full text-center text-xl">
            <div className="flex-1 flex flex-col items-start justify-start relative max-w-full">
              <h2 className="!m-[0] absolute top-[41px] left-[55px] text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[126px] mq450:text-base mq450:leading-[24px]">
                Create a Trip
              </h2>
              <RectangleComponent
                rectangle320="pending_I43:212;9:426"
                image="/image-1@2x.png"
                image1="/image-2@2x.png"
                image2="/image-3@2x.png"
              />
              <div className="w-[58px] h-[59px] absolute !m-[0] top-[29px] right-[15px]">
                <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-aliceblue w-[58px] h-[55px]" />
                <img
                  className="absolute top-[0px] left-[17px] w-[12.8px] h-[12.8px] z-[6]"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className="w-[77px] h-7 relative overflow-hidden shrink-0 hidden z-[3]" />
              <div className="w-[79px] h-[31px] relative overflow-hidden shrink-0 hidden z-[4]" />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent2
        blankLineHeight="944px"
        blankLinePadding="17px 0px 0px"
        httpslottiefilescomanimat="/httpslottiefilescomanimationssunshowericonanimatedweathericonoy1mfkrgtf@2x.png"
        tripsSeparator="pending_43:225"
      />
    </div>
  );
};

export default DashboardOptions;
