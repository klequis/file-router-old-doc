import type { RouteSectionProps } from "@solidjs/router";

export default function UsersDetailsEscaped(props: RouteSectionProps) {
  return (
    <div class="component background-blue">
      <p class="file-name">routes/users/users(details).tsx</p>
      {/* insert the child route */ props.children}
    </div>
  );
}