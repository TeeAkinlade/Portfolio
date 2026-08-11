import { projects } from "../content"
import SectionHeading from "./SectionHeading"

const Work = () => {
  return (
		<section id='work' className='scroll-mt-20 px-6 py-20 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<SectionHeading
					index='02'
					title='Work'
					note='selected projects'
				/>
				<ul className='divide-y divide-line border-b border-line'>
					{projects.map((project, i) => (
						<li key={project.name}>
							<a
								href={project.href}
								target='_blank'
								className='group grid items-baseline gap-x-8 gap-y-3 py-8 transition-colors sm:grid-cols-[3rem_1fr_auto]'>
								<span className='font-mono text-sm text-faint transition-colors group-hover:text-accent'>
									0{i + 1}
								</span>
								<div>
									<h3 className='text-2xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-3xl'>
										{project.name}
									</h3>
									<p className='mt-2 max-w-2xl leading-relaxed text-muted'>
										{project.description}
									</p>
									<p className='mt-3 font-mono text-xs text-faint'>
										{project.stack.join("  /  ")}
									</p>
								</div>
								<div className='flex items-baseline gap-6 sm:flex-col sm:items-end sm:gap-1'>
									<span className='font-mono text-sm text-faint tabular-nums'>
										{project.year}
									</span>
									<span className='font-mono text-xl text-faint transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent'>
										↗
									</span>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
  );
}

export default Work