const PaymentPage = () => {
  return (
    <div className="lg:p-24 p-4 pt-24">
      <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
        <h2 className="text-black font-semibold text-xl">
          Appointment Shedule Form
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="mt-4">
            <label className="text-black" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Your name"
              className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="text-black" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Your email"
              className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="text-black">
              Selected Package
            </label>
            <input
              
              className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-black" htmlFor="address">
            Address
          </label>
          <textarea
            placeholder="Your address"
            className="w-full resize-none bg-white rounded-md border-gray-300 text-black px-2 py-1"
            id="address"
            defaultValue={""}
          />
        </div>
        <div className="mt-4 flex flex-row space-x-2">
          <div className="">
            <label className="text-black" htmlFor="city">
              Date & Time
            </label>
            <input
              placeholder="Select Date & Time"
              className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="city"
              type="text"
            />
          </div>
          
        </div>
        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-black" htmlFor="zip">
              PIN Code
            </label>
            <input
              placeholder="Your PIN code"
              className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="zip"
              type="text"
            />
          </div>
          <div className="flex-1">
            <label className="text-black" htmlFor="country">
              Cities
            </label>
            <select
              className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="country"
            >
              <option value>Select a City</option>
              <optgroup label="Africa">
                <option value="AF">Afghanistan</option>
                <option value="DZ">Algeria</option>
                <option value="AO">Angola</option>
                ...
                <option value="ZW">Zimbabwe</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="AM">Armenia</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BH">Bahrain</option>
                ...
                <option value="YE">Yemen</option>
              </optgroup>
              <optgroup label="South America">
                <option value="AR">Argentina</option>
                <option value="BO">Bolivia</option>
                <option value="BR">Brazil</option>
                ...
                <option value="VE">Venezuela</option>
              </optgroup>
              ...
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="btn2 " type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
