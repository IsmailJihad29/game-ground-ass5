/* eslint-disable @typescript-eslint/no-explicit-any */

// import {
//   Table,
//   Button,
//   Space,
//   Popconfirm,
//   Modal,
//   Typography,
//   Divider,
//   Tag,
// } from "antd";
// import { useState, useEffect } from "react";
// import {
//   useCancelBookingMutation,
//   useGetAllUserBookingQuery,
// } from "../../../redux/api/facility/facilityApi";
// import Loading from "../../shared/Loading";
// import { toast } from "sonner";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// const { Title, Text } = Typography;

// const UserBooking = () => {
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [, setTotal] = useState(0); // Properly initialize total

//   const { data, isFetching } = useGetAllUserBookingQuery({ page, limit });
//   const [cancelBooking] = useCancelBookingMutation();
//   const [selectedBooking, setSelectedBooking] = useState<any>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     if (
//       data &&
//       data.data &&
//       data.data.meta &&
//       typeof data.data.meta.total === "number"
//     ) {
//       setTotal(data.data.meta.total);
//     } else {
//       setTotal(0); // Default to 0 if meta or total is undefined
//     }
//   }, [data]);

//   if (isFetching || !data || !data.data || !data.data.result) {
//     return <Loading />;
//   }

//   const truncateText = (text: string, length: number) => {
//     return text.length > length ? `${text.substring(0, length)}...` : text;
//   };

//   const handleCancelBooking = async (bookingId: string) => {
//     try {
//       const res = await cancelBooking(bookingId);

//       if (res?.data?.success) {
//         toast.success(res.data.message || "Booking canceled successfully", {
//           duration: 2000,
//         });
//       } else if (res?.error) {
//         if ("data" in res.error) {
//           const baseQueryError = res.error as FetchBaseQueryError;
//           const errorMessage =
//             (baseQueryError.data as { message?: string }).message ||
//             "An unexpected error occurred";
//           toast.error(errorMessage, { duration: 2000 });
//         } else {
//           toast.error("An unexpected error occurred", { duration: 2000 });
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("An unexpected error occurred", { duration: 2000 });
//     }
//   };

//   const handleViewDetails = (booking: any) => {
//     setSelectedBooking(booking);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//     setSelectedBooking(null);
//   };

//   const getPaymentStatusTag = (status: string) => {
//     switch (status) {
//       case "paid":
//         return <Tag color="success">Paid</Tag>;
//       case "pending":
//         return <Tag color="warning">Pending</Tag>;
//       case "failed":
//         return <Tag color="error">Failed</Tag>;
//       default:
//         return <Tag color="default">Unknown</Tag>;
//     }
//   };

//   const columns = [
//     {
//       title: "No.",
//       key: "index",
//       render: (_: any, __: any, index: number) =>
//         (page - 1) * limit + index + 1,
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Start Time",
//       dataIndex: "startTime",
//       key: "startTime",
//     },
//     {
//       title: "End Time",
//       dataIndex: "endTime",
//       key: "endTime",
//     },
//     {
//       title: "Facility Name",
//       dataIndex: ["facility", "name"],
//       key: "facilityName",
//     },
//     {
//       title: "Location",
//       dataIndex: ["facility", "location"],
//       key: "location",
//       render: (location: string) => truncateText(location, 20),
//     },
//     {
//       title: "Payable Amount",
//       dataIndex: "payableAmount",
//       key: "payableAmount",
//       render: (amount: number) => `$${amount.toFixed(2)}`,
//     },
//     {
//       title: "Booking Status",
//       dataIndex: "isBooked",
//       key: "isBooked",
//       render: (isBooked: string) => (
//         <span
//           className={`${
//             isBooked === "confirmed" ? "text-green-500" : "text-rose-500"
//           } `}
//         >
//           {isBooked}
//         </span>
//       ),
//     },
//     {
//       title: "Payment Status",
//       dataIndex: "paymentStatus",
//       key: "paymentStatus",
//       render: (paymentStatus: string) => getPaymentStatusTag(paymentStatus),
//     },
//     {
//       title: "Transaction ID",
//       dataIndex: "transactionId",
//       key: "transactionId",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Popconfirm
//             title="Are you sure you want to cancel this booking?"
//             onConfirm={() => handleCancelBooking(record._id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button danger>Cancel Booking</Button>
//           </Popconfirm>
//           <Button onClick={() => handleViewDetails(record)} type="primary">
//             View Details
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   const dataSource =
//     data?.data?.result?.map((booking: any) => ({
//       key: booking._id,
//       ...booking,
//     })) || [];

//   const handleTableChange = (pagination: any) => {
//     setPage(pagination.current);
//     setLimit(pagination.pageSize);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">User Bookings</h1>
//       <Table
//         columns={columns}
//         dataSource={dataSource}
//         pagination={{
//           current: page,
//           pageSize: limit,
//           total: data?.data?.meta?.total || 0, // Fallback to 0 if undefined
//         }}
//         onChange={handleTableChange}
//         loading={isFetching}
//       />
//       <Modal
//         title="Booking Details"
//         open={modalVisible}
//         onCancel={handleCloseModal}
//         footer={null}
//         style={{ top: 20, padding: "20px" }}
//         width={800}
//       >
//         {selectedBooking && (
//           <div style={{ fontSize: "16px", color: "#333" }}>
//             <Title level={4} style={{ marginBottom: "20px" }}>
//               Booking Information
//             </Title>
//             <Divider />
//             <Text strong>Date:</Text> {selectedBooking.date}
//             <br />
//             <Text strong>Start Time:</Text> {selectedBooking.startTime}
//             <br />
//             <Text strong>End Time:</Text> {selectedBooking.endTime}
//             <br />
//             <Text strong>Facility Name:</Text> {selectedBooking.facility.name}
//             <br />
//             <Text strong>Location:</Text> {selectedBooking.facility.location}
//             <br />
//             <Text strong>Payable Amount:</Text> $
//             {selectedBooking.payableAmount.toFixed(2)}
//             <br />
//             <Text strong>Booking Status:</Text> {selectedBooking.isBooked}
//             <br />
//             <Text strong>Payment Status:</Text> {selectedBooking.paymentStatus}
//             <br />
//             <Text strong>Transaction ID:</Text> {selectedBooking.transactionId}
//             <br />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default UserBooking;

import  { useState, useEffect } from "react";
import { Table, Button, Space, Popconfirm, Modal, Typography, Divider, Tag } from "antd";
import { useCancelBookingMutation, useGetAllUserBookingQuery } from "../../../redux/api/facility/facilityApi";
import Loading from "../../shared/Loading";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const { Title, Text } = Typography;

const UserBooking = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [, setTotal] = useState(0);

  const { data, isFetching } = useGetAllUserBookingQuery({ page, limit });
  const [cancelBooking] = useCancelBookingMutation();
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data && data.data && data.data.meta && typeof data.data.meta.total === "number") {
      setTotal(data.data.meta.total);
    } else {
      setTotal(0); // Default to 0 if meta or total is undefined
    }
  }, [data]);

  if (isFetching || !data || !data.data || !data.data.result) {
    return <Loading />;
  }

  const truncateText = (text: string, length: number) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  const handleCancelBooking = async (bookingId: string) => {
    try {
      const res = await cancelBooking(bookingId);
      if (res?.data?.success) {
        toast.success(res.data.message || "Booking canceled successfully", {
          duration: 2000,
        });
      } else if (res?.error) {
        if ("data" in res.error) {
          const baseQueryError = res.error as FetchBaseQueryError;
          const errorMessage = (baseQueryError.data as { message?: string }).message || "An unexpected error occurred";
          toast.error(errorMessage, { duration: 2000 });
        } else {
          toast.error("An unexpected error occurred", { duration: 2000 });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred", { duration: 2000 });
    }
  };

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedBooking(null);
  };
console.log(data);
  const getPaymentStatusTag = (status: string) => {
    switch (status) {
      case "paid":
        return <Tag color="success">Paid</Tag>;
      case "pending":
        return <Tag color="warning">Pending</Tag>;
      case "failed":
        return <Tag color="error">Failed</Tag>;
      default:
        return <Tag color="default">Unknown</Tag>;
    }
  };

  const columns = [
    {
      title: "No.",
      key: "index",
      render: (_: any, __: any, index: number) => (page - 1) * limit + index + 1,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Facility Name",
      dataIndex: ["facility", "name"],
      key: "facilityName",
    },
    {
      title: "Location",
      dataIndex: ["facility", "location"],
      key: "location",
      render: (location: string) => truncateText(location, 20),
    },
    {
      title: "Payable Amount",
      dataIndex: "payableAmount",
      key: "payableAmount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Booking Status",
      dataIndex: "isBooked",
      key: "isBooked",
      render: (isBooked: string) => (
        <span className={`${isBooked === "confirmed" ? "text-green-500" : "text-rose-500"}`}>
          {isBooked}
        </span>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus: string) => getPaymentStatusTag(paymentStatus),
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure you want to cancel this booking?"
            onConfirm={() => handleCancelBooking(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Cancel Booking</Button>
          </Popconfirm>
          <Button onClick={() => handleViewDetails(record)} type="primary">
            View Details
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource = data?.data?.result?.map((booking: any) => ({
    key: booking._id,
    ...booking,
  })) || [];

  const handleTableChange = (pagination: any) => {
    setPage(pagination.current);
    setLimit(pagination.pageSize);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Bookings</h1>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: limit,
          total: data?.data?.meta?.total || 0,
        }}
        onChange={handleTableChange}
        loading={isFetching}
      />
      <Modal
        title="Booking Details"
        open={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
        style={{ top: 20, padding: "20px" }}
        width={800}
      >
        {selectedBooking && (
          <div style={{ fontSize: "16px", color: "#333" }}>
            <Title level={4} style={{ marginBottom: "20px" }}>
              Booking Information
            </Title>
            <Divider />
            <Text strong>Date:</Text> {selectedBooking.date}
            <br />
            <Text strong>Start Time:</Text> {selectedBooking.startTime}
            <br />
            <Text strong>End Time:</Text> {selectedBooking.endTime}
            <br />
            <Text strong>Facility Name:</Text> {selectedBooking.facility.name}
            <br />
            <Text strong>Location:</Text> {selectedBooking.facility.location}
            <br />
            <Text strong>Payable Amount:</Text> ${selectedBooking.payableAmount.toFixed(2)}
            <br />
            <Text strong>Booking Status:</Text> {selectedBooking.isBooked}
            <br />
            <Text strong>Payment Status:</Text> {selectedBooking.paymentStatus}
            <br />
            <Text strong>Transaction ID:</Text> {selectedBooking.transactionId}
            <br />
            {/* Display User Information */}
            {selectedBooking.user && (
              <>
                <Divider />
                <Title level={5}>User Information</Title>
                <Text strong>Name:</Text> {selectedBooking.user.name}
                <br />
                <Text strong>Email:</Text> {selectedBooking.user.email}
                <br />
                <Text strong>Phone:</Text> {selectedBooking.user.phone}
                <br />
              </>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserBooking;
