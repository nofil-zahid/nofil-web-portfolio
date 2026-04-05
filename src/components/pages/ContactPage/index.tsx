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
      <div className="flex flex-col-reverse lg:flex-row gap-[clamp(3rem,8vw,6rem)] items-start mt-[clamp(2rem,5vh,4rem)]">
        <div className="flex-1 w-full order-2 lg:order-1">
          <ContactForm />
        </div>
        <div className="w-full lg:w-[clamp(350px,30vw,420px)] sticky top-24 order-1 lg:order-2">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
