
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   useAddBookingsMutation,
//   useCheckFacilityAvailabilityQuery,
//   useGetFacilityDetailsQuery,
// } from "../../redux/api/facility/facilityApi";
// import {
//   Button,
//   DatePicker,
//   DatePickerProps,
//   TimePicker,
//   TimePickerProps,
// } from "antd";
// import { TFacility } from "../../types/user";
// import dayjs, { Dayjs } from "dayjs";
// import { useState } from "react";
// import { toast } from "sonner";
// import Loading from "../../shared/Loading";
// import { useAppSelector } from "../../redux/hooks";
// import { selectCurrentUser } from "../../redux/features/userSlice";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// type TOptions = {
//   id?: string;
//   date?: string;
// };

// type TimeOptions = {
//   startTime?: string;
//   endTime?: string;
// };

// const BookingForm = () => {
//   const { user } = useAppSelector(selectCurrentUser);
//   const { id } = useParams();
//   const { data, isError } = useGetFacilityDetailsQuery(id);
//   const facility: TFacility = data?.data?.[0];
//   const [options, setOptions] = useState<TOptions | null>(null);
//   const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(null);
//   const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(null);
//   const [timeOptions, setTimeOptions] = useState<TimeOptions>({});
//   const [isCheckAvailability, setIsCheckAvailability] = useState(false);
//   const [dates, setDates] = useState<Dayjs | null>(null);
//   const navigate = useNavigate();
//   const { data: checkAvailabilityData, isFetching } =
//     useCheckFacilityAvailabilityQuery(options, {
//       skip: !isCheckAvailability,
//     });
//   const [addBookings] = useAddBookingsMutation();

//   const onChange: DatePickerProps["onChange"] = (date) => {
//     if (date) {
//       setDates(date);
//       const formattedDate = dayjs(date).format("YYYY-MM-DD");
//       const optionData = { id, date: formattedDate };
//       setOptions(optionData);
//     } else {
//       toast.warning("Please select a date.");
//     }
//   };

//   const handleOnChangeDate = () => {
//     if (options) {
//       setIsCheckAvailability(true);
//       setTimeout(() => {
//         setIsCheckAvailability(false);
//       }, 3000);
//     }
//   };

//   const onChangeStartTime: TimePickerProps["onChange"] = (time) => {
//     if (time) {
//       const formattedTime = time.format("HH:mm");
//       setTimeOptions((prev) => ({
//         ...prev,
//         startTime: formattedTime,
//       }));
//       setStartTimeValue(time);
//     } else {
//       toast.warning("No start time selected.");
//     }
//   };

//   const onChangeEndTime: TimePickerProps["onChange"] = (time) => {
//     if (time) {
//       const formattedTime = time.format("HH:mm");
//       setTimeOptions((prev) => ({
//         ...prev,
//         endTime: formattedTime,
//       }));
//       setEndTimeValue(time);
//     } else {
//       toast.warning("No end time selected.");
//     }
//   };

//   const handleProceed = async () => {

    
//     const { startTime, endTime } = timeOptions;

//     console.log("User:", user);
//     console.log("Start Time:", startTime);
//     console.log("End Time:", endTime);

//     if (!user) {
//       toast.warning("Please login first to make a booking.");
//       navigate("/login", { replace: true });
//     } else if (!startTime || !endTime) {
//       toast.error("Please select both start and end time.");
//       return;
//     } else if (startTime >= endTime) {
//       toast.warning("Start time must be earlier than end time.");
//       return;
//     }

//     const proceedOptions = {
//        facility: id,
//       date: options?.date,
//       startTime: startTime,
//       endTime: endTime,
//     };

//     const res = await addBookings(proceedOptions);

//     if (res?.error) {
//       if ("data" in res.error) {
//         const baseQueryError = res.error as FetchBaseQueryError;
//         const errorMessage =
//           (baseQueryError.data as { message?: string }).message ||
//           "An unexpected error occurred";
//         toast.error(errorMessage);
//       } else {
//         toast.error("An unexpected error occurred.");
//       }
//     } else if (res?.data?.success && res?.data?.data?.payment_url) {
//       window.location.href = res.data.data.payment_url;
//     }
//   };

//   if (isFetching) {
//     return <Loading />;
//   }

//   if (isError) {
//     return <p>Error Occurred</p>;
//   }

//   return (
//     <div className="relative min-h-screen bg-gray-100 dark:bg-gray-800">
//       {/* Hero Section */}
//       <div
//         className="w-full h-80 bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url(${facility?.image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
//           <h1 className="text-4xl text-white font-bold">
//             {facility?.name}
//           </h1>
//           <p className="text-2xl text-white mt-2">
//             ${facility?.pricePerHour} per hour
//           </p>
//         </div>
//       </div>

//       {/* Booking Form Section */}
//       <div className="container mx-auto px-4 lg:px-8 py-12 relative">
//         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mx-auto max-w-4xl -mt-28">
//           <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
//             Book Your Slot
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Date Picker */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
//                 Pick Your Date
//               </h3>
//               <DatePicker
//                 value={dates}
//                 onChange={onChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
//               />
//               <Button
//                 type="primary"
//                 className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
//                 onClick={handleOnChangeDate}
//               >
//                 Check Availability
//               </Button>
//             </div>

//             {/* Time Pickers */}
//             {checkAvailabilityData && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
//                   Select Time Slot
//                 </h3>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className="block text-gray-600 dark:text-gray-300 mb-2">
//                       Start Time
//                     </label>
//                     <TimePicker
//                       value={startTimeValue}
//                       onChange={onChangeStartTime}
//                       format="HH:mm"
//                       className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-600 dark:text-gray-300 mb-2">
//                       End Time
//                     </label>
//                     <TimePicker
//                       value={endTimeValue}
//                       onChange={onChangeEndTime}
//                       format="HH:mm"
//                       className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
//                     />
//                   </div>
//                 </div>

//                 <Button
//                   type="primary"
//                   className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg"
//                   onClick={handleProceed}
//                 >
//                   Proceed to Payment
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;


import { useNavigate, useParams } from "react-router-dom";
import {
  useAddBookingsMutation,
  useCheckFacilityAvailabilityQuery,
  useGetFacilityDetailsQuery,
} from "../../redux/api/facility/facilityApi";
import {
  Button,
  DatePicker,
  DatePickerProps,
  TimePicker,
  TimePickerProps,
} from "antd";
import { TFacility } from "../../types/user";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { toast } from "sonner";
import Loading from "../../shared/Loading";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/userSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type TOptions = {
  id?: string;
  date?: string;
};

type TimeOptions = {
  startTime?: string;
  endTime?: string;
};

const BookingForm = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const { id } = useParams();
  const { data, isError } = useGetFacilityDetailsQuery(id);
  const facility: TFacility = data?.data?.[0];
  const [options, setOptions] = useState<TOptions | null>(null);
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(null);
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(null);
  const [timeOptions, setTimeOptions] = useState<TimeOptions>({});
  const [isCheckAvailability, setIsCheckAvailability] = useState(false);
  const [dates, setDates] = useState<Dayjs | null>(null);
  const navigate = useNavigate();
  const { data: checkAvailabilityData, isFetching } =
    useCheckFacilityAvailabilityQuery(options, {
      skip: !isCheckAvailability,
    });
  const [addBookings] = useAddBookingsMutation();

  const onChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      setDates(date);
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const optionData = { id, date: formattedDate };
      setOptions(optionData);
    } else {
      toast.warning("Please select a date.");
    }
  };

  const handleOnChangeDate = () => {
    if (options) {
      setIsCheckAvailability(true);
      setTimeout(() => {
        setIsCheckAvailability(false);
      }, 3000);
    }
  };

  const onChangeStartTime: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm");
      setTimeOptions((prev) => ({
        ...prev,
        startTime: formattedTime,
      }));
      setStartTimeValue(time);
    } else {
      toast.warning("No start time selected.");
    }
  };

  const onChangeEndTime: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm");
      setTimeOptions((prev) => ({
        ...prev,
        endTime: formattedTime,
      }));
      setEndTimeValue(time);
    } else {
      toast.warning("No end time selected.");
    }
  };

  const handleProceed = async () => {
    const { startTime, endTime } = timeOptions;

    if (!user) {
      toast.warning("Please login first to make a booking.");
      navigate("/login", { replace: true });
    } else if (!startTime || !endTime) {
      toast.error("Please select both start and end time.");
      return;
    } else if (startTime >= endTime) {
      toast.warning("Start time must be earlier than end time.");
      return;
    }

    const proceedOptions = {
      facility: id,
      date: options?.date,
      startTime: startTime,
      endTime: endTime,
    };

    const res = await addBookings(proceedOptions);

    if (res?.error) {
      if ("data" in res.error) {
        const baseQueryError = res.error as FetchBaseQueryError;
        const errorMessage =
          (baseQueryError.data as { message?: string }).message ||
          "An unexpected error occurred";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } else if (res?.data?.success && res?.data?.data?.paymentSession.payment_url) {
      window.location.href = res.data.data.paymentSession.payment_url
    }
  };

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error Occurred</p>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Hero Section */}
      <div
        className="w-full h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${facility?.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold">
            {facility?.name}
          </h1>
          <p className="text-2xl text-white mt-2">
            ${facility?.pricePerHour} per hour
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 relative">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mx-auto max-w-4xl -mt-28">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            Book Your Slot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date Picker */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Pick Your Date
              </h3>
              <DatePicker
                value={dates}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              />
              <Button
                type="primary"
                className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                onClick={handleOnChangeDate}
              >
                Check Availability
              </Button>
            </div>

            {/* Time Pickers */}
            {checkAvailabilityData && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Select Time Slot
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-2">
                      Start Time
                    </label>
                    <TimePicker
                      value={startTimeValue}
                      onChange={onChangeStartTime}
                      format="HH:mm"
                      className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-2">
                      End Time
                    </label>
                    <TimePicker
                      value={endTimeValue}
                      onChange={onChangeEndTime}
                      format="HH:mm"
                      className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    />
                  </div>
                </div>

                <div>
                <Button
                  type="primary"
                  className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg"
                  onClick={handleProceed}
                >
                  Proceed to Payment
                </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
