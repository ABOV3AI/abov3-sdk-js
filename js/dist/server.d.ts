import { type Config } from "./gen/types.gen.js";
export type ServerOptions = {
    hostname?: string;
    port?: number;
    signal?: AbortSignal;
    timeout?: number;
    config?: Config;
};
export type TuiOptions = {
    project?: string;
    model?: string;
    session?: string;
    agent?: string;
    signal?: AbortSignal;
    config?: Config;
};
export declare function createAbov3Server(options?: ServerOptions): Promise<{
    url: string;
    close(): void;
}>;
export declare function createAbov3Tui(options?: TuiOptions): {
    close(): void;
};
