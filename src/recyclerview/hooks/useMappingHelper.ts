import { useCallback } from "react";

import { useRecyclerViewContext } from "../RecyclerViewContextProvider";

/**
 * Returns a function that can help create a mapping key for the items.
 * Useful when doing .map on items to create a list of components.
 * Using this ensures that performance is optimal for FlashList
 */
export const useMappingHelper = () => {
    throw new Error("STUB");
};
