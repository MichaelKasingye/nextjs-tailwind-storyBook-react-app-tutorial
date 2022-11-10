import Image from 'next/image';
import Link from 'next/link';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page.d';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36 bg-sky-800">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link href="/" legacyBehavior>
          <a className="underline text-blue-600"> Français</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
