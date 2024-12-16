import Image from "next/image"
import SidePanel from './sidepanel'
import RightBackgroundImage from '../components/TopSection/RightBackgroundImage'
import RecentCar from "./recentcar"
import RecommendationCar from "./recomendation"
const DetailedCar = () => {
    return (
        <div>
            <div className='flex'>
            <SidePanel className='bg-red-400'/>
           <div className="flex flex-col mx-3">
            <div className="flex">
            <div><div className="w-[480px] mx-5 my-5">
            <div className='relative hidden h-[360px] w-full flex-col justify-between overflow-hidden rounded-[10px] bg-blue-600 p-6 md:flex'>
        <RightBackgroundImage />
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl font-semibold w-4/5 text-white'>
          Sports car with the best design and acceleration
          </h2>
          <p className='max-w-[284px] text-base font-medium leading-[160%] text-white'>
          Safety and comfort while driving a 
          futuristic and elegant sports car
          </p>
        </div>
        <Image
          className='relative mx-auto'
          src='/assets/cars/nissan-gtr.png'
          alt='Koenigsegg'
          height={108}
          width={340}
        />
      </div>
            </div>
            <div className="grid grid-cols-3 mx-3">
                <Image src='/View 1.png' alt='first' height={150} width={150}/>
                <Image src='/View 2.png' alt="second" width={150} height={150}/>
                <Image src='/View 3.png' alt="third" height={150} width={150}/>
            </div>
            </div>
            <div className="max-w-sm h-[510px] bg-white rounded-lg shadow-md overflow-hidden p-4 my-4">
      {/* Card Header */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 py-8">Nissan GT – R</h2>
          <div className="flex items-center space-x-1 mt-1">
            <div className="flex items-center text-yellow-500">
              {/* Star Icons */}
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              {/* Half Star Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21zM12 15.4l3.76 2.27-.99-4.28 3.32-2.88-4.38-.37L12 6.1l-1.71 3.94-4.38.37 3.32 2.88-.99 4.28z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">440+ Reviewer</p>
          </div>
        </div>
        <button className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Card Description */}
      <p className="text-sm text-gray-600 mt-2 py-6">
        NISMO has become the embodiment of Nissan&apos;s outstanding performance,
        inspired by the most unforgiving proving ground, the &quot;race track&quot;.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
        <div className="flex">
          <span className="font-semibold text-gray-900">Type Car</span>
          <p className="ml-5">Sport</p>
        </div>
        <div className="flex">
          <span className="font-semibold text-gray-900">Capacity</span>
          <p className="ml-5">2 Person</p>
        </div>
        <div className="flex">
          <span className="font-semibold text-gray-900">Steering</span>
          <p className="ml-5">Manual</p>
        </div>
        <div className="flex">
          <span className="font-semibold text-gray-900">Gasoline</span>
          <p className="ml-5">70L</p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex justify-between items-center mt-4 h-1/4">
        <div>
          <p className="text-2xl font-bold text-gray-900">$80.00</p>
          <p className="text-sm text-gray-500 line-through">$100.00</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
            </div>
            <div className="max-w-4xl mx-3 my-5 bg-white p-6 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
        <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
          13
        </span>
      </div>

      {/* Review Items */}
      <div className="space-y-6 mt-4">
        {/* Review 1 */}
        <div className="flex items-start">
          {/* Avatar */}
          <img
            src="/Image.png"
            alt="Alex Stanton"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4 flex-1">
            {/* Name and Role */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Alex Stanton</h3>
                <p className="text-sm text-gray-500">CEO at Bukalapak</p>
              </div>
              <div className="text-sm text-gray-400">21 July 2022</div>
            </div>
            {/* Review Text */}
            <p className="text-sm text-gray-600 mt-2">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
            {/* Stars */}
            <div className="flex items-center mt-2">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex items-start">
          {/* Avatar */}
          <Image
            src="/profill.png"
            alt="Skylar Dias"
            width={1000}
            height={1000}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4 flex-1">
            {/* Name and Role */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Skylar Dias</h3>
                <p className="text-sm text-gray-500">CEO at Amazon</p>
              </div>
              <div className="text-sm text-gray-400">20 July 2022</div>
            </div>
            {/* Review Text */}
            <p className="text-sm text-gray-600 mt-2">
              We are greatly helped by the services of the MORENT Application.
              Morent has low prices and also a wide variety of cars with good
              and comfortable facilities. In addition, the service provided by
              the officers is also very friendly and very polite.
            </p>
            {/* Stars */}
            <div className="flex items-center mt-2">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Show All */}
      <div className="flex justify-center mt-6">
        <button className="text-blue-600 text-sm font-medium hover:underline flex items-center">
          Show All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
    <div className="my-3 mx-6">
    <RecentCar/>
    <RecommendationCar/>
    </div>
            </div>
            </div>

        </div>
    )
}
export default DetailedCar