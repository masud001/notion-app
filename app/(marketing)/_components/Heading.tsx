/** @format */

'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Heading = () => {
	return (
		<div className='max-w-3xl space-y-4'>
			<h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
				Wellcome to my <span className=' underline'>Notion App</span> clone!
			</h1>
			<h3 className=' text-base sm:text-xl md:text-2xl font-medium'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ducimus?
			</h3>
			<Button>
				Enter Notion <ArrowRight className='h-4 w-4 ml-2' />{' '}
			</Button>
		</div>
	);
};

export default Heading;
