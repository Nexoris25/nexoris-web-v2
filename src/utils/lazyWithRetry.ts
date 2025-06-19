import React, { ComponentType, LazyExoticComponent } from 'react';

export function lazyWithRetry<T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return React.lazy(() =>
    importFn().catch((error: unknown) => {
      if (
        error instanceof Error &&
        'name' in error &&
        (error as Error).name === 'ChunkLoadError'
      ) {
        window.location.reload();
      }
      throw error;
    })
  );
}
