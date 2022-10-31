import ConContext from "./ConContext";
import ConReducer from "./ConReducer";
import { WALLPAPERS } from "../type";
import { useReducer } from "react";

const ConState = (prop) => {
  const initialState = {
    wallpapers: [],
  };

  const [state, dispath] = useReducer(ConReducer, initialState);

  return (
    <ConContext.Provider value={{ wallpapers: state.wallpapers }}>
      {prop.children}
    </ConContext.Provider>
  );
};

export default ConState;
