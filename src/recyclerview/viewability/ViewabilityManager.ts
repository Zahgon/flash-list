import { ViewabilityConfig } from "react-native";

import { RecyclerViewManager } from "../RecyclerViewManager";

import ViewabilityHelper from "./ViewabilityHelper";
import ViewToken from "./ViewToken";

/**
 * Manager for viewability tracking. It holds multiple viewability callback pairs and keeps them updated.
 */
export default class ViewabilityManager<T> {
  private rvManager: RecyclerViewManager<T>;
  private viewabilityHelpers: ViewabilityHelper[] = [];
  private hasInteracted = false;

  constructor(rvManager: RecyclerViewManager<T>) {
      throw new Error("STUB");
  }

  /**
   * @returns true if the viewability manager has any viewability callback pairs registered.
   */
  public get shouldListenToVisibleIndices() {
      throw new Error("STUB");
  }

  public dispose = () => {
    this.viewabilityHelpers.forEach((viewabilityHelper) =>
      { throw new Error("STUB"); }
    );
  };

  public onVisibleIndicesChanged = (all: number[]) => {
      throw new Error("STUB");
  };

  public recordInteraction = () => {
    if (this.hasInteracted) {
      return;
    }
    this.hasInteracted = true;
    this.viewabilityHelpers.forEach((viewabilityHelper) => {
        throw new Error("STUB");
    });
    this.updateViewableItems();
  };

  public updateViewableItems = (newViewableIndices?: number[]) => {
    const listSize = this.rvManager.getWindowSize();
    if (listSize === undefined || !this.shouldListenToVisibleIndices) {
      return;
    }
    const scrollOffset =
      (this.rvManager.getAbsoluteLastScrollOffset() ?? 0) -
      this.rvManager.firstItemOffset;
    this.viewabilityHelpers.forEach((viewabilityHelper) => {
        throw new Error("STUB");
    });
  };

  public clearLastReportedViewableIndices = () => {
    this.viewabilityHelpers.forEach((viewabilityHelper) =>
      { throw new Error("STUB"); }
    );
  };

  /**
   * Creates a new `ViewabilityHelper` instance with `onViewableItemsChanged` callback and `ViewabilityConfig`
   * @returns `ViewabilityHelper` instance
   */
  private createViewabilityHelper = (
    viewabilityConfig: ViewabilityConfig | null | undefined,
    onViewableItemsChanged:
      | ((info: {
          viewableItems: ViewToken<T>[];
          changed: ViewToken<T>[];
        }) => void)
      | null
      | undefined
  ) => {
      throw new Error("STUB");
  };
}
