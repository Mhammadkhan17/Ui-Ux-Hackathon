import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const RecCar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="mt-10 text-[#90A3BF]">Recommendation Car</p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 h-[872px] gap-5 w-full my-8">
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        All New Rush
                      </h2>
                      <p className="text-sm text-gray-500">SUV</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/rusia.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">CR-V</h2>
                      <p className="text-sm text-gray-500">SUV</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/crv.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        All New Terios
                      </h2>
                      <p className="text-sm text-gray-500">SUV</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/terios.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">CR-V</h2>
                      <p className="text-sm text-gray-500">SUV</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/crv1.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        MG ZX Exclusice
                      </h2>
                      <p className="text-sm text-gray-500">Hatchback</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/mg.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        New MG ZS
                      </h2>
                      <p className="text-sm text-gray-500">SUV</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/nmg.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        MG ZX Excite
                      </h2>
                      <p className="text-sm text-gray-500">Hatchback</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/mg.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[304px] flex items-center justify-center">
              <div className="max-w-xs h-[388px] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                {/* Title Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        New MG ZS
                      </h2>
                      <p className="text-sm text-gray-500">SUV</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    className="w-auto max-h-full"
                    src="/assets/cars/koenigsegg.png" // Replace with your actual image path
                    alt="Koenigsegg"
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Features and Pricing Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center w-[304px] px-5 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/fuel.png"
                        height={1000}
                        width={1000}
                        alt="fuel"
                        className="h-4 w-4"
                      />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/manual.png"
                        height={1000}
                        width={1000}
                        alt="manual"
                        className="h-4 w-4"
                      />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/user.png"
                        alt="user"
                        height={1000}
                        width={1000}
                        className="h-4 w-4"
                      />
                      <span>2 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[304px] px-5 mt-6">
                    <p className="text-xl font-bold text-gray-900">
                      $99.00{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div>
          <Link href="/Dashboard">
            <Button className="bg-[#3563E9] text-white mb-32">
              Show more cars
            </Button>
          </Link>
        </div>
        <div>
          <p className="font-medium text-[#90A3BF]">120 cars</p>
        </div>
      </div>
    </div>
  );
};
export default RecCar;
