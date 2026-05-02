import Banner from '@/components/home/Banner';
import BookMarquee from '@/components/home/BookMarquee';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import MembershipSection from '@/components/home/MembershipSection';
import ReadingBenefits from '@/components/home/ReadingBenefits';

export default function HomePage() {
  return (
    <>
      <Banner />
      <BookMarquee />
      <FeaturedBooks />
      <MembershipSection />
      <ReadingBenefits />
    </>
  );
}
