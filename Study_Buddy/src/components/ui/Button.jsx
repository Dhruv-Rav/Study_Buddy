// import * as React from "react";
// import { cn } from "../../lib/utils";
// import PropTypes from "prop-types"; // Import PropTypes
// import { Slot } from "@radix-ui/react-slot"; // Import Slot from Radix UI
// import { buttonVariants } from "./buttonVariants";

// const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : "button";
//   return (
//     <Comp
//       className={cn(buttonVariants({ variant, size, className }))}
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Button.displayName = "Button";

// // Define prop types for Button
// Button.propTypes = {
//   className: PropTypes.string,
//   variant: PropTypes.oneOf(["default", "outline"]),
//   size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
//   asChild: PropTypes.bool,
// };

// export { Button };

import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button ref={ref} className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`} {...props} />
));

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
};

export { Button };