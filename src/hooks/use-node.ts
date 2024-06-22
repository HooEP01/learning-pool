import { ReactNode, useState } from "react";

export const useNode = () => {
    const [node, setNode] = useState<ReactNode | null>(null);

    const handleNode = (node: ReactNode) => {
        setNode(node);
    };
    
    return {
        node,
        handleNode,
    };
}