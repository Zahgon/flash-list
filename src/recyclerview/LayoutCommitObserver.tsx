import React, { useLayoutEffect, useMemo, useRef } from "react";

import {
  RecyclerViewContext,
  RecyclerViewContextProvider,
  useRecyclerViewContext,
} from "./RecyclerViewContextProvider";
import { useLayoutState } from "./hooks/useLayoutState";

export interface LayoutCommitObserverProps {
  children: React.ReactNode;
  onCommitLayoutEffect?: () => void;
}

/**
 * LayoutCommitObserver can be used to observe when FlashList commits a layout.
 * It is useful when your component has one or more FlashLists somewhere down the tree.
 * LayoutCommitObserver will trigger `onCommitLayoutEffect` when all of the FlashLists in the tree have finished their first commit.
 */
export const LayoutCommitObserver = React.memo(
  (props: LayoutCommitObserverProps) => {
        throw new Error("STUB");
    }
);

LayoutCommitObserver.displayName = "LayoutCommitObserver";
