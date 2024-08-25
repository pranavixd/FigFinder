import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type RectangleComponentType = {
  className?: string;
  rectangle320?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const RectangleComponent: FunctionComponent<RectangleComponentType> = ({
  className = "",
  rectangle320,
  image,
  image1,
  image2,
}) => {
  const [weatherIconDateTimePickerValue, setWeatherIconDateTimePickerValue] =
    useState(null);
  const [londonCardBookButtonValue, setLondonCardBookButtonValue] =
    useState(null);
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch h-[390px] overflow-y-auto shrink-0 flex flex-row items-end justify-start pt-[15px] px-[29px] pb-[13px] box-border relative max-w-full z-[1] text-center text-xl text-black font-poppins mq450:h-auto ${className}`}
      >
        <div className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden z-[0]" />
        <img
          className="h-[12.8px] w-[12.8px] absolute !m-[0] top-[26px] right-[39.9px]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-white z-[1]" />
        <div className="w-[306px] flex flex-col items-start justify-start gap-0.5 shrink-0 mq750:hidden">
          <div className="w-[289px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[32px] font-medium font-[inherit] z-[2] mq450:text-base mq450:leading-[24px]">
              Create a Trip and Book Now
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative text-mini">
            <div className="h-[295.7px] w-[calc(100%_-_25px)] absolute !m-[0] right-[11.4px] bottom-[-0.3px] left-[13.6px] rounded-xl bg-azure z-[2]" />
            <img
              className="h-[28.6px] w-[107.5px] absolute !m-[0] right-[-33.2px] bottom-[49.5px] rounded-6xs z-[3]"
              loading="lazy"
              alt=""
              src={rectangle320}
            />
            <div className="flex-1 flex flex-row items-start justify-start z-[4]">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="w-[306px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border">
                  <div className="flex-1 overflow-hidden flex flex-col items-end justify-start pt-[15.6px] pb-7 pl-0.5 pr-6 gap-[9.5px]">
                    <img
                      className="self-stretch h-[163.2px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src={image}
                    />
                    <div className="w-[133px] h-[34px] relative overflow-hidden shrink-0 hidden" />
                    <div className="w-[265px] flex flex-row items-start justify-end py-0 px-[9px] box-border">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[30px] mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[88px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[5.7px]">
                            <div className="w-[54.5px] relative tracking-[-0.02em] leading-[23px] font-medium inline-block min-w-[54.5px]">
                              London
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start text-left text-3xs">
                              <div className="w-[129px] h-9 relative z-[1]">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden hidden" />
                              </div>
                              <div className="self-stretch relative tracking-[-0.02em] leading-[150%]">
                                <p className="m-0 whitespace-pre-wrap">
                                  {" "}
                                  People : 7
                                </p>
                                <p className="m-0 whitespace-pre-wrap">{`       Date                   :  9th Feb `}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[80.5px] flex flex-col items-start justify-start gap-[18.6px] text-left text-3xs">
                          <div className="self-stretch h-[55.8px] mq450:h-[55.799999999999955px]">
                            <DatePicker
                              value={weatherIconDateTimePickerValue}
                              onChange={(newValue: any) => {
                                setWeatherIconDateTimePickerValue(newValue);
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
                                  fontSize: 10,
                                },
                                input: {
                                  color: "#000",
                                  fontSize: 10,
                                  textAlign: "center",
                                  fontWeight: "400",
                                },
                                "& .MuiInputBase-root": {
                                  height: 55.799999999999955,
                                  gap: "8px",
                                  flexDirection: { flexDirection: "row" },
                                },
                              }}
                              slotProps={{
                                textField: {
                                  size: "medium",
                                  fullWidth: true,
                                  required: false,
                                  autoFocus: false,
                                  error: false,
                                  placeholder: "Sep 9, 2024",
                                },
                                openPickerIcon: {
                                  component: () => (
                                    <img
                                      width="12px"
                                      height="12.7px"
                                      src="/simplelineiconscalender-7.svg"
                                    />
                                  ),
                                },
                              }}
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                            <div className="flex flex-row items-start justify-start relative">
                              <div className="h-[21px] w-[82px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[-18px] rounded-4xs bg-paleturquoise" />
                              <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[47px] z-[1]">
                                Book Now
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
        <div className="mb-[-16px] w-[596px] flex flex-col items-end justify-start gap-7 shrink-0 max-w-[calc(100%_-_306px)] text-mini mq750:max-w-full">
          <div className="w-[388px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[39px] w-[42px] relative rounded-[50%] bg-azure z-[2]" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq750:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-col items-end justify-start pt-0 pb-7 pl-0.5 pr-6 box-border gap-[9.3px] min-w-[198px] z-[4]">
              <img
                className="self-stretch h-[179px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src={image1}
              />
              <div className="w-[133px] h-[34px] relative overflow-hidden shrink-0 hidden" />
              <div className="w-[266px] flex flex-row items-start justify-end py-0 px-[9px] box-border">
                <div className="flex-1 flex flex-row items-end justify-start gap-[30px]">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5.7px]">
                      <div className="w-[56.5px] flex flex-row items-start justify-start py-0 px-px box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block min-w-[54.5px]">
                          London
                        </div>
                      </div>
                      <div className="self-stretch h-[62px] relative text-left text-3xs">
                        <div className="absolute top-[0px] left-[1px] w-[129px] h-9 z-[1]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden hidden" />
                        </div>
                        <div className="absolute top-[33px] left-[0px] flex flex-row items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                            <img
                              className="w-2 h-[9px] relative shrink-0"
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-7px] w-[136px] relative tracking-[-0.02em] leading-[150%] inline-block shrink-0">
                              <p className="m-0 whitespace-pre-wrap">
                                {" "}
                                People : 7
                              </p>
                              <p className="m-0 whitespace-pre-wrap">{`       Date                   :  9th Feb `}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80.5px] flex flex-col items-start justify-start gap-[18.6px] text-left text-3xs">
                    <div className="self-stretch h-[55.8px] mq450:h-[55.799999999999955px]">
                      <DatePicker
                        value={londonCardBookButtonValue}
                        onChange={(newValue: any) => {
                          setLondonCardBookButtonValue(newValue);
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
                            fontSize: 10,
                          },
                          input: {
                            color: "#000",
                            fontSize: 10,
                            textAlign: "center",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            height: 55.799999999999955,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            placeholder: "Sep 9, 2024",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img
                                width="12px"
                                height="12.7px"
                                src="/simplelineiconscalender-8.svg"
                              />
                            ),
                          },
                        }}
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                      <div className="flex flex-row items-start justify-start relative">
                        <div className="h-[21px] w-[82px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[-18px] rounded-4xs bg-paleturquoise" />
                        <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[47px] z-[1]">
                          Book Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-end justify-start pt-0 pb-7 pl-0.5 pr-6 box-border gap-[9.3px] min-w-[198px] z-[5] ml-[-12px] mq450:ml-0">
              <img
                className="self-stretch h-[179px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src={image2}
              />
              <div className="w-[133px] h-[34px] relative overflow-hidden shrink-0 hidden" />
              <div className="w-[265px] flex flex-row items-start justify-end py-0 px-[9px] box-border">
                <div className="flex-1 flex flex-row items-end justify-start gap-[30px]">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[38.7px]">
                      <div className="w-[54.5px] relative tracking-[-0.02em] leading-[23px] font-medium inline-block min-w-[54.5px]">
                        London
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start relative text-left text-3xs">
                        <div className="h-9 w-[129px] absolute !m-[0] top-[-33px] left-[0px] z-[1]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden hidden" />
                        </div>
                        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] z-[2]">
                          <p className="m-0 whitespace-pre-wrap"> People : 7</p>
                          <p className="m-0 whitespace-pre-wrap">{`       Date                   :  9th Feb `}</p>
                        </div>
                        <img
                          className="h-[9px] w-2 absolute !m-[0] bottom-[-1px] left-[-1px] z-[3]"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[80.5px] flex flex-col items-start justify-start gap-[18.6px] text-left text-3xs">
                    <div className="self-stretch h-[55.8px] mq450:h-[55.799999999999955px]">
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
                            fontSize: 10,
                          },
                          input: {
                            color: "#000",
                            fontSize: 10,
                            textAlign: "center",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            height: 55.799999999999955,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            placeholder: "Sep 9, 2024",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img
                                width="12px"
                                height="12.7px"
                                src="/simplelineiconscalender.svg"
                              />
                            ),
                          },
                        }}
                      />
                    </div>
                    <div className="w-[65px] h-[15px] flex flex-row items-start justify-start py-0 px-[9px] box-border">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start relative">
                        <div className="h-[21px] w-[82px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[-18px] rounded-4xs bg-paleturquoise" />
                        <div className="self-stretch flex-1 relative tracking-[-0.02em] leading-[150%] z-[1]">
                          Book Now
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
          className="h-[12.8px] w-[12.8px] relative hidden z-[5]"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </LocalizationProvider>
  );
};

export default RectangleComponent;
