import React from "react";

function DiscoverProjects() {
  return (
    <div className="grid grid-cols-5 justify-evenly items-start absolute w-fit bottom-[-364px] left-1/2 translate-x-[-50%] pt-12 pb-16 px-16 bg-white shadow-2xl rounded-[40px]">
      <div className="col-span-1">
        {/* Location Side */}
        <h3 className="text-middleMenuTextBlack text-opacity-55 font-medium text-xs mb-6">Location</h3>
        <ul className="list-none">
          <li>
            <p className="text-middleMenuTextBlack text-xl text-opacity-20 font-medium my-0 hover:text-opacity-100 cursor-pointer">Paphos</p>
          </li>
          <li>
            <p className="text-middleMenuTextBlack text-xl font-medium my-0 hover:text-opacity-100 cursor-pointer">Limassol</p>
          </li>
          <li>
            <p className="text-middleMenuTextBlack text-xl text-opacity-20 font-medium my-0 hover:text-opacity-100 cursor-pointer">Athens</p>
          </li>
        </ul>
      </div>
      {/* Project Side */}
      <div className="col-span-4">
        <div className="flex justify-evenly items-start gap-16 space-y-10">
          {/* Col #1 */}
          <div>
            <h3 className="text-middleMenuTextBlack text-opacity-55 font-medium text-xs mb-6">Project</h3>
            <ul className="list-none flex flex-col gap-3">
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Ava Plaza</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Beachside</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Coral Vista</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Domus</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Enscape</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Konia Green</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Konia Park 3</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
                <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">One</p>
              </li>
            </ul>
          </div>

          {/* Col #2 */}
          <ul className="list-none flex flex-col gap-3">
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Minthis</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Pafilia Plaza</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Vida Suites</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">The Grove</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Elysia Park</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Aria Residences</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Lana Villas</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Olea Residences</p>
            </li>
          </ul>
          {/* Col #3 */}
          <ul className="list-none flex flex-col gap-3">
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Aurai Residences</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Anarita Valley</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Amathos</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Amaya</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Amarosa</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Hesperides Gardens</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Nerina</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Pafia Gardens</p>
            </li>
          </ul>
          {/* Col #4 */}
          <ul className="list-none flex flex-col gap-3">
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Pafia 2</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Pafilia Gardens</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Polis Gardens</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Peyia Chorio</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Oasis Park</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-3 before:h-px">
              <p className="text-middleMenuTextBlack text-xs font-medium hover:translate-x-4 cursor-pointer">Iliso Suites </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiscoverProjects;
