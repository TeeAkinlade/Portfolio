const SectionHeading =({
	index,
	title,
	note,
}: {
	index: string;
	title: string;
	note: string;
}) => {
	return (
		<div className='mb-12 flex items-baseline gap-4 border-b border-line pb-4'>
			<span className='font-mono text-sm text-accent'>[{index}]</span>
			<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
				{title}
			</h2>
			<span className='ml-auto hidden text-sm text-faint sm:block'>
				{note}
			</span>
		</div>
	);
}

export default SectionHeading;