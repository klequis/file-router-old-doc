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
          <a href="/">/index</a>
          <a href="/about">/about</a>
          <Suspense>{props.children}</Suspense>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
