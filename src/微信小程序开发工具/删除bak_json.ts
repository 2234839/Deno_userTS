import { walk } from "https://deno.land/std/fs/mod.ts";
import { deleteFille } from "../util/删除指定文件.ts";

async function main() {
  deleteFille(walk(/** 需要删除的目录 */ "."), (entry) => {
    const b = entry.path.endsWith(".bak.json");
    if (b) {
      console.log(`[delete] ${entry.path}`);
    }
    return b;
  });
}

main().then(() => console.log("Done!"));
