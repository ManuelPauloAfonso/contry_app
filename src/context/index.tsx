import { Children, createContext, useEffect, useState } from "react";
import api from "../service/api";
import { propsChildren, contryProps, contryResponse } from "../types";


const contryContext = createContext<contryProps>({} as contryProps);

const ContryProvider = ({ children }: propsChildren) => {
  const [contry, setcontry] = useState<contryResponse[]>([]);

  async function takContry() {
    try {
      const res = await api.get('/all')
      setcontry(res.data)
      console.log(res.data)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <contryContext.Provider value={{ contry, takContry, setcontry }}>
      {children}
    </contryContext.Provider>
  )

}

export { ContryProvider, contryContext }


