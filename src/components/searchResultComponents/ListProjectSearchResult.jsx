import React from "react";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
import CloseIcon from "../newIcons/CloseIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import RotateViewIcon from "../newIcons/RotateViewIcon";
import LocalAmenitiesIcon from "../newIcons/LocalAmenitiesIcon";
import BoxIcon from "../svg/BoxIcon";
import ProjectLogo from "../svg/ProjectLogo";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
import locationCardImage from "../../assets/images/newIcons/locationCardImage.png";

const ListProjectSearchResult = () => {
  const properties = [
    {
      unit: "12",
      parking: 1,
    },
    {
      unit: "34",
      parking: 2,
    },
    {
      unit: "54",
      parking: 2,
    },
    {
      unit: "321",
      parking: 2,
    },
    {
      unit: "22",
      parking: 3,
    },
    {
      unit: "65",
      parking: 1,
    },
    {
      unit: "544",
      parking: 4,
    },
    {
      unit: "211",
      parking: 1,
    },
    {
      unit: "211",
      parking: 1,
    },
  ];
  return (
    <div className="mt-5 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
      {/* Share Buttons */}
      <div className="flex justify-end items-center gap-2 max-w-[1364px] mx-auto mb-6">
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

      <div className="max-w-[1362px] w-full mx-auto shadow-lg">
        <div className="w-full overflow-x-auto rounded-2xl scrollbar-custom">
          <table className="w-full border-collapse overflow-x-auto min-w-[1362px] bg-white shadow-2xl max-[1362px]:mb-6 ">
            <thead className="bg-black text-white ">
              <tr className="table-row h-24">
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-72">
                    <p className="text-sm font-semibold text-white">Project</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Unit on Sale</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-60">
                    <p className="text-sm font-semibold text-white">Price Range</p>
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
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Bathrooms</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Net Area</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center gap-2.5 w-28">
                    <p className="text-sm font-semibold text-white">Parking</p>
                    <MobileDownArrowIcon className={"w-4 h-2 fill-white"} />
                  </div>
                </th>
                <th>
                  <div className="w-44"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="bg-white border-b border-x border-gray-200 hover:bg-gray-200">
                  <td className="font-medium h-24">
                    <div className="flex justify-start items-center gap-3 py-4 pl-5">
                      <div className="w-24 h-20 relative">
                        <img className="w-full h-full object-cover rounded-xl" src={locationCardImage} alt="MiniLocationSideBarCardImage" />
                        <span className="w-9 h-9 box-content text-black text-sm font-medium bg-lime-500 rounded-full border border-black flex justify-center items-center absolute -top-3.5 -right-3.5">999</span>
                      </div>
                      <div>
                        <p className="text-base font-light">Limassol Marina</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.unit}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">€350,00 - €17,500,000</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">Studio - 4 Bed</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">1-3</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">65 - 135sqm</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <p className="text-base font-light">{property.parking}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center w-full">
                      <div className="flex flex-col justify-between items-center gap-2.5 w-full px-2">
                        <button className="flex justify-center items-center gap-1 w-full px-3 py-1.5 bg-gray-100 rounded-full">
                          <div className="flex justify-center items-center max-w-4 max-h-4">
                            <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
                          </div>
                          <p className="text-xs font-light">Local Amenities</p>
                        </button>
                        <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1.5 rounded-full">
                          <div className="flex justify-center items-center max-w-4 max-h-4">
                            <BoxIcon className={"w-5 h-5 fill-none stroke-white"} />
                          </div>
                          <p className="text-xs text-white font-light">Portal</p>
                        </button>
                      </div>
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
            <RotateViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className={`p-3.5 bg-gray-200 rounded-full cursor-pointer`}>
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

export default ListProjectSearchResult;
