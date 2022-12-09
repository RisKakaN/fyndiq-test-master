// Global types for loading states, which lets us reuse these throughout a project.
// Makes loading logic more consistent and easier to handle.
export const LOADING_NOT_STARTED = "LOADING_NOT_STARTED";
export const LOADING = "LOADING";
export const LOADING_SUCCEEDED = "LOADING_SUCCEEDED";
export const LOADING_FAILED = "LOADING_FAILED";
export type LOADING_STATES =
    | typeof LOADING_NOT_STARTED
    | typeof LOADING
    | typeof LOADING_SUCCEEDED
    | typeof LOADING_FAILED;
