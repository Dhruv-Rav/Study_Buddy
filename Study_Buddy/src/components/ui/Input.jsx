// import * as React from "react";
// import PropTypes from "prop-types"; // Import PropTypes
// import { cn } from "../../lib/utils";

// const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
//   return (
//     <input
//       type={type}
//       className={cn(
//         "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Input.displayName = "Input";

// // Define prop types for Input
// Input.propTypes = {
//   className: PropTypes.string,
//   type: PropTypes.string, // Type of the input, default is "text"
// };

// export { Input };

import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={`block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${className}`} {...props} />
));

Input.displayName = 'Input';
Input.propTypes = {
  className: PropTypes.string,
};

export { Input };