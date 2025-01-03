// import * as React from "react";
// import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
// import PropTypes from "prop-types"; // Import PropTypes
// import { cn } from "../../lib/utils";

// const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
//   <ScrollAreaPrimitive.Root
//     ref={ref}
//     className={cn("relative overflow-hidden", className)}
//     {...props}
//   >
//     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
//       {children}
//     </ScrollAreaPrimitive.Viewport>
//     <ScrollBar />
//     <ScrollAreaPrimitive.Corner />
//   </ScrollAreaPrimitive.Root>
// ));
// ScrollArea.displayName = "ScrollArea"; // Set display name for better debugging

// // Define prop types for ScrollArea
// ScrollArea.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired, // Ensure children are passed
// };

// const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (
//   <ScrollAreaPrimitive.ScrollAreaScrollbar
//     ref={ref}
//     orientation={orientation}
//     className={cn(
//       "flex touch-none select-none transition-colors",
//       orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
//       orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
//       className
//     )}
//     {...props}
//   >
//     <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
//   </ScrollAreaPrimitive.ScrollAreaScrollbar>
// ));
// ScrollBar.displayName = "ScrollBar"; // Set display name for better debugging

// // Define prop types for ScrollBar
// ScrollBar.propTypes = {
//   className: PropTypes.string,
//   orientation: PropTypes.oneOf(["vertical", "horizontal"]), // Ensure orientation is valid
// };

// export { ScrollArea, ScrollBar };

import PropTypes from 'prop-types';

const ScrollArea = ({ className, children }) => (
  <div className={`overflow-y-auto ${className}`}>
    {children}
  </div>
);

ScrollArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { ScrollArea };