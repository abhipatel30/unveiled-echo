import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <FAQ />
      <ContactForm />
    </>
  );
}