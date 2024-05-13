import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="component">
          <p>app.tsx</p>
          <a href="/">/index.tsx</a>
          <a href="/about">/about.tsx</a>
          <a href="/users">/users.tsx</a>
          <a href="/users/[id].tsx">/users.tsx</a>
          <a href="/users/index.tsx">/users/index.tsx</a>
          <a href="/users/projects">/users/projects.tsx</a>
          <Suspense>{props.children}</Suspense>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
