/** @format */

import Footer from './_components/Footer';
import Heading from './_components/Heading';
import Heroes from './_components/Heroes';

export default function Home() {
	return (
		<div className='min-h-full bg-background dark:bg-[#1F1F1F] flex flex-col'>
			<div className='flex flex-col items-center justify-center text-center md:justify-start  gap-y-8 flex-1 px-6 bp-10'>
				<Heading />
				<Heroes />
			</div>
			<Footer />
		</div>
	);
}
