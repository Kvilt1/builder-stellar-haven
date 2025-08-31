import { lazy } from "react";

const GalleryPage = lazy(() =>
  import("@modules/gallery").then((m) => ({ default: m.GalleryPage }))
);

export default GalleryPage;

