import Image from "next/image";
import RightArrow from '../../public/right-arrow.svg'

const FerryOperator = () => {
  return (
<div className=" border-2 rounded-lg mb-3">
            <div className=" flex flex-row justify-between bg-[#F8F8F8] p-2">
              <h2 className=" text-xl">Blue Star Ferries</h2>
              <div className=" flex flex-col items-end justify-between">
                <h2 className=" text-xl font-semibold">Blue Star Ferries</h2>
                <p className="text-sm">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                  <span className=" opacity-70"> by </span>
                  <span className="font-medium opacity-100">1.342 customers</span>
                </p>
              </div>  
            </div>
            <div className=" p-2 grid grid-cols-[50%_50%]">
              <div className="flex flex-col items-start gap-3 text-sm">
                <div>
                  <h5 className=" font-semibold">Operates in</h5>
                  <p>
                    🇬🇷 
                    <span className=" opacity-70"> Greece</span>
                  </p>
                </div>
                <div>
                  <h5 className=" font-semibold">Vessels number: <span className="opacity-70 font-medium "> 8</span></h5>
                  <h5 className=" font-semibold">Ferry Types: <span className="opacity-70 font-medium "> 8 normal</span></h5>
                </div>
                <div>
                  <h5 className=" font-semibold">Popular Vessels: </h5>
                  <p>
                  <a className=" text-[#00AFD4]">Blue Star Delos</a>
                  ,
                  <a className=" text-[#00AFD4]">Blue Star Nexos</a>
                  </p>
                </div>
              </div>
              
              <div>
                <p className=" text-sm opacity-70 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className=" flex justify-end border-t-2">
                  <button className=" bg-[#F8F8F8] rounded-lg px-2 py-1 text-[#00AFD4] flex justify-end gap-2 font-medium mt-3">
                    More About Blue Star Ferries
                    <Image
                    src={RightArrow}
                    alt="arrow"
                    width={20}
                    height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FerryOperator