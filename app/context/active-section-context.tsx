"use client";
import React, {
    useState,
    createContext,
    ReactNode,
    Dispatch,
    useContext,
} from "react";
import { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
    children: ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); //Disable the observer temporarily when user clciks a link

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
