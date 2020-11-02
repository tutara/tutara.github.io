/* tslint:disable */
/* eslint-disable */
/**
* @param {string} source
* @returns {Source}
*/
export function from_source(source: string): Source;
/**
*/
export class Source {
  free(): void;
/**
* @returns {any}
*/
  get_tokens(): any;
/**
* @returns {any}
*/
  get_statements(): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_source_free: (a: number) => void;
  readonly source_get_tokens: (a: number) => number;
  readonly source_get_statements: (a: number) => number;
  readonly from_source: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        