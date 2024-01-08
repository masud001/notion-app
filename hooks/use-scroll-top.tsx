/** @format */

import { useEffect, useState } from 'react';

const useScrollTop = (threshold = 10) => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handelScroll = () => {
			window.scrollY > threshold ? setScrolled(true) : setScrolled(false);
		};
		window.addEventListener('scroll', handelScroll);
		return () => window.removeEventListener('scroll', handelScroll);
	}, [threshold]);

	return scrolled;
};

export default useScrollTop;
