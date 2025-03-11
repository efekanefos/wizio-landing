import React from "react";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
import CloseIcon from "../newIcons/CloseIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import RoomViewIcon from "../svg/RoomViewIcon";
import project360 from "../svg/project_360_search.png";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
import { Scrollbars } from "react-custom-scrollbars-2";

const UnitCompareList = () => {
  const properties = [
    {
      project: "Limassol Green",
      unit: "305",
      price: 17350,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      garden: 18,
      parking: 1,
    },
    {
      project: "Limassol Green",
      unit: "306",
      price: 17350,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      garden: 18,
      parking: 1,
    },
    {
      project: "Limassol Green",
      unit: "307",
      price: 17350,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      garden: 18,
      parking: 1,
    },
    {
      project: "Limassol Green",
      unit: "308",
      price: 17350,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      garden: 18,
      parking: 1,
    },
  ];
  return (
    <div>
      <div className="max-w-[1364px] mx-auto relative">
        {/* Buttons */}
        <div className="flex justify-end items-center gap-2 z-20 absolute top-5 right-0 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
          <div className="flex justify-center items-center w-12 h-12 border border-gray-200 rounded-full p-3 bg-white">
            <SendMessageIcon className={"w-6 h-6 fill-black translate-x-0.5"} />
          </div>
          <div className="flex justify-center items-center w-12 h-12 border border-gray-200 rounded-full p-3 bg-white">
            <ShareIcon className={"w-5 h-5 fill-black "} />
          </div>
          <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3 bg-white">
            <CloseIcon className={"w-3.5 h-3.5 fill-black "} />
          </div>
        </div>
      </div>

      <div className="max-w-[1364px] w-full mx-auto absolute top-24 left-1/2 translate-x-[-50%] z-20 max-2xl:pl-6 max-xl:pl-5 max-md:pl-4 max-sm:pl-3">
        {/* <div className="w-full overflow-x-auto scrollbar-custom rounded-2xl"> */}
        <div className="w-full rounded-2xl scrollbar-custom overflow-x-auto">
          <table className="w-full border-collapse border-x border-gray-200 min-w-[1362px] bg-white shadow-2xl ">
            <thead className="border-b border-gray-200 bg-black text-white ">
              <tr className="table-row ">
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-48">
                    <p className="text-sm font-semibold">Project</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="py-7 px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold">Unit</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold">Price</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Bedrooms</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Bathrooms</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Gross Area</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Net Area</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Garden</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-5">
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Parking</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="font-medium h-[77px]">
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.project}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">Unit {property.unit}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">€{property.price.toLocaleString()},00</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.bedrooms}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.bathrooms}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.grossArea}sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.netArea}sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.garden}sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-regular">{property.parking}</p>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-white border-b border-gray-200">
                <td className="h-[77px]">
                  <div className="flex justify-center items-center">
                    <p className="text-base font-semibold">Add Project</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    <p className="text-base font-semibold">Add Unit</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full z-20">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">View in</p>
          <p className="text-xl font-semibold text-white">List</p>
        </div>
        <div className="flex justify-center item-center gap-3 cursor-pointer">
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <RoomViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <GridViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className="p-3.5 bg-white rounded-full cursor-pointer">
            <ListViewIcon className={`w-5 h-5 fill-black`} />
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img className="w-full h-screen object-cover" src={project360} alt="localBackground" />
      {/* Background Blur Overlay */}
      <div className="w-full h-full bg-white bg-opacity-50 backdrop-blur-md z-10 absolute top-0 left-0"></div>
    </div>
  );
};

export default UnitCompareList;
