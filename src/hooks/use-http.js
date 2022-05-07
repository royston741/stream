import { useCallback, useState } from "react";

const useHttp = (applyData) => {
    // loading state 
  const [isloading, setIsloading] = useState(false);

//   http function 
  const sendRequest = useCallback(
    async (requestObg) => {
      setIsloading(true);

      try {
        //   fetch data 
        const response = await fetch(requestObg.url, {
          method: requestObg.method ? requestObg.method : "GET",
          headers: requestObg.headers ? requestObg.headers : {},
          body: requestObg.body ? JSON.stringify(requestObg.body) : null,
        });

        // if err 
        if (!response.ok) {
          throw new Error("Request failed!");
        }

        // data recieved 
        const data = await response.json();

        // send data to function 
        applyData(data);

      } catch (err) {
        //   catching the err 
        console.log(err);
      }

      
      setIsloading(false);
    },
    [applyData]
  );

  return { isloading, sendRequest };
};

export default useHttp;
