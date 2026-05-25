import { useState, useCallback } from 'react';
import type { TweakValues } from '../types';

type SetTweakFn = {
  (key: keyof TweakValues, value: TweakValues[keyof TweakValues]): void;
  (edits: Partial<TweakValues>): void;
};

export function useTweaks(defaults: TweakValues): [TweakValues, SetTweakFn] {
  const [values, setValues] = useState<TweakValues>(defaults);

  const setTweak = useCallback<SetTweakFn>((keyOrEdits: unknown, val?: unknown) => {
    const edits: Partial<TweakValues> =
      typeof keyOrEdits === 'object' && keyOrEdits !== null
        ? (keyOrEdits as Partial<TweakValues>)
        : { [keyOrEdits as keyof TweakValues]: val } as Partial<TweakValues>;

    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);

  return [values, setTweak];
}
