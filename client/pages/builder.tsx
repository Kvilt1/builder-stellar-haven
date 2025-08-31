import { lazy } from "react";

const BuilderPage = lazy(() =>
  import("@modules/builder").then((m) => ({ default: m.BuilderPage }))
);

export default BuilderPage;

