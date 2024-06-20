import { useState } from "react";

export const useToggle = (def = false) => {
    const [isToggled, setIsToggled] = useState(def);

    const toggle = () => setIsToggled((prev) => !prev);

    return { isToggled, toggle };
}