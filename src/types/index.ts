import React, { ReactNode } from "react"





export type propsChildren = {
  children: ReactNode;
}
export type contryResponse = {
  name: string;
  capital: string
  region: string
  population: string;
  flag: string;

}

export type contryProps = {
  contry: contryResponse[],
  setcontry: React.Dispatch<React.SetStateAction<contryResponse[]>>;
  takContry: () => Promise<void>

}