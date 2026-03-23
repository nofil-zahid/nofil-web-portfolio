import Project from "@/components/ui/ProjectsPage/Project";
import { withParamValidation } from "@/components/hoc/with-route-validation";
import { DynamicRoute } from "@/types/components";
import { anyDynamicRouteSchema } from "@/schema/dynamic-route";

const ProjectPage = ({ validatedParam }: DynamicRoute<string>) => {
  return (
    <Project id={validatedParam} />
  )
};

export default withParamValidation(ProjectPage, {
  schema: anyDynamicRouteSchema,
  paramKey: "id",
});
