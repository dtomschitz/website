import {useCallback, useSyncExternalStore} from "react";

const useMediaQuery = (query: string): boolean => {
    const subscribe = useCallback(
        (callback: () => void) => {
            const media = window.matchMedia(query);
            media.addEventListener("change", callback);
            return () => media.removeEventListener("change", callback);
        },
        [query]
    );

    const getSnapshot = () => window.matchMedia(query).matches;
    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMediaQuery;
