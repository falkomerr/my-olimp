import { useRef, useCallback } from 'react'

export default function useDebounce(callback: any, delay: any) {
    const timer: any = useRef();

    const debouncedCallback = useCallback((...args: any) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay])

    return debouncedCallback;
}