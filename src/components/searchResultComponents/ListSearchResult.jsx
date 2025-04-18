import React from "react";
import CloseIcon from "../newIcons/CloseIcon";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
import FullRotateIcon from "../svg/FullRotateIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import ProjectLogo from "../svg/ProjectLogo";
import listFloorPlanImage from "../svg/listFloorPlanImage.png";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import CompareIcon from "../svg/CompareIcon";

const ListSearchResult = () => {
  const properties = [
    {
      project: "Limassol Mar..",
      unit: "305",
      availability: true,
      price: 17350,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 1,
    },
    {
      project: "Bamboo Garden",
      unit: "306",
      availability: true,
      price: 21500,
      bedrooms: 4,
      bathrooms: 3,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 2,
    },
    {
      project: "Tech Hub",
      unit: "307",
      availability: true,
      price: 19200,
      bedrooms: 4,
      bathrooms: 3,
      grossArea: 156,
      netArea: 150,
      outdoor: 18,
      parking: 2,
    },
    {
      project: "Greenfield Initia...",
      unit: "308",
      availability: true,
      price: 21500,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 2,
    },
    {
      project: "Ocean View Re...",
      unit: "309",
      availability: true,
      price: 22800,
      bedrooms: 4,
      bathrooms: 1,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 3,
    },
    {
      project: "Urban Oasis",
      unit: "310",
      availability: true,
      price: 25000,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 1,
    },
    {
      project: "Cloud Nine",
      unit: "311",
      availability: true,
      price: 27500,
      bedrooms: 4,
      bathrooms: 4,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 4,
    },
    {
      project: "Solar Farm",
      unit: "312",
      availability: true,
      price: 23000,
      bedrooms: 4,
      bathrooms: 2,
      grossArea: 156,
      netArea: 135,
      outdoor: 18,
      parking: 1,
    },
  ];
  return (
    <div className="mt-5 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
      {/* Share Buttons */}
      <div className="max-w-[1364px] w-full mx-auto flex justify-end items-center gap-2 mb-6">
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <SendMessageIcon className={"w-6 h-6 fill-black translate-x-0.5"} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <ShareIcon className={"w-5 h-5 fill-black "} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <CloseIcon className={"w-3.5 h-3.5 fill-black "} />
        </div>
      </div>

      <div className="max-w-[1365px] mx-auto">
        <div className="w-full overflow-x-auto rounded-t-2xl">
          <table className="w-full border-collapse border-x border-gray-200 overflow-x-auto">
            <thead className="bg-black text-white ">
              <tr className="table-row ">
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Floor Plan</p>
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-[151px]">
                    <p className="text-sm font-semibold text-white">Project</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th className="px-4 py-10">
                  <div className="flex justify-center items-center gap-2.5 w-16">
                    <p className="text-sm font-semibold text-white">Unit</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-32">
                    <p className="text-sm font-semibold text-white">Availability</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-32">
                    <p className="text-sm font-semibold text-white">Price</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Bedrooms</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-32">
                    <p className="text-sm font-semibold text-white">Bathrooms</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Gross Area</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Net Area</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-24">
                    <p className="text-sm font-semibold text-white">Outdoor</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-20">
                    <p className="text-sm font-semibold text-white">Parking</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="w-24"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="font-medium h-24">
                    <div className="flex justify-center items-center p-2 pr-0">
                      <img src={listFloorPlanImage} alt="listFloorPlanImage" />
                    </div>
                  </td>
                  <td className="font-medium h-24">
                    <div className="flex justify-left items-center ml-5">
                      <p className="text-base font-light w-full">{property.project}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.unit}</p>
                    </div>
                  </td>
                  <td className="flex justify-center items-center h-24">
                    <div className="h-4 w-4 rounded-full bg-lime-500"></div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">€{property.price.toLocaleString()},00</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.bedrooms}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.bathrooms}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.grossArea}sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.netArea}sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.outdoor}sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.parking}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col justify-start items-center gap-3">
                      <button className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                        <CompareIcon className={"w-4 h-4 fill-black"} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                        <FavouriteIcon className={"w-4 h-4 fill-white"} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">View in</p>
          <p className="text-xl font-semibold text-white">List</p>
        </div>
        <div className="flex justify-center item-center gap-3">
          <div className={`p-3.5 rounded-full cursor-pointer bg-gray-200`}>
            <FullRotateIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className={`p-3.5  rounded-full cursor-pointer bg-gray-200`}>
            <GridViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className="p-3.5 bg-white rounded-full">
            <ListViewIcon className={"w-5 h-5 fill-black"} />
          </div>
        </div>
      </div>

      {/* Project Logo */}
      <div className="fixed bottom-10 right-12 max-md:hidden">
        <ProjectLogo className={"w-8 h-6 fill-black"} />
      </div>
    </div>
  );
};

export default ListSearchResult;
