import { profile } from "../content";
import heroImage from "../assets/Me.jpeg";

const Hero = () => {
	return (
		<section id='top' className='animate-rise px-6 pt-20 pb-16 sm:pt-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted'>
					<span className='flex items-center gap-2'>
						<span className='size-2 rounded-full bg-accent shadow-[0_0_12px] shadow-accent' />
						available for work
					</span>
					<span className='text-faint'>{profile.location}</span>
					<span className='text-faint'>GMT +1</span>
				</div>

				<div className='mt-10 flex items-start gap-6'>
					<h1 className='flex-1 text-[clamp(2.5rem,9vw,6rem)] leading-[0.95] font-bold tracking-tight'>
						<span className='block'>Frontend</span>
						<span className='block text-muted'>Engineer.</span>
						<span className='block text-accent'>
							Detail-obsessed.
						</span>
					</h1>

					<div className='hidden md:block shrink-0'>
						<img
							src={heroImage}
							alt={`${profile.name} portrait`}
							className='w-36 h-36 md:w-70 md:h-70 rounded-full object-cover shadow-lg ring-2 ring-line'
						/>
					</div>
				</div>

				<div className='mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[1fr_auto] lg:items-end'>
					<p className='max-w-xl text-lg leading-relaxed text-pretty text-muted'>
						{profile.name} — {profile.tagline}
					</p>
					<div className='flex flex-wrap gap-4'>
						<a
							href={`mailto:${profile.email}`}
							className='bg-accent px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:-translate-y-0.5'>
							get in touch ↗
						</a>
						<a
							href='#work'
							className='border border-line px-6 py-3 font-mono text-sm transition-colors hover:border-ink'>
							view work
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
