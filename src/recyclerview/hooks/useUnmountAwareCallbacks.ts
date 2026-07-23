import { useCallback, useEffect, useState } from "react";

/**
 * Hook that provides a setTimeout which is aware of component unmount state.
 * Any timeouts created with this hook will be automatically cleared when the component unmounts.
 */
export function useUnmountAwareTimeout() {
  // Store active timeout IDs in a Set for more efficient add/remove operations
  const [timeoutIds] = useState<Set<NodeJS.Timeout>>(() => { throw new Error("STUB"); });

  // Clear all timeouts on unmount
  useEffect(() => {
      throw new Error("STUB");
  }, [timeoutIds]);

  // Create a safe setTimeout that will be cleared on unmount
  const setTimeout = useCallback(
    (callback: () => void, delay: number): void => {
          throw new Error("STUB");
      },
    [timeoutIds]
  );

  return {
    setTimeout,
  };
}

/**
 * Hook that provides a requestAnimationFrame which is aware of component unmount state.
 * Any animation frames requested with this hook will be automatically canceled when the component unmounts.
 */
export function useUnmountAwareAnimationFrame() {
  // Store active animation frame request IDs in a Set for more efficient add/remove operations
  const [requestIds] = useState<Set<number>>(() => { throw new Error("STUB"); });

  // Cancel all animation frame requests on unmount
  useEffect(() => {
      throw new Error("STUB");
  }, [requestIds]);

  // Create a safe requestAnimationFrame that will be canceled on unmount
  const requestAnimationFrame = useCallback(
    (callback: FrameRequestCallback): void => {
          throw new Error("STUB");
      },
    [requestIds]
  );

  return {
    requestAnimationFrame,
  };
}
