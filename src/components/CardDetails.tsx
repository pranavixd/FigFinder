import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import FrameComponent13 from "./FrameComponent13";
import RectangleComponent from "./RectangleComponent";

export type CardDetailsType = {
  className?: string;
  teenyiconsdownOutline?: string;
  propTop?: string;
  propHeight?: string;
  rectangle320?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const CardDetails: FunctionComponent<CardDetailsType> = ({
  className = "",
  teenyiconsdownOutline,
  propTop,
  propHeight,
  rectangle320,
  image,
  image1,
  image2,
}) => {
  const [londonPeopleDateValue, setLondonPeopleDateValue] = useState(
    new Date("2024-09-05")
  );
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState(
    new Date("2024-09-05")
  );
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] = useState(
    new Date("2024-09-05")
  );
  const [frameDateTimePicker2Value, setFrameDateTimePicker2Value] = useState(
    new Date("2024-09-05")
  );
  const navigate = useNavigate();

  const onSearchYourInterestsClick = useCallback(() => {
    navigate("/dashboard-options");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`flex-1 flex flex-col items-start justify-start gap-[29px] max-w-[calc(100%_-_260px)] text-left text-17xl text-black font-poppins mq750:max-w-full ${className}`}
      >
        <div className="w-[784px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
          <div className="flex-1 rounded-11xl bg-white flex flex-row items-start justify-between py-[19px] pl-[22px] pr-5 box-border max-w-full gap-5">
            <div className="h-[67px] w-[728px] relative rounded-11xl bg-white hidden max-w-full" />
            <div className="w-[282px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <img
                  className="h-6 w-[26px] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/materialsymbolslightsearch.svg"
                />
                <input
                  className="w-[187px] [border:none] [outline:none] font-poppins text-lg-5 bg-[transparent] h-7 relative tracking-[-0.02em] leading-[150%] text-lightgray text-center inline-block p-0 cursor-pointer z-[1]"
                  placeholder="Search your interests"
                  type="text"
                  onClick={onSearchYourInterestsClick}
                />
              </div>
            </div>
            <img
              className="h-7 w-[29px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/hugeiconsbot.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
          <div className="w-[760px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[160%] font-light font-[inherit] whitespace-pre-wrap inline-block max-w-full mq450:text-3xl mq450:leading-[35px] mq1050:text-10xl mq1050:leading-[46px]">
              Welcome back, Pranavi Ready to plan your next adventure ?
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-center text-xl">
            <div className="self-stretch h-[305px] relative max-w-full mq750:h-auto mq750:min-h-[305]">
              <FrameComponent13
                propTop={propTop}
                propHeight={propHeight}
                teenyiconsdownOutline={teenyiconsdownOutline}
              />
              <div
                className="absolute top-[105px] left-[37px] w-[622px] h-[182px] overflow-y-auto flex flex-col items-start justify-start pt-[11px] pb-[19px] pl-0 pr-[3px] box-border gap-7 max-w-full z-[2] text-base mq750:h-auto"
                data-scroll-to="frameContainer"
              >
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px] shrink-0 max-w-full">
                  <div className="self-stretch rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border flex flex-row items-end justify-between pt-[17px] pb-[18px] pl-[18px] pr-[27px] max-w-full gap-5 mq750:flex-wrap">
                    <div className="h-[65px] w-[619px] relative rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="flex flex-row items-start justify-start gap-[21px]">
                      <img
                        className="h-[26px] w-[26px] relative overflow-hidden shrink-0 min-h-[26px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/phclocklight-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="relative tracking-[-0.02em] leading-[150%] z-[1]">
                          Beach Getaway in Miami
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-3 text-sm">
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[126px] z-[1]">
                          September 5, 2024
                        </div>
                      </div>
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/simplelineiconscalender.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[65px]">
                    <DatePicker
                      value={londonPeopleDateValue}
                      onChange={(newValue: any) => {
                        setLondonPeopleDateValue(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "#aaa9a9",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "#aaa9a9" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#aaa9a9",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "#000",
                          fontSize: 14,
                        },
                        input: {
                          color: "#000",
                          fontSize: 14,
                          textAlign: "center",
                          fontWeight: "400",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: 65,
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
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="26px"
                              height="26px"
                              src="/phclocklight-1.svg"
                            />
                          ),
                        },
                      }}
                      label="Beach Getaway in Miami"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px] shrink-0">
                  <div className="self-stretch h-[65px]">
                    <DatePicker
                      value={frameDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setFrameDateTimePickerValue(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "#aaa9a9",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "#aaa9a9" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#aaa9a9",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "#000",
                          fontSize: 14,
                        },
                        input: {
                          color: "#000",
                          fontSize: 14,
                          textAlign: "center",
                          fontWeight: "400",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: 65,
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
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="22px"
                              height="22px"
                              src="/simplelineiconscalender-3.svg"
                            />
                          ),
                        },
                      }}
                      label="Beach Getaway in Miami"
                    />
                  </div>
                  <div className="self-stretch h-[65px]">
                    <DatePicker
                      value={frameDateTimePicker1Value}
                      onChange={(newValue: any) => {
                        setFrameDateTimePicker1Value(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "#aaa9a9",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "#aaa9a9" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#aaa9a9",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "#000",
                          fontSize: 14,
                        },
                        input: {
                          color: "#000",
                          fontSize: 14,
                          textAlign: "center",
                          fontWeight: "400",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: 65,
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
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="22px"
                              height="22px"
                              src="/simplelineiconscalender.svg"
                            />
                          ),
                        },
                      }}
                      label="Beach Getaway in Miami"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px] shrink-0 max-w-full">
                  <div className="self-stretch rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[19px] pb-[18px] pl-16 pr-7 max-w-full gap-5 mq750:flex-wrap">
                    <div className="h-[65px] w-[619px] relative rounded-xl bg-white border-darkgray-100 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="w-48 relative tracking-[-0.02em] leading-[150%] inline-block z-[1]">
                      Beach Getaway in Miami
                    </div>
                    <div className="w-40 flex flex-row items-start justify-start gap-3 text-sm">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="self-stretch relative tracking-[-0.02em] leading-[150%] z-[1]">
                          September 5, 2024
                        </div>
                      </div>
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/simplelineiconscalender.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[65px]">
                    <DatePicker
                      value={frameDateTimePicker2Value}
                      onChange={(newValue: any) => {
                        setFrameDateTimePicker2Value(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "#aaa9a9",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "#aaa9a9" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#aaa9a9",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "#000",
                          fontSize: 14,
                        },
                        input: {
                          color: "#000",
                          fontSize: 14,
                          textAlign: "center",
                          fontWeight: "400",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: 65,
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
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="22px"
                              height="22px"
                              src="/simplelineiconscalender.svg"
                            />
                          ),
                        },
                      }}
                      label="Beach Getaway in Miami"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[13px] box-border max-w-full">
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
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CardDetails;
