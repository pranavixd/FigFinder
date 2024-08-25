import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Component1 from "./Component1";

export type FrameComponent2Type = {
  className?: string;
  httpslottiefilescomanimat?: string;
  tripsSeparator?: string;

  /** Style props */
  blankLineHeight?: CSSProperties["height"];
  blankLinePadding?: CSSProperties["padding"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  blankLineHeight,
  blankLinePadding,
  httpslottiefilescomanimat,
  tripsSeparator,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: blankLineHeight,
      padding: blankLinePadding,
    };
  }, [blankLineHeight, blankLinePadding]);

  return (
    <div
      className={`h-[929px] w-[258px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-center text-xs text-black font-inter mq750:hidden ${className}`}
      style={frameDiv1Style}
    >
      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[31px] mq450:gap-[15px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
          <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
            <img
              className="h-[63px] w-[69px] relative"
              loading="lazy"
              alt=""
              src="/component-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <Component1 />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-end justify-start py-0 pl-1 pr-0 gap-[15px]">
          <div className="self-stretch h-[242px] flex flex-row items-start justify-end py-0 pl-0 pr-0.5 box-border text-left">
            <div className="self-stretch flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-5 pb-[27px] pl-[23px] pr-5 gap-[29.9px]">
              <div className="w-[252px] h-[242px] relative rounded-xl bg-white hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
                <div className="flex-1 flex flex-row items-start justify-between gap-5">
                  <img
                    className="self-stretch w-[11.2px] relative max-h-full overflow-hidden shrink-0 object-contain min-h-[22px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowoutlined@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-4">
                    <div className="relative inline-block min-w-[41px] z-[1]">
                      Aug 24
                    </div>
                  </div>
                  <img
                    className="self-stretch w-[11px] relative max-h-full overflow-hidden shrink-0 min-h-[22px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowoutlined-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3">
                <div className="relative whitespace-pre-wrap z-[1]">
                  Sun Mon Tue Wed Thu Fri Sat
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-2.5 pr-[7px] text-silver">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[19px]">
                    <div className="self-stretch flex-[0.6154] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] gap-px">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                        <div className="flex-1 relative z-[1]">
                          <p className="m-0">1</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="relative z-[2]">
                          <p className="m-0">2</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                        <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                          <p className="m-0">3</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                        <div className="flex-1 relative z-[1]">
                          <p className="m-0">4</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="self-stretch relative text-black z-[1]">
                        <p className="m-0">5</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">&nbsp;</p>
                      </div>
                    </div>
                    <div className="self-stretch flex-[0.5333] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[7px]">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-px">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">1</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="relative z-[2]">
                            <p className="m-0">2</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                          <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                            <p className="m-0">3</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">4</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch relative text-black z-[1]">
                          <p className="m-0">5</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-[0.6154] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] gap-px">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                        <div className="flex-1 relative z-[1]">
                          <p className="m-0">1</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="relative z-[2]">
                          <p className="m-0">2</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                        <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                          <p className="m-0">3</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                        <div className="flex-1 relative z-[1]">
                          <p className="m-0">4</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="self-stretch relative text-black z-[1]">
                        <p className="m-0">5</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">&nbsp;</p>
                      </div>
                    </div>
                    <div className="self-stretch flex-[0.6154] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[5px]">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-px">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">1</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="relative z-[2]">
                            <p className="m-0">2</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                          <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                            <p className="m-0">3</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">4</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch relative text-black z-[1]">
                          <p className="m-0">5</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-px">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                        <div className="flex-1 relative z-[1]">
                          <p className="m-0">1</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="relative z-[2]">
                          <p className="m-0">2</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                        <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                          <p className="m-0">3</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                        <div className="flex-1 relative z-[1]">
                          <p className="m-0">4</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                      <div className="self-stretch relative text-black z-[1]">
                        <p className="m-0">5</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">&nbsp;</p>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-px">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">1</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="relative z-[2]">
                            <p className="m-0">2</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                          <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                            <p className="m-0">3</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">4</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch relative text-black z-[1]">
                          <p className="m-0">5</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-px">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">1</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="relative z-[2]">
                            <p className="m-0">2</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                          <div className="w-[5.9px] relative text-black inline-block z-[1] mt-[-26px]">
                            <p className="m-0">3</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-black">
                          <div className="flex-1 relative z-[1]">
                            <p className="m-0">4</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">&nbsp;</p>
                          </div>
                        </div>
                        <div className="self-stretch relative text-black z-[1]">
                          <p className="m-0">5</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0.5 pb-[5px] text-21xl font-poppins">
            <div className="flex-1 flex flex-row items-start justify-start relative">
              <img
                className="h-[calc(100%_-_8px)] w-36 absolute !m-[0] top-[2px] right-[-4px] bottom-[6px] max-h-full object-cover z-[2]"
                loading="lazy"
                alt=""
                src={httpslottiefilescomanimat}
              />
              <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[19px] px-[26px] pb-6">
                <div className="w-[250px] h-[121px] relative rounded-xl bg-white hidden z-[1]" />
                <div className="w-[84px] relative tracking-[-0.02em] leading-[150%] font-light inline-block min-w-[84px] z-[1] mq450:text-5xl mq450:leading-[36px] mq1050:text-13xl mq1050:leading-[48px]">
                  27 C
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-1 mt-[-6px] text-base">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-light inline-block min-w-[38px] z-[2]">
                    India
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-xl bg-white flex flex-col items-end justify-start pt-[30px] pb-[29px] pl-0 pr-[11px] gap-[9px] text-smi mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="w-[249px] h-[435px] relative rounded-xl bg-white hidden" />
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-5">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px">
                <div className="flex-1 flex flex-row items-start justify-start gap-[21px]">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[20px] font-medium z-[1]">
                    Activity Status
                  </div>
                  <FormControl
                    className="h-[22px] w-[77px] font-inter font-medium text-5xs text-black z-[1]"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#e1f3f4",
                      borderRadius: "7px",
                      width: "77px",
                      height: "22px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "22px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "22px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "22px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "22px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 8,
                        fontWeight: "Medium",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "12px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="17px"
                          height="9.5px"
                          src="/weuiarrowoutlined-2.png"
                          style={{ marginRight: "3px" }}
                        />
                      )}
                    >
                      <MenuItem>Monthly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className="w-[229px] flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-px pb-0.5 pl-1.5 pr-0 box-border z-[1] text-6xs">
                <div className="self-stretch w-[299px] bg-azure flex flex-row items-end justify-start pt-[19px] px-3 pb-[11px] box-border relative gap-[55px] shrink-0 mq450:gap-[27px]">
                  <div className="h-[175px] w-[299px] relative bg-azure hidden z-[0]" />
                  <div className="self-stretch w-[190px] flex flex-row items-start justify-start gap-3">
                    <div className="h-[138px] w-[54px] flex flex-row items-end justify-start gap-1">
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[18px]">
                        <div className="self-stretch flex flex-col items-end justify-start gap-[15px]">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[11px] font-medium inline-block min-w-[14px] z-[1]">
                            {" "}
                            100
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[21px]">
                            <div className="relative tracking-[-0.02em] leading-[11px] font-medium inline-block min-w-[9px] z-[1]">
                              50
                            </div>
                            <div className="relative tracking-[-0.02em] leading-[11px] font-medium inline-block min-w-[9px] z-[1]">
                              25
                            </div>
                            <div className="relative tracking-[-0.02em] leading-[11px] font-medium inline-block min-w-[8px] z-[1]">
                              10
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-2">
                        <img
                          className="w-0.5 flex-1 relative max-h-full object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src={tripsSeparator}
                        />
                      </div>
                      <div className="h-[108px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border">
                        <div className="w-[22px] flex-1 relative bg-paleturquoise z-[1]" />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-5xs">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start relative">
                        <div className="h-px w-[279px] absolute !m-[0] right-[-90px] bottom-[19px] border-gainsboro border-t-[1px] border-solid box-border z-[2]" />
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-3">
                            <div className="h-12 w-[22px] relative bg-paleturquoise z-[1]" />
                            <div className="h-[72px] w-[22px] relative bg-paleturquoise z-[1]" />
                            <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-px">
                              <div className="w-[22px] flex-1 relative bg-paleturquoise z-[1]" />
                            </div>
                            <div className="h-[60px] w-[22px] relative bg-paleturquoise z-[1]" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                            <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[59px] z-[1]">{`Upcoming Trips `}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[29px] w-[22px] absolute !m-[0] right-[54px] bottom-[31px] bg-white z-[1]" />
                  <div className="h-[115px] flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border">
                    <div className="w-[22px] flex-1 relative bg-white z-[1]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-2.5 pr-1">
              <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-[19px] relative gap-[79px]">
                <div className="w-[141px] relative tracking-[-0.02em] leading-[20px] font-medium whitespace-pre-wrap inline-block z-[2]">
                  Add to your trip
                </div>
                <div className="w-[218px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-azure w-full h-full z-[1]" />
                  <div className="absolute top-[55px] left-[18px] rounded-xl w-[57px] h-[51px] z-[2]" />
                  <div className="absolute top-[55px] left-[81px] rounded-4xs bg-white w-[57px] h-[51px] z-[2]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-white w-full h-full hidden" />
                    <img
                      className="absolute top-[21px] left-[21px] w-[16.5px] h-[14.7px] z-[3]"
                      loading="lazy"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                  <div className="absolute top-[55px] left-[145px] rounded-4xs bg-white w-[57px] h-[51px] z-[2]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-white w-full h-full hidden" />
                    <img
                      className="absolute top-[19px] left-[22px] w-3 h-[17px] z-[3]"
                      loading="lazy"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                  <div className="absolute top-[57px] left-[15px] rounded-4xs bg-white w-[57px] h-[51px] z-[3]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-white w-full h-full hidden" />
                    <img
                      className="absolute top-[17px] left-[17px] w-5 h-[21px] overflow-hidden z-[4]"
                      loading="lazy"
                      alt=""
                      src="/mingcutehotelfill.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[25px] text-5xs">
                  <div className="w-[161px] flex flex-row items-start justify-between gap-5">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[13px]">
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[20px] z-[2]">
                        Hotel
                      </div>
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[14px] z-[2]">
                      Car
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[34px] z-[2]">
                      Activities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
