
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  className?: string;
  outlineColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Added onClick prop
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
  className,
  outlineColor,
  onClick, // Destructure onClick
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className={cn(
            "relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-white py-3 outline outline-1",
            className
          )}
          style={{ outlineColor: outlineColor || 'hsl(var(--primary))' }}
          onClick={(e) => {
            setIsSubscribed(false);
            if (onClick) onClick(e); // Call external onClick
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className={cn(
            "relative flex w-full cursor-pointer items-center justify-center rounded-xl border-none py-3",
            className
            )}
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={(e) => {
            setIsSubscribed(true);
            if (onClick) onClick(e); // Call external onClick
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
