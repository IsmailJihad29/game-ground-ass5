
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddBookingsMutation,
  useCheckFacilityAvailabilityQuery,
  useGetFacilityDetailsQuery,
} from "../../redux/api/facility/facilityApi";
import {
  DatePicker,
  DatePickerProps,
  TimePicker,
  TimePickerProps,
} from "antd";
import { TFacility } from "../../types/user";
import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Loading from "../shared/Loading";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/userSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // React Icons
import AOS from "aos"; // AOS import
import "aos/dist/aos.css"; // AOS CSS

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
  const { data, isError, isLoading } = useGetFacilityDetailsQuery(id);
  const facility: TFacility = data?.data?.[0];
  const [options, setOptions] = useState<TOptions | null>(null);
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(null);
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(null);
  const [timeOptions, setTimeOptions] = useState<TimeOptions>({});
  const [isCheckAvailability, setIsCheckAvailability] = useState(false);
  const [dates, setDates] = useState<Dayjs | null>(null);
  const navigate = useNavigate();
  const { data: checkAvailabilityData,  } =
    useCheckFacilityAvailabilityQuery(options, {
      skip: !isCheckAvailability,
    });
  const [addBookings] = useAddBookingsMutation();

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

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
    } else if (
      res?.data?.success &&
      res?.data?.data?.paymentSession.payment_url
    ) {
      window.location.href = res.data.data.paymentSession.payment_url;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error Occurred</p>;
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="w-full h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${facility?.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center"></div>
      </div>

      {/* Booking Form Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 relative">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mx-auto w-[80%] -mt-28">
          <h2 className="text-title text-center mb-8">
            Book Your Slot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Facility Image Section */}
            <div className="relative" data-aos="fade-right">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-300 to-green-400 rounded-3xl blur-xl opacity-40"
              ></div>
              <div className="relative z-10">
                <img
                  className="w-3/4 mx-auto rounded-xl shadow-lg"
                  src={facility?.image}
                  alt={facility?.name}
                />
              </div>
            </div>

            {/* Booking Form Section */}
            <div data-aos="fade-left">
              <div>
                <h3 className="text-2xl font-bold mt-4">{facility?.name}</h3>
                <p className="text-yellow-500 text-lg font-semibold">
                  ${facility?.pricePerHour} / Hour
                </p>
                <p className="text-gray-600 mt-2 ">{facility?.description}</p>
              </div>
              <h3 className="text-lg font-semibold font-title text-hero mb-2">
                Pick Your Date
              </h3>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-xl text-blue-500" />
                <DatePicker
                  value={dates}
                  onChange={onChange}
                  className="w-full p-3 border border-gray-300 rounded-lg dark:bg-white dark:border-gray-600 dark:text-white"
                />
              </div>
              <button
                className="button-secondary w-full mt-5"
                onClick={handleOnChangeDate}
              >
                Check Availability
              </button>
              {checkAvailabilityData && (
                <div>
                  <h3 className="text-lg font-semibold font-title text-hero mb-2 mt-2">
                    Select Time Slot
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-subtitle mb-2">
                        Start Time
                      </label>
                      <div className="flex items-center">
                        <FaClock className="mr-2 text-xl text-green-500" />
                        <TimePicker
                          value={startTimeValue}
                          onChange={onChangeStartTime}
                          format="HH"
                          className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-subtitle mb-2">
                        End Time
                      </label>
                      <div className="flex items-center">
                        <FaClock className="mr-2 text-xl text-red-500" />
                        <TimePicker
                          value={endTimeValue}
                          onChange={onChangeEndTime}
                          format="HH"
                          className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      className="w-full mt-4 button-secondary"
                      onClick={handleProceed}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
