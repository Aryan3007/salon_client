import axios from "axios";
import { useEffect, useState } from "react";

const Appointment = () => {

    const [appointments, setAppointments] = useState([]);
  
    const getAppointments = async () => {
      try {
        const response = await axios.get("https://salon-server-jupe.onrender.com/status/allappointmnet");
        console.log(response.data.allappointments);  
        setAppointments(response.data.allappointments);  
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAppointments();
    }, []);  
  
    
  return (
    <div className="h-full w-full flex flex-col gap-4 pt-24 p-12">
      {appointments?.map((data) => (
        <div key={data._id} className="flow-root rounded-lg border bg-white border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Package</dt>
            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Selected Package Price</dt>
            <dd className="text-gray-700 sm:col-span-2">{data.price}</dd>
          </div>
      
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">{data.name}</dd>
          </div>
      
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">email</dt>
            <dd className="text-gray-700 sm:col-span-2">{data.email}</dd>
          </div>
      
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Mobile</dt>
            <dd className="text-gray-700 sm:col-span-2">{data.mobile}</dd>
          </div>
      
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Address</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {data.address}
            </dd>
          </div>
        </dl>
      </div>
      ))}
    </div>
  );
};

export default Appointment;
