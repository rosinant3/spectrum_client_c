const nativeMax = Math.max;
const nativeMin = Math.min;

const debounce = (func: any, wait: number, options: any) => {
        let lastArgs: any,
          lastThis: any,
          maxWait: any,
          result: any,
          timerId: any,
          lastCallTime: any,
          lastInvokeTime: any = 0,
          leading: any = false,
          maxing: any = false,
          trailing: any = true,
          FUNC_ERROR_TEXT = "NOT A FUNCTION";
        if (typeof func !== 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = Number(wait) || 0;
        if (typeof options === 'object') {
          leading = !!options.leading;
          maxing = 'maxWait' in options;
          maxWait = maxing
            ? nativeMax(Number(options.maxWait) || 0, wait)
            : maxWait;
          trailing = 'trailing' in options
            ? !!options.trailing
            : trailing;
        }
      
        function invokeFunc(time: number) {
          let args = lastArgs,
            thisArg = lastThis;
      
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
      
        function leadingEdge(time: number) {
          // Reset any `maxWait` timer.
          lastInvokeTime = time;
          // Start the timer for the trailing edge.
          timerId = setTimeout(timerExpired, wait);
          // Invoke the leading edge.
          return leading
            ? invokeFunc(time)
            : result;
        }
      
        function remainingWait(time: number) {
          let timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;
          
          return maxing
            ? nativeMin(result, maxWait - timeSinceLastInvoke)
            : result;
        }
      
        function shouldInvoke(time: number) {
          let timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;
          // Either this is the first call, activity has stopped and we're at the trailing
          // edge, the system time has gone backwards and we're treating it as the
          // trailing edge, or we've hit the `maxWait` limit.
          return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }
      
        function timerExpired() {
          const time = Date.now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          // Restart the timer.
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
      
        function trailingEdge(time: number) {
          timerId = undefined;
      
          // Only invoke if we have `lastArgs` which means `func` has been debounced at
          // least once.
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }
      
        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }
      
        function flush() {
          return timerId === undefined
            ? result
            : trailingEdge(Date.now());
        }
      
        const debounced = (...arg: any[]) => {

          let time: any = Date.now(),
            isInvoking: any = shouldInvoke(time);
          lastArgs = arg;
          lastThis = this;
          lastCallTime = time;
      
          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              // Handle invocations in a tight loop.
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
};
  
export const throttle = (func: any, wait: number, options: any) => {


        let leading = true,
          trailing = true,
          FUNC_ERROR_TEXT = "NOT A FUNCTION";
      
        if (typeof func !== 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (typeof options === 'object') {
          leading = 'leading' in options
            ? !!options.leading
            : leading;
          trailing = 'trailing' in options
            ? !!options.trailing
            : trailing;
        }
        return debounce(func, wait, {
          leading,
          maxWait: wait,
          trailing,
        });
};

export const isVisible = (el: HTMLElement, parent:Window): boolean => {
    const rect = el.getBoundingClientRect();
    const scrollY = parent.scrollY;
    return (rect.bottom > 0 && Math.abs(rect.top + 300) < rect.bottom) && (scrollY > (rect.top - 300));
};
    

export default {};