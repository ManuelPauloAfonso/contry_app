import { useContext } from "react";
import { contryContext } from "../context";

export const useAppContry = () => useContext(contryContext)