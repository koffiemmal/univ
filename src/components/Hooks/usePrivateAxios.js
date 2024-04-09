import React, { useEffect } from "react";
import { privateAxios } from "../Api/axios";
import UseAuth from "./UseAuth";

const usePrivateAxios = () => {
  let { auth, setAuth } = UseAuth();
  useEffect(() => {
    let requestInterceptor = privateAxios.interceptors.request.use(
      (request) => {
        if (!request.headers["authorization"]) {
          request.headers["authorization"] = `BEARER ${auth?.token}`;
        }
        return request;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    let responseInterceptor = privateAxios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 403) {
          setAuth({});
        }
        return Promise.reject(error);
      }
    );
    return () => {
      privateAxios.interceptors.request.eject(requestInterceptor);
      privateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, setAuth]);
  return privateAxios;
};

export default usePrivateAxios;
