import { useEffect, useMemo, useState } from "react";

import { RecyclerViewProps } from "../RecyclerViewProps";
import { RecyclerViewManager } from "../RecyclerViewManager";
import { VelocityTracker } from "../helpers/VelocityTracker";

export const useRecyclerViewManager = <T>(props: RecyclerViewProps<T>) => {
  const [recyclerViewManager] = useState<RecyclerViewManager<T>>(
    () => { throw new Error("STUB"); }
  );
  const [velocityTracker] = useState(() => { throw new Error("STUB"); });

  const { data } = props;

  useMemo(() => {
      throw new Error("STUB");
  }, [props]);

  /**
   * When data changes, we need to process the data update before the render happens
   */
  useMemo(() => {
      throw new Error("STUB");
  }, [data]);

  useEffect(() => {
      throw new Error("STUB");
  }, []);

  return { recyclerViewManager, velocityTracker };
};
