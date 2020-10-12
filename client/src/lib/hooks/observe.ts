import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export function observe<T>(observable: Observable<T>): T {
  const [value, setValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    const sub = observable.subscribe((nextValue) => {
      setValue(nextValue);
    });

    return () => sub.unsubscribe();
  }, [observable]);

  return value!;
}
