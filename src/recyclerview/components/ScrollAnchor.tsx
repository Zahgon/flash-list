/**
 * ScrollAnchor component provides a mechanism to programmatically scroll
 * the list by manipulating an invisible anchor element's position.
 * This helps us use ScrollView's maintainVisibleContentPosition property
 * to adjust the scroll position of the list as the size of content changes without any glitches.
 */

import React, { useImperativeHandle, useMemo, useState } from "react";

import { CompatView } from "./CompatView";

/**
 * Props for the ScrollAnchor component
 */
export interface ScrollAnchorProps {
  /** Ref to access scroll anchor methods */
  scrollAnchorRef: React.Ref<ScrollAnchorRef>;
  horizontal: boolean;
}

/**
 * Ref interface for ScrollAnchor component
 */
export interface ScrollAnchorRef {
  /** Scrolls the list by the specified offset */
  scrollBy: (offset: number) => void;
}

/**
 * ScrollAnchor component that provides programmatic scrolling capabilities using maintainVisibleContentPosition property
 * @param props - Component props
 * @returns An invisible anchor element used for scrolling
 */
export function ScrollAnchor({
  scrollAnchorRef,
  horizontal,
}: ScrollAnchorProps) {
    throw new Error("STUB");
}
