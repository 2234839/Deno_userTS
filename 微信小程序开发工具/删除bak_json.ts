import { walk } from "https://deno.land/std/fs/mod.ts";

async function main() {
  for await (const entry of walk(/** 需要删除的目录 */ ".")) {
    if (entry.path.endsWith(".bak.json")) {
      await Deno.remove(entry.path, { recursive: true });
      console.log(`[delete] ${entry.path}`);
    }
  }
}

main().then(() => console.log("Done!"));
