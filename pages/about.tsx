import Image from 'next/image';
import Link from 'next/link';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page.d';

const About: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus quidem tenetur! Asperiores quo, odit eaque eveniet perspiciatis sint incidunt laborum! Architecto consectetur, quia maxime ratione enim qui animi. Eos atque laborum alias eaque commodi, quod, temporibus sed at molestias ad cumque minus? Sit vero sint eligendi doloremque aliquam excepturi voluptatum provident in ducimus odit natus voluptates eius incidunt consectetur minus distinctio odio, ipsa quae sequi at facilis facere. Iure ea molestiae cum animi, dolor tenetur aut, voluptas, accusamus natus hic tempora quod itaque et totam maiores! Eum quia magnam delectus quae natus iusto dolor! Nam possimus eaque minus molestias!
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
