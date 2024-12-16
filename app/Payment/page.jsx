import Image from "next/image";
const PaymentCar = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <div className="w-full h-[2240px] flex">
        <div className="mx-4">
          <div>
            <div className="w-[780px] h-[336px] bg-white p-6 rounded-lg shadow-md">
              {/* Header Section */}
              <div className="flex justify-between px-5 py-2 items-center border-b pb-3">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Billing Info
                  </h2>
                  <p className="text-sm text-gray-500">
                    Please enter your billing info
                  </p>
                </div>
                <span className="text-sm text-gray-300">Step 1 of 3</span>
              </div>

              {/* Form Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 px-10 py-3"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 px-10 py-3"
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 px-10 py-3"
                  />
                </div>

                {/* Town/City Field */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Town or city"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 px-10 py-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[780px] h-[664px] bg-white p-6 rounded-lg shadow-md">
              {/* Header Section */}
              <div className="flex justify-between px-5 py-2 items-center border-b pb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Rental Info
                  </h2>
                  <p className="text-sm text-gray-500">
                    Please select your rental date
                  </p>
                </div>
                <span className="text-sm text-gray-400">Step 2 of 4</span>
              </div>

              {/* Pick-Up Section */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="pickup"
                    name="rental"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="pickup"
                    className="text-sm font-medium text-gray-900"
                  >
                    Pick - Up
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  {/* Location Field */}
                  <div>
                    <label
                      htmlFor="pickup-location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Locations
                    </label>
                    <select
                      id="pickup-location"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-6 py-3"
                    >
                      <option>Select your city</option>
                    </select>
                  </div>

                  {/* Date Field */}
                  <div>
                    <label
                      htmlFor="pickup-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <select
                      id="pickup-date"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-6 py-3"
                    >
                      <option>Select your date</option>
                    </select>
                  </div>

                  {/* Time Field */}
                  <div>
                    <label
                      htmlFor="pickup-time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <select
                      id="pickup-time"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-6 py-3"
                    >
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Drop-Off Section */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="dropoff"
                    name="rental"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="dropoff"
                    className="text-sm font-medium text-gray-900"
                  >
                    Drop - Off
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  {/* Location Field */}
                  <div>
                    <label
                      htmlFor="dropoff-location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Locations
                    </label>
                    <select
                      id="dropoff-location"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-6 py-3"
                    >
                      <option>Select your city</option>
                    </select>
                  </div>

                  {/* Date Field */}
                  <div>
                    <label
                      htmlFor="dropoff-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <select
                      id="dropoff-date"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-6 py-3"
                    >
                      <option>Select your date</option>
                    </select>
                  </div>

                  {/* Time Field */}
                  <div>
                    <label
                      htmlFor="dropoff-time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <select
                      id="dropoff-time"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-6 py-3"
                    >
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[780px] h-[596px] bg-white p-6 rounded-lg shadow-md">
              {/* Header Section */}
              <div className="flex justify-between px-5 py-2 items-center border-b pb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Payment Method
                  </h2>
                  <p className="text-sm text-gray-500">
                    Please enter your payment method
                  </p>
                </div>
                <span className="text-sm text-gray-400">Step 3 of 4</span>
              </div>

              {/* Credit Card Section */}
              <div className="mt-6">
                <div className="flex items-center justify-between px-5 py-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment-method"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="credit-card"
                      className="text-sm font-medium text-gray-900"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/Visa_Inc._logo 1.png"
                      alt="Visa"
                      width={48}
                      height={16}
                      className="h-4"
                    />
                    <Image
                      src="/mc.png"
                      alt="Mastercard"
                      width={32}
                      height={20}
                      className="h-4"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 bg-gray-50 p-4 rounded-lg">
                  {/* Card Number Field */}
                  <div>
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      placeholder="Card number"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-5 px-3"
                    />
                  </div>

                  {/* Expiration Date Field */}
                  <div>
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expiration-date"
                      placeholder="DD / MM / YY"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-5 px-3"
                    />
                  </div>

                  {/* Card Holder Field */}
                  <div>
                    <label
                      htmlFor="card-holder"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card Holder
                    </label>
                    <input
                      type="text"
                      id="card-holder"
                      placeholder="Card holder"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-5 px-3"
                    />
                  </div>

                  {/* CVC Field */}
                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="CVC"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-5 px-3"
                    />
                  </div>
                </div>
              </div>

              {/* PayPal Section */}
              <div className="flex items-center mt-6 p-4 border rounded-lg">
                <input
                  type="radio"
                  id="paypal"
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="paypal"
                  className="ml-3 flex justify-between px-5 py-2 items-center w-full text-sm font-medium text-gray-900"
                >
                  PayPal
                  <Image
                    src="/PayPal.png"
                    alt="PayPal"
                    width={90}
                    height={25}
                    className="h-4"
                  />
                </label>
              </div>

              {/* Bitcoin Section */}
              <div className="flex items-center mt-4 p-4 border rounded-lg">
                <input
                  type="radio"
                  id="bitcoin"
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="bitcoin"
                  className="ml-3 flex justify-between px-5 py-2 items-center w-full text-sm font-medium text-gray-900"
                >
                  Bitcoin
                  <Image
                    src="/Bitcoin.png"
                    alt="Bitcoin"
                    width={94}
                    height={20}
                    className="h-4"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[780px] h-[484px] p-8 bg-white rounded-lg shadow-md flex flex-col justify-between px-5 py-2">
              {/* Header Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Confirmation
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  We are getting to the end. Just a few clicks and your rental
                  is ready!
                </p>
              </div>

              {/* Checkbox Options */}
              <div className="mt-6 space-y-4">
                {/* Option 1 */}
                <div className="flex items-center p-4 border rounded-lg">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-3 text-sm text-gray-900 font-medium"
                  >
                    I agree with sending Marketing and newsletter emails. No
                    spam, promised!
                  </label>
                </div>

                {/* Option 2 */}
                <div className="flex items-center p-4 border rounded-lg">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-3 text-sm text-gray-900 font-medium"
                  >
                    I agree with our terms and conditions and privacy policy.
                  </label>
                </div>
              </div>

              {/* Button */}
              <div className="mt-6">
                <button className="w-[140px] h-[56px] py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
                  Rent Now
                </button>
              </div>

              {/* Security Note */}
              <div className="mt-6 space-x-2 text-sm text-gray-500">
                <Image
                  src="/ic-security-safety.png"
                  width={32}
                  height={32}
                  alt="Image"
                />
                <div>
                  <p className="font-medium mt-2 text-gray-900">
                    All your data are safe
                  </p>
                  <p>
                    We are using the most advanced security to provide you the
                    best experience ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] h-[600px] bg-white rounded-lg shadow-md">
          <h3 className="text-3xl mt-10 pl-5">Rental Summary</h3>
          <p className="px-3 mt-3">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <div className="flex justify-center mt-8">
            <Image src="/Look.png" alt="look" width={132} height={108} />
            <div className="mx-5">
              <h1 className="text-4xl">Nissan GT - R</h1>
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
              <p className="text-sm">440+ Reviews</p>
            </div>
          </div>
          <div className="my-7">
            <hr />
          </div>
          <div className="flex justify-between px-5 py-2">
            <p>Subtotal</p>
            <p>$80.00</p>
          </div>
          <div className="flex justify-between px-5 py-2">
            <p>Tax</p>
            <p>$0</p>
          </div>
          <div className="w-4/5 mx-auto bg-gray-50 py-3 px-6 rounded-lg flex justify-between items-center">
            <label className="w-full flex justify-between items-center">
              <span className="text-sm text-gray-400">Apply promo code</span>

              <span className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer">
                Apply now
              </span>
            </label>
          </div>
          <div className="w-full px-5 pt-16 flex justify-between">
            <div>
              <p className="text-lg font-bold">Total Rental Price</p>
              <p className="text-sm font-medium text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <div className="text-3xl">$80.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentCar;
