import { serveDir } from "@std/http/file-server";

if (import.meta.main) {
  Deno.serve({ port: 3000 }, (req) => {
    return serveDir(req);
  });
}


