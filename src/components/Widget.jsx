/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

import { FeedbackForm } from "./Form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import tailwindStyles from "../index.css?inline";

const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <style>{tailwindStyles}</style>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger className="widget fixed bottom-4 right-4 z-50">
          <div className="fadeIn rounded-lg shadow hover:scale-105 transition-all px-4 py-2 bg-black text-white text-sm font-medium flex gap-2">
            Feedback <MessageCircle />
          </div>
        </PopoverTrigger>
        <PopoverContent className="widget mb-2 mr-8">
          <style>{tailwindStyles}</style>
          {submitted ? (
            <div>
              <h3 className="text-lg font-semibold">
                Thank you for your time!
              </h3>
              <p className="mt-1 text-muted-foreground">
                We appreciate your feedback. It helps us improve our product and
                provide better service to our customers.
              </p>
            </div>
          ) : (
            <FeedbackForm setSubmitted={setSubmitted} />
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export function StarIcon({ className, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-star", className)}
      onClick={onClick}
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function MessageCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-circle-more size-5"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  );
}

export default Widget;
