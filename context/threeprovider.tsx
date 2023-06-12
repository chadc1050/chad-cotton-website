import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

const ThreeContext = createContext();

const ThreeProvider = ({children}) => {

    const [banner, setBanner] = useState<string>('')

    return <ThreeContext.Provider value={{banner, setBanner}}> {children} </ThreeContext.Provider>;
};

export function useThreeContext() {
    return useContext(ThreeContext);
}

export {ThreeProvider};