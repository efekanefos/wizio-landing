import React from "react";

function DiscoverProjects() {
  return (
    <div className="grid grid-cols-5 justify-evenly items-start absolute w-full max-w-full top-[70px] left-0 py-12 px-12 bg-white shadow-2xl rounded-3xl z-10">
      <div className="col-span-1">
        {/* Location Side */}
        <h3 className="text-gray-400 font-semibold text-base mb-6">Location</h3>
        <ul className="list-none flex flex-col gap-2">
          <li>
            <p className="text-black text-xl font-semibold cursor-pointer">Paphos</p>
          </li>
          <li>
            <p className="text-gray-400 text-xl font-light hover:text-black cursor-pointer">Limassol</p>
          </li>
          <li>
            <p className="text-gray-400 text-xl font-light hover:text-black cursor-pointer">Athens</p>
          </li>
        </ul>
      </div>
      {/* Project Side */}
      <div className="col-span-4">
        <div className="flex justify-evenly items-start gap-6 space-y-10 max-md:gap-10">
          {/* Col #1 */}
          <div className="">
            <h3 className="text-gray-400 font-semibold text-base mb-6">Project</h3>
            <ul className="list-none flex flex-col gap-3">
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Ava Plaza</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Beachside</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Coral Vista</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Domus</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Enscape</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Konia Green</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Konia Park 3</p>
              </li>
              <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">One</p>
              </li>
            </ul>
          </div>

          {/* Col #2 */}
          <ul className="list-none flex flex-col gap-3 ">
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Minthis</p>
            </li>
            <li className="relative hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-sm text-black font-semibold translate-x-4 cursor-pointer">Pafilia Plaza</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Vida Suites</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">The Grove</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Elysia Park</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Aria Residences</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Lana Villas</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Olea Residences</p>
            </li>
          </ul>
          {/* Col #3 */}
          <ul className="list-none flex flex-col gap-3 ">
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Aurai Residences</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Anarita Valley</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Amathos</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Amaya</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Amarosa</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Hesperides Gardens</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Nerina</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Pafia Gardens</p>
            </li>
          </ul>
          {/* Col #4 */}
          <ul className="list-none flex flex-col gap-3 ">
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Pafia 2</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Pafilia Gardens</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Polis Gardens</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Peyia Chorio</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Oasis Park</p>
            </li>
            <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
              <p className="text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">Iliso Suites </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiscoverProjects;
