import { Benefits } from "@/components/Sections/Benefits";
import { Faq } from "@/components/Sections/FAQ";
import { Hero } from "@/components/Sections/Hero";
import { SectionTitle } from "@/components/Sections/SectionTitle";
import { Testimonials } from "@/components/Sections/Testimonials";
import {benefitOne, benefitTwo} from '@/components/data'

export default function Home() {
  return (
    <>
      <Hero/>
      <Benefits data={benefitOne}/>
      <Benefits imgPos="right" data={benefitTwo}/>

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials/>

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq/>
    </>
  );
}
