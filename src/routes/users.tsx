import type { RouteSectionProps } from "@solidjs/router";
 
export default function UsersLayout(props: RouteSectionProps) {
  return (
    <div>
      <h1>Users</h1>
      {/* insert the child route */ props.children}
    </div>
  );
}