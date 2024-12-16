import Image from "next/image";
import PickUp from "../components/Pickup/pickup";
import DropOff from "../components/Pickup/dropoff";

const AdminCar = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] w-[1080px] h-[900px]">
      {/* <!-- Sidebar --> */}
      <aside className="p-4 flex flex-col h-[900]">
        {/* MAIN MENU */}
        <div>
          <div className="text-lg font-semibold mb-6">MAIN MENU</div>
          <ul className="space-y-4">
            <li className="flex bg-blue-500 text-white px-4 py-2 rounded-md">
              <Image
                src="/adminp/Vector.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Dashboard
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/car.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Car Rent
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/chart.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Insight
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/wallet.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Reimburse
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/message.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Inbox
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/calendar.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Calendar
            </li>
          </ul>
          {/* Preferences Section */}
          <div className="mt-10 text-gray-500 text-sm">PREFERENCES</div>
          <ul className="mt-4 space-y-4">
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/setting.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Settings
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <Image
                src="/adminp/info-circle.png"
                width={24}
                height={20}
                alt="home"
                className="mx-2"
              />
              Help & Center
            </li>
            <li className="flex text-[#90A3BF] px-4 py-2">
              <span className="pt-2">Dark Mod</span>
              <Image
                src="/adminp/mode.png"
                width={68}
                height={34}
                alt="home"
                className="mx-2 pb-3"
              />
            </li>
          </ul>
        </div>

        {/* Logout Section */}
        <div className="mt-auto text-[#90A3BF] px-4 py-2">Logout</div>
      </aside>

      {/* <!-- Main Content --> */}
      <main className="grid grid-cols-3 mx-2">
        {/* <!-- Left Section: Rental Details --> */}
        <div className="col-span-2 bg-white p-4 w-[534px] h-[836px] rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Details Rental</h2>
          {/* <!-- Map Placeholder --> */}
          <div className="flex justify-center">
            <Image src="/adminp/Maps.png" alt="map" width={486} height={272} />
          </div>
          {/* <!-- Car Info --> */}
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/Look.png"
              alt="Car"
              width={400}
              height={400}
              className="ml-8 my-4 w-32 rounded-md"
            />
            <div>
              <h3 className="font-bold">Nissan GT – R</h3>
              <p className="text-sm text-gray-500">Sport Car</p>
            </div>
          </div>
          {/* <!-- Pickup & Dropoff Info --> */}
          <div>
            <PickUp />
            <DropOff />
          </div>
          {/* <!-- Total Price --> */}
          <hr className="mt-4" />
          <div className="flex justify-between mt-10 mx-1">
            <div>
              <p className="font-bold text[20px]">Total Rental Price</p>
              <p className="text-sm font-medium text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <h3 className="text-3xl text-[#1A202C] font-bold">$80.00</h3>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="space-y-6">
          {/* <!-- Top 5 Car Rental --> */}
          <div className="bg-white p-4 rounded-md shadow-md w-[500px] h-80">
            <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
            {/* <!-- Placeholder for Chart --> */}
            <div className="grid grid-cols-2">
              {/* Parent Container */}
              <div className="relative w-[220px] h-[220px]">
                {/* Image */}
                <Image
                  src="/adminp/Chart (2).png"
                  alt="chart"
                  width={220}
                  height={220}
                  className="w-full h-full"
                />

                {/* Centered Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-bold">72,030</p>
                  <p className="text-sm text-gray-500">Rental Car</p>
                </div>
              </div>

              {/* List Section */}
              <div>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between">
                    <div className="flex">
                      <div className="mt-2 w-3 h-3 bg-[#0D3559] rounded-full"></div>
                      <span className="pl-2">Sport Car</span>
                    </div>
                    <span>17,439</span>
                  </li>
                  <li className="flex justify-between">
                    <div className="flex">
                      <div className="mt-2 w-3 h-3 bg-[#175D9C] rounded-full"></div>
                      <span className="pl-2">SUV</span>
                    </div>
                    <span>9,478</span>
                  </li>
                  <li className="flex justify-between">
                    <div className="flex">
                      <div className="mt-2 w-3 h-3 bg-[#2185DE] rounded-full"></div>
                      <span className="pl-2">Coupe</span>
                    </div>
                    <span>18,197</span>
                  </li>
                  <li className="flex justify-between">
                    <div className="flex">
                      <div className="mt-2 w-3 h-3 bg-[#63A9E8] rounded-full"></div>
                      <span className="pl-2">Hatchback</span>
                    </div>
                    <span>12,510</span>
                  </li>
                  <li className="flex justify-between">
                    <div className="flex">
                      <div className="mt-2 w-3 h-3 bg-[#A6CEF2] rounded-full"></div>
                      <span className="pl-2">MPV</span>
                    </div>
                    <span>14,406</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Recent Transaction --> */}
          <div className="p-4 rounded-md shadow-md w-[500px] h-[490px]">
            <h2 className="text-lg font-semibold mb-4 mt-4">
              Recent Transaction
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="pt-4 [132px] h-[70px]">
                    <Image
                      src="/nissan.png"
                      alt="Car"
                      width={350}
                      height={300}
                      className="w-[114px] h-[36px]"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Nissan GT - R</p>
                    <p className="text-sm text-gray-500">Sport Car</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">20 July</p>
                  <p className="font-bold">$80.00</p>
                </div>
              </li>
              <hr />
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="pt-4 [132px] h-[70px]">
                    <Image
                      src="/adminp/koenigsegg.png"
                      alt="Car"
                      width={350}
                      height={300}
                      className="w-[116px] h-[36px] rounded-md"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Koenigsegg</p>
                    <p className="text-sm text-gray-500">Sport Car</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">19 July</p>
                  <p className="font-bold">$99.00</p>
                </div>
              </li>
              <hr />
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="pt-4 [132px] h-[70px]">
                    <Image
                      src="/rolls.png"
                      alt="Car"
                      width={350}
                      height={300}
                      className="w-[116px] h-[36px] rounded-md"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Rolls Royce</p>
                    <p className="text-sm text-gray-500">Sport Car</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">18 July</p>
                  <p className="font-bold">$96.00</p>
                </div>
              </li>
              <hr />
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="pt-4 [132px] h-[70px]">
                    <Image
                      src="/crv.png"
                      alt="Car"
                      width={1000}
                      height={1000}
                      className="w-[118px] h-[36px] rounded-md"
                    />
                  </div>
                  <div>
                    <p className="font-bold">CR-V</p>
                    <p className="text-sm text-gray-500">SUV</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">17 July</p>
                  <p className="font-bold">$80.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
export default AdminCar;
