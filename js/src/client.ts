export * from "./gen/types.gen.js"
export { type Config as Abov3ClientConfig }

import { createClient } from "./gen/client/client.gen.js"
import { type Config } from "./gen/client/types.gen.js"
import { Abov3Client } from "./gen/sdk.gen.js"

export { Abov3Client }

export function createAbov3Client(config?: Config) {
  const client = createClient(config)
  return new Abov3Client({ client })
}

