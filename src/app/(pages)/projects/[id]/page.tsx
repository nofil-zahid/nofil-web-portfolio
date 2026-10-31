import type { Metadata } from 'next';
import Project from '@/components/pages/ProjectsPage/Project';
import { withParamValidation } from '@/components/hoc/with-route-validation';
import { DynamicRoute } from '@/types/components';
import { anyDynamicRouteSchema } from '@/schema/dynamic-route';
import { projects, findProjectByIdOrSlug, getProjectSlug } from '@/constants/projects';

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = findProjectByIdOrSlug(id);

  if (!project) {
    return {
      title: 'Project Not Found | Nofil Zahid',
      description: 'The requested system project could not be located in the kernel filesystem.',
    };
  }

  const title = `${project.title} | Projects`;
  const description = project.description;
  const url = `/projects/${id}`;

  return {
    title,
    description,
    keywords: ['Projects', project.title, project.type || '', ...project.technologies],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} — Built by Nofil Zahid`,
      description,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Built by Nofil Zahid`,
      description,
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    id: getProjectSlug(p.title),
  }));
}

const ProjectPage = ({ validatedParam }: DynamicRoute<string>) => {
  return <Project id={validatedParam} />;
};

export default withParamValidation(ProjectPage, {
  schema: anyDynamicRouteSchema,
  paramKey: 'id',
});
