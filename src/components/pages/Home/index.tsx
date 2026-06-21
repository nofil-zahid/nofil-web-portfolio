import Introduction from './Introduction';
import Stats from './Stats';

const Home = () => {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center">
      <div className="z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <Introduction />
        <Stats />
      </div>
    </section>
  );
};

export default Home;
