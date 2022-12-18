import { Children, createContext, useState } from "react";
import api from "../service/api";
import { propsChildren, contryProps, contryResponse } from "../types";


const contryContext = createContext<contryProps>({} as contryProps);

const contryProvider = ({ children }: propsChildren) => {
  const [contry, setcontry] = useState<contryResponse | null>(null);

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
    <contryContext.Provider value={{ contry, takContry }}>
      {children}
    </contryContext.Provider>
  )

}

export { contryProvider, contryContext }


