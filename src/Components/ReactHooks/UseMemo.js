import { useMemo } from "react";

function ExpensiveCalculation ({ num }) {
  const result = useMemo(() => {
    return num * 2;
}, [num]);

return (
<div>Result: {result}</div>
);
};

export default ExpensiveCalculation;