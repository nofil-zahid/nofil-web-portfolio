import z, { ZodType } from "zod";
import { notFound } from "next/navigation";

interface withParamValidationOptions<T extends ZodType> {
  schema: T;
  paramKey: string;
}

interface withRouteValidationProps {
  params: Promise<Record<string, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export function withParamValidation<T extends ZodType, P extends { validatedParam: z.infer<T> }>(
  WrappedComponent: React.ComponentType<P>,
  { schema, paramKey }: withParamValidationOptions<T>
) {
  return async function ValidatedComponent(props: withRouteValidationProps) {
    const params = (await props.params) || {};
    const parsed = schema.safeParse(params[paramKey]);

    if (!parsed.success) {
      notFound();
    }

    return (
      <WrappedComponent
        {...(props as unknown as P)}
        validatedParam={parsed.data}
      />
    );
  };
}
