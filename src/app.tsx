import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="component background-purple">
          <p class="file-name">app.tsx</p>
          <a class="button-1" href="/">/index</a>
          <a class="button-1" href="/about">/about</a>
          <Suspense>{props.children}</Suspense>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
