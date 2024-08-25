import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`w-[417px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_478px)] shrink-0 text-center text-5xs text-darkgray-100 font-poppins mq675:hidden mq675:max-w-full ${className}`}
      >
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <div className="h-px w-[143px] absolute !m-[0] top-[136px] left-[20px] border-silver border-t-[1px] border-solid box-border z-[1]" />
          <div className="absolute !m-[0] top-[182px] left-[115px] tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap inline-block min-w-[32px] z-[1]">
            9.20 PM
          </div>
          <img
            className="h-[46px] w-[49px] absolute !m-[0] bottom-[47px] left-[9px] rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-12-2@2x.png"
          />
          <div className="absolute !m-[0] bottom-[70px] left-[115px] tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap inline-block min-w-[32px] z-[1]">
            9.20 PM
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[116px] max-w-full text-xl text-black mq450:gap-[58px]">
            <div className="w-[385px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-6 max-w-full">
                <img
                  className="h-[61px] w-[63px] relative rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src="/ellipse-14@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[178px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5">
                    <div className="flex flex-col items-start justify-start gap-1.5">
                      <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] z-[1] mq450:text-base mq450:leading-[24px]">
                        Travel Buddies
                      </h1>
                      <div className="flex flex-row items-start justify-start py-0 px-2 text-4xs text-yellowgreen">
                        <div className="relative tracking-[-0.02em] leading-[14px] font-medium inline-block min-w-[65px] z-[1]">
                          Rahul is typing
                        </div>
                      </div>
                    </div>
                    <div className="w-[85px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <img
                        className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-16.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-[18px] box-border gap-[9px] max-w-full text-left text-3xs">
              <img
                className="h-[39px] w-[39px] relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-17@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[240px] max-w-full">
                <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[3px] text-center text-sm">
                  <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[47px]">{`James `}</h3>
                </div>
                <div className="w-[302px] flex flex-row items-start justify-start pt-0 pb-1 pl-0 pr-5 box-border">
                  <div className="flex-1 rounded-6xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-2 px-[11px] pb-[13px] z-[1]">
                    <div className="h-[66px] w-[282px] relative rounded-6xs bg-whitesmoke-100 hidden" />
                    <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium z-[2]">
                      Hi guys ! I am thinking of a trip how many are interested
                      let me know we will plan accordingly and answer the poll
                      we will decide
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
                      activities. Your choices will help shape our travel plans,
                      so make sure to pick what works best for you!
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-6xs bg-whitesmoke-100 flex flex-col items-start justify-start pt-5 pb-[9px] pl-[25px] pr-[22px] box-border gap-[13px] max-w-full z-[1]">
                  <div className="w-[369px] h-[150px] relative rounded-6xs bg-whitesmoke-100 hidden max-w-full" />
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium z-[2]">
                    Which destination should we choose for our upcoming trip?
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-5xs">
                    <div className="flex-1 flex flex-row items-end justify-between gap-5">
                      <div className="h-[93px] w-[104px]">
                        <DatePicker
                          value={frameDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setFrameDateTimePickerValue(newValue);
                          }}
                          sx={{
                            fieldset: {
                              borderColor: "transparent",
                              borderTopWidth: 0,
                              borderRightWidth: 0,
                              borderBottomWidth: 0,
                              borderLeftWidth: 0,
                            },
                            "&:hover": {
                              fieldset: { borderColor: "transparent" },
                              ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                              },
                            },
                            "& input::placeholder": {
                              textColor: "#000",
                              fontSize: 9,
                            },
                            input: {
                              color: "#000",
                              fontSize: 9,
                              paddingLeft: 0,
                              textAlign: "left",
                              fontWeight: "400",
                            },
                            "& .MuiInputBase-root": {
                              height: 93,
                              gap: "8px",
                              flexDirection: { flexDirection: "row-reverse" },
                            },
                          }}
                          slotProps={{
                            textField: {
                              size: "medium",
                              fullWidth: true,
                              required: false,
                              autoFocus: false,
                              error: false,
                              helperText: "London",
                              placeholder: "Japan",
                            },
                            openPickerIcon: {
                              component: () => (
                                <img
                                  width="16px"
                                  height="15px"
                                  src="/vote-distribution.png"
                                />
                              ),
                            },
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
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
            <div className="flex flex-row items-start justify-start py-0 px-[54px] box-border max-w-full text-sm mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex flex-col items-start justify-start gap-[17px]">
                <div className="flex flex-row items-start justify-start py-0 px-[22px]">
                  <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-medium font-[inherit] inline-block min-w-[21px]">{`Lily `}</h3>
                </div>
                <div className="rounded-6xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-5 px-[17px] pb-4 whitespace-nowrap z-[1] text-3xs">
                  <div className="h-[51px] w-[290px] relative rounded-6xs bg-whitesmoke-100 hidden" />
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium whitespace-pre-wrap z-[2]">{`I’m on my summer break I will  join for sure hurray !! `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent7;
