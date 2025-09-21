export * from "./gen/types.gen.js";
import { createClient } from "./gen/client/client.gen.js";
import { Abov3Client } from "./gen/sdk.gen.js";
export { Abov3Client };
export function createAbov3Client(config) {
    const client = createClient(config);
    return new Abov3Client({ client });
}
