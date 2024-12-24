/* eslint-disable @typescript-eslint/no-unused-expressions */
import { AutoComplete, Input, Pagination, Select } from "antd";
import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import circle from "../../assets/circle.svg";
import grid from "../../assets/grid.svg";

import useDebounce from "../../hooks/useDebounce";
import "aos/dist/aos.css";
import AOS from "aos";
import Loading from "../shared/Loading";

interface TFacilities {
  index: number;
  _id: string;
  image: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
}

const FacilityListingTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: facilities,
    isLoading,
    isFetching,
  } = useGetAllFacilityQuery({
    page,
    limit,
    isDeleted: false,
    sortBy,
    searchTerm: debouncedSearchTerm,
  });

  const facilityData: TFacilities[] = facilities?.data || [];
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFetching && facilities) {
      setTotal(facilities?.meta?.total);
    }
    AOS.init({ duration: 800, once: true });
  }, [isFetching, facilities]);

  const [searchItem, setSearchItem] = useState(false);

  const handleSortChange = (value: number) => {
    setSearchItem(false);

    if (value === 2) {
      setSortBy("-pricePerHour");
    } else if (value === 1) {
      setSortBy("pricePerHour");
    } else if (value === 0) {
      setSearchItem(true);
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  if (facilityData?.length === 0) {
    return <Loading/>
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto py-16">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h3 className="text-title">
            Explore Premium Sports Venues
          </h3>
          <p className="text-subtitle">
            Find the perfect facility for your sports event with our advanced
            search and filter options. Easily compare prices and choose venues
            that fit your budget and preferences.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="my-8 flex justify-end gap-4" data-aos="fade-up">
          <Select
            style={{ height: "40px", width: "250px" }}
            placeholder="Search, Filter or Sort"
            options={[
              { value: 0, label: "Search items" },
              { value: 1, label: "Sort by price low to high" },
              { value: 2, label: "Sort by price high to low" },
            ]}
            onChange={handleSortChange}
          />
          {searchItem && (
            <AutoComplete style={{ width: 300 }} onChange={handleSearch}>
              <Input.Search
                size="large"
                placeholder="Search Here"
                enterButton
              />
            </AutoComplete>
          )}
        </div>

        {/* Card Section */}
        <div>
          <div
            className="flex flex-row mx-auto flex-wrap justify-center items-center gap-16"
            data-aos="fade-up"
          >
            {facilityData?.map((item: TFacilities, index: number) => (
              <div
                key={index}
                className="w-[270px] relative transform transition duration-300 hover:scale-105"
                data-aos="zoom-in"
              >
                <div className="group relative overflow-hidden w-[270px] h-[350px] bg-slate-300 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:rotate-1 hover:-translate-y-2">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    src={item.image ? item.image : logo}
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white dark:bg-gray-800 rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gray-500 text-center font-title text-hero text-xl">
                      {item.name.substring(0, 20)}
                    </p>
                    <p className="font-semibold text-center  text-lg font-primary text-hero">
                      ${item.pricePerHour}
                    </p>
                    <p className="text-center py-4 px-6  text-gray-700 dark:text-white font-primary ">
                      {item.description.length > 50
                        ? `${item.description.substring(0, 50)}...`
                        : item.description}
                    </p>
                    <button
                      onClick={() => navigate(`/facility-listing/${item._id}`)}
                      className="button-secondary w-full"
                    >
                      View Details
                    </button>
                  </div>

                  {/* Decorative Icons */}
                  <img
                    className="absolute -left-10 -bottom-10 transform scale-75 opacity-50"
                    src={circle}
                    alt="circle"
                  />
                  <img
                    className="absolute -right-2 -top-4 w-9 opacity-50"
                    src={grid}
                    alt="grid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="my-8 flex justify-end">
          <Pagination
            current={page}
            pageSize={limit}
            total={total}
            onChange={(p, pageSize) => {
              setPage(p);
              setLimit(pageSize);
            }}
            showSizeChanger
            showTotal={(total) => `Total ${total} items`}
            className="text-gray-700 dark:text-white pagination-dark-mode"
          />
        </div>
      </div>

      <style>
        {`
          .pagination-dark-mode .ant-pagination-item {
            color: #fff !important;
          }
          .pagination-dark-mode .ant-pagination-item-active {
            background: #1a202c !important;
            border-color: #1a202c !important;
          }
          .pagination-dark-mode .ant-pagination-prev,
          .pagination-dark-mode .ant-pagination-next {
            color: #fff !important;
          }
        `}
      </style>
    </div>
  );
};

export default FacilityListingTable;
