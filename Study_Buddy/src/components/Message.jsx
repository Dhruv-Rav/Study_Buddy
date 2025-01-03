import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { cn } from "../lib/utils";
import PropTypes from "prop-types"; // Import PropTypes

export function Message({ role, content }) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 mb-4",
        role === "assistant" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <Avatar>
        <AvatarImage src={role === "assistant" ? "/logo.svg" : "/User.png"} />
        <AvatarFallback>{role === "assistant" ? "logo" : "User"}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "rounded-lg p-6 max-w-[90%]", // Increased padding and max-width
          role === "assistant" ? "bg-gray-200 text-gray-800" : "bg-blue-600 text-white"
        )}
      >
        {content}
      </div>
    </div>
  );
}

// Define prop types for Message
Message.propTypes = {
  role: PropTypes.oneOf(["assistant", "user"]).isRequired, // Ensure role is either "assistant" or "user"
  content: PropTypes.string.isRequired, // Ensure content is a required string
};