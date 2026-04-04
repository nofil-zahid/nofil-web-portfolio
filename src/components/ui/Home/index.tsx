import Introduction from './Introduction';
import Stats from './Stats';

const Home = () => {
  return (
    <section className="flex flex-col justify-center min-h-[70vh]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center z-10 w-full">
        <Introduction />
        <Stats />
      </div>
    </section>
  );
};

export default Home;
