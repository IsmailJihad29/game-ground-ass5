/* eslint-disable @typescript-eslint/no-unused-expressions */
import { AutoComplete, Input, Pagination, Select } from "antd";

import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../shared/NoDataFound";
import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import circle from "../../assets/circle.svg";
import grid from "../../assets/grid.svg";
import Loading from "../../shared/Loading";
import useDebounce from "../../hooks/useDebounce";

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
    return <NoDataFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-slate-500">
      <div className="container mx-auto py-16">
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-extrabold  mb-4 font-title text-title">
            Explore Premium Sports Venues
          </h3>
          <p className="text-lg px-12 max-w-3xl mx-auto text-gray-700 font-light font-primary leading-relaxed">
            Find the perfect facility for your sports event with our advanced
            search and filter options. Easily compare prices and choose venues
            that fit your budget and preferences.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="my-8 flex justify-end gap-4">
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
          <div className="flex flex-row mx-auto flex-wrap justify-center items-center gap-16">
            {facilityData?.map((item: TFacilities, index: number) => (
              <div
                key={index}
                className="w-[270px] relative transform transition duration-300 hover:scale-105"
              >
                <div className="group relative overflow-hidden w-[270px] h-[350px] bg-slate-300 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:rotate-1 hover:-translate-y-2">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    src={item.image ? item.image : logo}
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-center text-darkViolet text-xl font-primary text-title">
                      ${item.pricePerHour}
                    </p>
                    <p className="text-gray-500 text-center font-title text-hero">
                      {item.name.substring(0, 20)}
                    </p>
                    <p className="text-center py-4 px-6 text-lightBlue dark:text-strongCyan font-primary text-title">
                      {item.description.length > 50
                        ? `${item.description.substring(0, 50)}...`
                        : item.description}
                    </p>
                    <button
                      onClick={() => navigate(`/facility-listing/${item._id}`)}
                      className="relative border  z-10 mx-auto w-full text-center py-3 px-6 bg-gradient-to-r from-strongCyan to-lightBlue text-hero font-semibold rounded-full shadow-lg transition-transform duration-300 hover:from-lightBlue hover:to-strongCyan hover:scale-105 hover:shadow-xl transform active:scale-95"
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
          />
        </div>
      </div>
    </div>
  );
};

export default FacilityListingTable;
