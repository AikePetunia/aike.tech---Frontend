import type { ReactNode } from "react";

export type aboutMeKind = "setup" | "stack" | "whoami";

export type Pane = {
  kind?: aboutMeKind;
  node: ReactNode;
  key: string;
  idx?: number;
  setIdx?: React.Dispatch<React.SetStateAction<number>>;
};
