import type { RouteSectionProps } from "@solidjs/router";
 
export default function UsersLayout(props: RouteSectionProps) {
  return (
    <div class="component background-grey">
      <p class="file-name">routes/users.tsx</p>
      {/* insert the child route */ props.children}
    </div>
  );
}