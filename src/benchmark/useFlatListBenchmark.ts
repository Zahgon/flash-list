import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";

import { ErrorMessages } from "../errors/ErrorMessages";

import { autoScroll, Cancellable } from "./AutoScrollHelper";
import { JSFPSMonitor } from "./JSFPSMonitor";
import {
  BenchmarkParams,
  BenchmarkResult,
  getFormattedString,
} from "./useBenchmark";

export interface FlatListBenchmarkParams extends BenchmarkParams {
  targetOffset: number;
}

/**
 * Runs the benchmark on FlatList and calls the callback method with the result.
 * Target offset is mandatory in params.
 * It's recommended to remove pagination while running the benchmark. Removing the onEndReached callback is the easiest way to do that.
 */
export function useFlatListBenchmark(
  flatListRef: React.RefObject<FlatList<any>>,
  callback: (benchmarkResult: BenchmarkResult) => void,
  params: FlatListBenchmarkParams
) {
  const [isBenchmarkRunning, setIsBenchmarkRunning] = useState(false);
  const cancellableRef = useRef<Cancellable | null>(null);

  const startBenchmark = useCallback(() => {
      throw new Error("STUB");
  }, [
    callback,
    flatListRef,
    isBenchmarkRunning,
    params.repeatCount,
    params.speedMultiplier,
    params.targetOffset,
  ]);

  useEffect(() => {
      throw new Error("STUB");
  }, []);
  return { startBenchmark, isBenchmarkRunning };
}

/**
 * Scrolls to the target offset and then back to 0
 */
async function runScrollBenchmark(
  flatListRef: React.RefObject<FlatList<any> | null | undefined>,
  targetOffset: number,
  cancellable: Cancellable,
  scrollSpeedMultiplier: number
): Promise<void> {
  if (flatListRef.current) {
    const horizontal = Boolean(flatListRef.current.props?.horizontal);

    const fromX = 0;
    const fromY = 0;
    const toX = horizontal ? targetOffset : 0;
    const toY = horizontal ? 0 : targetOffset;

    const scrollNow = (x: number, y: number) => {
        throw new Error("STUB");
    };

    await autoScroll(
      scrollNow,
      fromX,
      fromY,
      toX,
      toY,
      scrollSpeedMultiplier,
      cancellable
    );
    await autoScroll(
      scrollNow,
      toX,
      toY,
      fromX,
      fromY,
      scrollSpeedMultiplier,
      cancellable
    );
  }
}
