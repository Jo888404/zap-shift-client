import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RiderService from "./RiderService";




const Services = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [], isLoading } = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

    
  }



  





  return (
    <div className="bg-[#03373D] rounded-2xl py-20">
      <h1 className="text-3xl font-extrabold text-center text-white mb-3">
        Our Services
      </h1>

      <p className="text-center text-[#DADADA] mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {riders.map((rider) => (
          <RiderService key={rider._id} item={rider} />
        ))}
      </div>
    </div>
  );
};

export default Services;
