import SectionHeader from '@/components/shared/SectionHeader';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <section>
      <SectionHeader
        title="Lets build something great"
        description="Have a project in mind or just want to discuss some high-end tech? Drop a message into the system below."
        align="left"
        tag="Contact"
      />
      <div className="mt-[clamp(2rem,5vh,4rem)] flex flex-col-reverse items-start gap-[clamp(3rem,8vw,6rem)] lg:flex-row">
        <div className="order-2 w-full flex-1 lg:order-1">
          <ContactForm />
        </div>
        <div className="sticky top-24 order-1 w-full lg:order-2 lg:w-[clamp(350px,30vw,420px)]">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
