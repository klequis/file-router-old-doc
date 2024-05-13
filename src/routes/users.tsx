import type { RouteSectionProps } from "@solidjs/router";
 
export default function UsersLayout(props: RouteSectionProps) {
  return (
    <div class="background-red component">
      <p>routes/users.tsx</p>
      {/* insert the child route */ props.children}
    </div>
  );
}