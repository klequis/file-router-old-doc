import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="component background-red">
          <p class="file-name">app.tsx</p>
          <a class="button-1" href="/">/</a>
          <a class="button-1" href="/about">/about.tsx</a>
          <a class="button-1" href="/users">/users.tsx</a>
          <a class="button-1" href="/users/1">/users/1.tsx</a>
          <a class="button-1" href="/users">/users/index.tsx</a>
          <a class="button-1" href="/users/projects">/users/projects.tsx</a>
          <Suspense>{props.children}</Suspense>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
