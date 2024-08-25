import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import HomeButton from "../components/HomeButton";
import FrameComponent13 from "../components/FrameComponent13";
import { useNavigate } from "react-router-dom";
import TripAction from "../components/TripAction";
import FrameComponent2 from "../components/FrameComponent2";

const Selct: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWeuiarrowOutlinedIconClick = useCallback(() => {
    navigate("/select-4");
  }, [navigate]);

  return (
    <div className="w-full relative bg-aliceblue overflow-y-auto flex flex-row items-start justify-start pt-[54px] px-0 pb-2 box-border gap-0.5 leading-[normal] tracking-[normal] text-center text-base text-black font-poppins lg:flex-wrap">
      <div className="h-[67px] w-[728px] relative rounded-11xl bg-white hidden max-w-full" />
      <div className="h-24 w-[704px] relative text-17xl tracking-[-0.02em] leading-[160%] font-light whitespace-pre-wrap text-left hidden shrink-0 max-w-full mq450:text-3xl mq450:leading-[35px] mq1050:text-10xl mq1050:leading-[46px]">
        Welcbeaches,ome back, Pranavi Ready to plan t aure ?
      </div>
      <div
        className="h-[182px] w-[622px] relative overflow-y-auto shrink-0 hidden max-w-full"
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
      <div className="w-[179px] flex flex-col items-start justify-start py-0 pl-[52px] pr-2.5 box-border gap-[30px]">
        <div className="w-[38px] relative tracking-[-0.02em] leading-[150%] inline-block min-w-[38px]">
          Logo
        </div>
        <HomeButton />
      </div>
      <section className="w-[798px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full text-center text-lg-5 text-lightgray font-poppins">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
          <div className="self-stretch h-[537px] relative max-w-full mq750:h-auto mq750:min-h-[537]">
            <FrameComponent13
              propTop="232px"
              propHeight="305px"
              teenyiconsdownOutline="pending_I43:1502;9:202"
            />
            <div className="absolute top-[0px] left-[6px] rounded-11xl bg-white w-[773px] flex flex-col items-end justify-start pt-7 px-[34px] pb-[39px] box-border gap-[76px] max-w-full z-[3]">
              <div className="w-[773px] h-[530px] relative rounded-11xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[3px] pr-4 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                  <div className="w-[277px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-between gap-5">
                      <img
                        className="h-6 w-[26px] relative overflow-hidden shrink-0 z-[4]"
                        alt=""
                        src="/materialsymbolslightsearch.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[28px] whitespace-pre-wrap z-[4]">
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
                </div>
              </div>
              <div className="w-[679px] flex flex-row items-end justify-center max-w-full [row-gap:20px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[320px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-2 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full mq750:flex-1">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[15px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-end justify-start gap-[20.5px] max-w-full mq750:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[104px]">
                            <Button
                              className="self-stretch h-11 z-[4]"
                              disableElevation
                              variant="contained"
                              sx={{
                                textTransform: "none",
                                color: "#000",
                                fontSize: "14",
                                background: "#fff",
                                border: "#89eaef solid 2px",
                                borderRadius: "20px",
                                "&:hover": { background: "#fff" },
                                height: 44,
                              }}
                            >
                              Beaches
                            </Button>
                          </div>
                          <Button
                            className="h-11 flex-[0.7554] min-w-[104px] z-[4] mq450:flex-1"
                            disableElevation
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#000",
                              fontSize: "14",
                              background: "#fff",
                              border: "#89eaef solid 2px",
                              borderRadius: "20px",
                              "&:hover": { background: "#fff" },
                              height: 44,
                            }}
                          >
                            Hill
                          </Button>
                          <Button
                            className="h-11 flex-[0.6835] min-w-[104px] z-[4] mq450:flex-1"
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
                            Warm
                          </Button>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-10 mq450:flex-wrap">
                        <Button
                          className="h-11 w-[139px] z-[4]"
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
                        <div className="flex-1 flex flex-row items-start justify-start gap-6 min-w-[196px] mq450:flex-wrap">
                          <Button
                            className="h-11 flex-[0.3237] min-w-[90px] z-[4] mq450:flex-1"
                            disableElevation
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#000",
                              fontSize: "14",
                              background: "#fff",
                              border: "#89eaef solid 2px",
                              borderRadius: "20px",
                              "&:hover": { background: "#fff" },
                              height: 44,
                            }}
                          >
                            Cold
                          </Button>
                          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[90px]">
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
                  <div className="self-stretch flex flex-col items-end justify-start gap-[22px] max-w-full">
                    <div className="w-[481px] flex flex-row items-start justify-start gap-10 max-w-full mq450:flex-wrap">
                      <Button
                        className="h-11 w-[139px] z-[4]"
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
                      <div className="flex-1 flex flex-row items-start justify-start gap-6 min-w-[196px]">
                        <Button
                          className="h-11 flex-[0.4676] z-[4]"
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
                        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <Button
                            className="self-stretch h-11 z-[4]"
                            disableElevation
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#000",
                              fontSize: "14",
                              background: "#fff",
                              border: "#aaa9a9 solid 2px",
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
                    <div className="self-stretch flex flex-col items-end justify-start gap-[17px] max-w-full">
                      <div className="w-[478px] flex flex-row items-start justify-start gap-[38px] max-w-full mq450:flex-wrap">
                        <Button
                          className="h-11 w-[139px] z-[4]"
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
                        <div className="flex-1 flex flex-row items-start justify-start gap-[23px] min-w-[196px]">
                          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
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
                          <Button
                            className="h-11 flex-[0.4676] z-[4]"
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
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2 box-border max-w-full">
                        <div className="w-[485px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-3.5 px-3 pb-[15px] box-border gap-6 max-w-full z-[4]">
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
                    </div>
                  </div>
                </div>
                <div className="w-[186px] flex flex-col items-end justify-start gap-[102px] min-w-[186px] mq750:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[34px]">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[33px] mq750:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                        <div className="w-[139px] h-11 relative rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border z-[4]" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-0">
                          <div className="h-11 flex-1 relative rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border z-[4]" />
                        </div>
                      </div>
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
                  <img
                    className="w-12 h-[28.5px] relative overflow-hidden shrink-0 object-contain cursor-pointer z-[4]"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowoutlined2@2x.png"
                    onClick={onWeuiarrowOutlinedIconClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <TripAction
            rectangle320="pending_I43:1551;9:426"
            image="/image-1@2x.png"
            image1="/image-2@2x.png"
            image2="/image-3@2x.png"
          />
        </div>
      </section>
      <FrameComponent2
        blankLineHeight="944px"
        blankLinePadding="17px 0px 0px"
        httpslottiefilescomanimat="/httpslottiefilescomanimationssunshowericonanimatedweathericonoy1mfkrgtf@2x.png"
        tripsSeparator="pending_43:1564"
      />
    </div>
  );
};

export default Selct;
