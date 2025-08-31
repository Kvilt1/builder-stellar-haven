import { Suspense } from "react";

export function BuilderPage() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Builder</h1>
      <p>Editor canvas will live here.</p>
      <Suspense>
        <div />
      </Suspense>
    </div>
  );
}

export default BuilderPage;

