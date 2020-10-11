import type { WalkEntry } from "https://deno.land/std/fs/mod.ts";

export async function deleteFille(
  entryList: AsyncIterableIterator<WalkEntry>,
  predicate: (entry: WalkEntry) => boolean,
) {
  for await (const entry of entryList) {
    if (predicate(entry)) {
      await Deno.remove(entry.path, { recursive: true });
    }
  }
}
