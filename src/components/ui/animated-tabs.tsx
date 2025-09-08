
"use client";

import Link from 'next/link';
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  href: string;
  label: string;
}

export interface AnimatedTabsProps {
  tabs: TabItem[];
  initialActiveTabId?: string;
  className?: string; // Overall padding/styling for the component's root div
  activeTextColor?: string;
  inactiveTextColor?: string;
  sliderColor?: string; // This will be unused now but kept for prop consistency if needed elsewhere
  baseBackgroundColor?: string;
  baseBorderColor?: string;
  linkClassName?: string; // Styling for individual tab links (height, text size, internal padding)
}

export function AnimatedTabs({
  tabs,
  initialActiveTabId,
  className,
  activeTextColor = "text-primary-foreground",
  inactiveTextColor = "text-muted-foreground",
  // sliderColor prop is no longer used for the visual slider
  baseBackgroundColor = "bg-secondary/50",
  baseBorderColor = "border-primary/10",
  linkClassName: propLinkClassName = "flex h-8 items-center justify-center rounded-full p-3 text-sm font-medium",
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(initialActiveTabId || (tabs.length > 0 ? tabs[0].id : ''));
  const activeTabRef = useRef<HTMLAnchorElement>(null); // Kept for potential future use or if scrolling logic depends on it

  useEffect(() => {
    if (tabs.length === 0) return;
    const currentActiveTabExists = tabs.some(tab => tab.id === activeTab);
    if (!currentActiveTabExists && tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs, activeTab]);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative mx-auto flex w-fit items-center rounded-full",
        baseBackgroundColor,
        baseBorderColor,
        className,
      )}
    >
      {/* The motion.div slider has been removed */}

      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Link
            id={`tab-${tab.id}`}
            href={tab.href}
            key={tab.id}
            ref={isActive ? activeTabRef : null}
            onClick={(e) => {
              if (tab.href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(tab.href);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }
              setActiveTab(tab.id);
            }}
            className={cn(
              propLinkClassName,
              // Ensure z-10 if there were any overlapping issues, though likely not needed now
              isActive ? activeTextColor : inactiveTextColor,
              !isActive && `hover:${activeTextColor}` // Retain hover effect for inactive tabs
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
