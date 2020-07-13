import { serve } from "https://deno.land/std@0.60.0/http/server.ts";

const opts = { port: 8080 };
const reqs = serve(opts);

for await (const r of reqs) {
  r.respond({ body: "Yep!\n" });
}
