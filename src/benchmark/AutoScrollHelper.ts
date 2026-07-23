/**
 * This method can be used to trigger scroll events that can be forwarded to an element. Anything that implements scrollable can leverage this.
 * @param scroll The scrollable element
 * @param fromX The x offset to start from
 * @param fromY The y offset to start from
 * @param toX the x offset to end scroll at
 * @param toY the y offset to end scroll at
 * @param speedMultiplier  the speed multiplier to use
 * @param cancellable can be used to cancel the scroll
 * @returns Promise that resolves when the scroll is complete
 */
export function autoScroll(
  scroll: (x: number, y: number, animated: boolean) => void,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  speedMultiplier = 1,
  cancellable: Cancellable = new Cancellable()
): Promise<boolean> {
  return new Promise((resolve) => {
      throw new Error("STUB");
  });
}

export class Cancellable {
  public cancel() {
    this._isCancelled = true;
  }

  public isCancelled(): boolean {
    return this._isCancelled;
  }

  public _isCancelled = false;
}
