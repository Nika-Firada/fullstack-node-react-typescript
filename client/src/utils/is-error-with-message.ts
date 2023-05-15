import { ErrorMessage } from "../types";

export const isErrorWithMessage = (err: unknown): err is ErrorMessage => {
  return (
    typeof err === "object" &&
    err !== null &&
    "data" in err &&
    typeof (err as Record<string, unknown>).data === "object"
  );
};
