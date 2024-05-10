import React, { useState } from "react";

function useCounter(initialVaule) {
    const [count, setCount] = useState(initialVaule);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;