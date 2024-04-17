import { createContext } from "react";
import { sentryLogger } from "./sentryLogger";

export const CriticalErrorContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    log: (message: string) => {
        // we don't want to log if the provider is not present
    }
});

interface Props {
    children: React.ReactNode;
}

export const CriticalErrorContextProvider = ({ children }: Props) => {
    return (
        <CriticalErrorContext.Provider value={{ log: sentryLogger.log }}>
            {children}
        </CriticalErrorContext.Provider>
    );
};
