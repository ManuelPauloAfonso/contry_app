import React, { ReactNode } from "react"


export type propsChildren = {
  children: ReactNode;
}
export type contryResponse = {
  name: string;
  capital: string
  region: string
  population: string;

}

export type contryProps = {
  contry: contryResponse | null,
  setcontry: React.Dispatch<React.SetStateAction<contryResponse | null>>;
  takContry: Promise<void>

}