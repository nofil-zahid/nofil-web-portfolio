import SectionHeader from "@/components/shared/SectionHeader";
import FaqBody from "./Body";
import ContactFooter from "./Contact";

export default function FaqPage() {
  return (
    <section>
      <SectionHeader
        title="Frequently Asked Questions"
        description="Find answers to common inquiries about my workflow, technical stack, and availability for high-end digital projects."
        tag="Help_Center"
        align="left"
      />
      <FaqBody />
      <ContactFooter />
    </section>
  );
}
