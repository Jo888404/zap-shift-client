// import axios from 'axios';

// import React from 'react';
// import useAuth from './useAuth';

// const axiosSecure = axios.create({
//     baseURL: `https://zap-shift-server-eight-lemon.vercel.app`
// })

// const useAxiosSecure = () => {
//     const {user} = useAuth();
//     axiosSecure.interceptors.request.use(config =>{
//         config.headers.authorization = `Bearer ${user.accessToken}`
//         return config;
//     }, error =>{
//          return Promise.reject(error);
//     })
//     return axiosSecure;
// };

// export default useAxiosSecure;




// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(
//       (config) => {
//         if (user?.accessToken) {
//           config.headers.authorization = `Bearer ${user.accessToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // cleanup (VERY important)
//     return () => axiosSecure.interceptors.request.eject(interceptor);
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;


// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const requestInterceptor = axiosSecure.interceptors.request.use(
//       (config) => {
//         if (user?.accessToken) {
//           config.headers.authorization = `Bearer ${user.accessToken}`;
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosSecure.interceptors.request.eject(requestInterceptor);
//     };
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;



// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(
//       async (config) => {
//         if (user) {
//           const token = await user.getIdToken(); // ✅ correct way
//           config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//       }
//     );

//     return () => axiosSecure.interceptors.request.eject(interceptor);
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;



// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(
//       async (config) => {
//         if (user) {
//           const token = await user.getIdToken();
//           config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//       }
//     );

//     return () => axiosSecure.interceptors.request.eject(interceptor);
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;



// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(
//       async (config) => {
//         if (user) {
//           const token = await user.getIdToken();
//           config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//       }
//     );

//     return () => axiosSecure.interceptors.request.eject(interceptor);
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;


// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use((config) => {
//       if (user?.accessToken) {
//         config.headers.authorization = `Bearer ${user.accessToken}`;
//       }
//       return config;
//     });

//     return () => axiosSecure.interceptors.request.eject(interceptor);
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;




// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(
//       async (config) => {
//         if (user) {
//           const token = await user.getIdToken(); // 🔥 REAL TOKEN
//           config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     return () => axiosSecure.interceptors.request.eject(interceptor);
//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;



import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://zap-shift-server-eight-lemon.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // 🔥 correct token
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => axiosSecure.interceptors.request.eject(interceptor);
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;

