import { useState } from "react";

// useDisclosure hook is better than this
export const useToggle = (def = false) => {
    const [isToggled, setIsToggled] = useState(def);

    const toggle = () => setIsToggled((prev) => !prev);

    return { isToggled, toggle };
}