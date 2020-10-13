/* tslint:disable */
/* eslint-disable */
/**
* @param {string} source
* @returns {any}
*/
export function get_tokens(source: string): any;
/**
*/
export class LocalToken {
  free(): void;
/**
* @returns {number}
*/
  column: number;
/**
* @returns {number}
*/
  length: number;
/**
* @returns {number}
*/
  line: number;
/**
* @returns {any}
*/
  readonly literal: any;
/**
* @returns {string}
*/
  readonly token_type: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_localtoken_free: (a: number) => void;
  readonly __wbg_get_localtoken_line: (a: number) => number;
  readonly __wbg_set_localtoken_line: (a: number, b: number) => void;
  readonly __wbg_get_localtoken_column: (a: number) => number;
  readonly __wbg_set_localtoken_column: (a: number, b: number) => void;
  readonly __wbg_get_localtoken_length: (a: number) => number;
  readonly __wbg_set_localtoken_length: (a: number, b: number) => void;
  readonly localtoken_token_type: (a: number, b: number) => void;
  readonly localtoken_literal: (a: number) => number;
  readonly get_tokens: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
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
        