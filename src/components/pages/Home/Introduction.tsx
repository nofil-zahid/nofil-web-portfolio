import Actions from './Actions';

const Introduction = () => {
  return (
    <div className="order-1 flex w-full flex-col items-center text-center lg:items-start lg:text-left">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="flex flex-col leading-[0.9] font-black tracking-tighter uppercase select-none">
          <span className="text-accent text-[clamp(2.5rem,9vw,5.5rem)] drop-shadow-[0_0_12px_rgba(13,242,89,0.25)]">
            Full Stack &
          </span>
          <span className="text-[clamp(2.5rem,9vw,5.5rem)] text-white">DevOps Engineer</span>
        </h1>

        <p className="text-text-secondary mt-6 max-w-3xl text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed font-normal opacity-90">
          Hi! I am&nbsp;
          <span className="hover:text-accent cursor-pointer font-bold text-white hover:underline">Nofil Zahid</span>. I
          build scalable full-stack applications and automated cloud infrastructure, focusing on high-performance
          backends, clean system architecture, and production reliability.
        </p>

        <Actions />
      </div>
    </div>
  );
};

export default Introduction;
