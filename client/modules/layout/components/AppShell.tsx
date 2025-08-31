import { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 240, padding: 16, borderRight: "1px solid #eee" }}>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/builder">Builder</a></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 16 }}>{children}</main>
    </div>
  );
}

export default AppShell;

