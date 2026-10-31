import { ImageResponse } from 'next/og';
import { findProjectByIdOrSlug } from '@/constants/projects';

export const alt = 'Project Social Share Preview';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Image({ params }: Props) {
  const { id } = await params;
  const project = findProjectByIdOrSlug(id);

  const title = project?.title || 'Project Showcase';
  const description =
    project?.description || 'Explore scalable full-stack and cloud architectures crafted by Nofil Zahid.';
  const type = project?.type?.toUpperCase() || 'SYSTEM';
  const technologies = project?.technologies?.slice(0, 5) || ['Full Stack', 'DevOps', 'Next.js'];

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#030f06',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, rgba(13, 242, 89, 0.08) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(13, 242, 89, 0.05) 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        color: '#ffffff',
        fontFamily: 'monospace',
        padding: '60px 70px',
        justifyContent: 'space-between',
        border: '12px solid #061a0a',
      }}
    >
      {/* Terminal Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid rgba(13, 242, 89, 0.25)',
          paddingBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#0df259',
              boxShadow: '0 0 16px #0df259',
            }}
          />
          <span style={{ fontSize: '24px', color: '#0df259', fontWeight: 'bold' }}>nofil-zahid://projects/{id}</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(13, 242, 89, 0.12)',
            border: '1px solid rgba(13, 242, 89, 0.35)',
            borderRadius: '8px',
            padding: '6px 16px',
            color: '#0df259',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          TYPE: {type}
        </div>
      </div>

      {/* Content Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#0df259', fontSize: '32px', fontWeight: 'bold' }}>$&gt;</span>
          <span style={{ fontSize: '56px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' }}>
            {title}
          </span>
        </div>

        <p
          style={{
            fontSize: '24px',
            lineHeight: '1.5',
            color: '#94a3b8',
            maxWidth: '1000px',
            margin: 0,
          }}
        >
          {description.length > 180 ? `${description.slice(0, 180)}...` : description}
        </p>

        {/* Tech Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '12px' }}>
          {technologies.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: '#061a0a',
                border: '1px solid rgba(13, 242, 89, 0.4)',
                borderRadius: '6px',
                padding: '6px 14px',
                fontSize: '16px',
                color: '#0df259',
                fontWeight: '600',
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Terminal Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(13, 242, 89, 0.2)',
          paddingTop: '20px',
          fontSize: '18px',
          color: '#64748b',
        }}
      >
        <span style={{ color: '#0df259' }}>Nofil Zahid — Full Stack &amp; DevOps Engineer</span>
        <span>Lahore, Pakistan // 200 OK</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
