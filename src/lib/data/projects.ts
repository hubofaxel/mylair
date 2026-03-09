export type ProjectStatus = 'in-progress' | 'complete' | 'planned';
export type ProjectCategory = 'coding' | 'science' | 'writing';

export interface Project {
	slug: string;
	title: string;
	category: ProjectCategory;
	status: ProjectStatus;
	featured: boolean;
	icon: string | null;
	iconEmoji: string | null;
	banner: string | null;
	summary: string;
	description: string;
	tech: string[];
	link: string | null;
	highlights: string[];
}

export const projects: Project[] = [
	{
		slug: 'ship-game',
		title: 'Ship Game',
		category: 'coding',
		status: 'in-progress',
		featured: true,
		icon: '/images/ship-game/logo-mark.png',
		iconEmoji: null,
		banner: '/images/ship-game/og-image.png',
		summary: 'Arcade space shooter built with Phaser 4 and SvelteKit.',
		description:
			'A web-first arcade shooter with pixel art graphics, AI-generated sprites and audio, and data-driven gameplay. Play in the browser or install as a PWA. Built with a modern monorepo stack: SvelteKit for the app shell, Phaser 4 for the game engine, and Zod schemas for all game content.',
		tech: ['Phaser 4', 'SvelteKit', 'Svelte 5', 'Zod 4', 'TypeScript'],
		link: 'https://hubofaxel.github.io/sg/',
		highlights: [
			'Pixel art sprites generated with AI and hand-tuned',
			'Sound effects and music via ElevenLabs',
			'PWA — installable on any device',
			'Data-driven enemy waves, weapon stats, and level progression',
		],
	},
	{
		slug: 'next-project-1',
		title: 'What Should I Build?',
		category: 'coding',
		status: 'planned',
		featured: false,
		icon: null,
		iconEmoji: '\u{1F4A1}',
		banner: null,
		summary: 'Got an idea? This slot is waiting for the next project.',
		description:
			'This is an open slot for whatever comes next. Could be a game, a tool, a robot, an experiment — anything. The best projects start with a spark of curiosity.',
		tech: [],
		link: null,
		highlights: [],
	},
	{
		slug: 'next-project-2',
		title: 'Another Idea Goes Here',
		category: 'science',
		status: 'planned',
		featured: false,
		icon: null,
		iconEmoji: '\u{1F680}',
		banner: null,
		summary: 'Room for one more. What will it be?',
		description:
			'Another open slot waiting for inspiration to strike. Maybe something with hardware, maybe something creative — the lab is always ready for new experiments.',
		tech: [],
		link: null,
		highlights: [],
	},
	{
		slug: 'next-project-3',
		title: 'Something Worth Writing About',
		category: 'writing',
		status: 'planned',
		featured: false,
		icon: null,
		iconEmoji: '\u{270F}\u{FE0F}',
		banner: null,
		summary: 'A story, a report, a deep dive — this spot is reserved for words.',
		description:
			'An open slot for a writing or research project. Could be a field guide, a mini documentary script, a deep-dive report on something interesting, or just a really good story. Words matter.',
		tech: [],
		link: null,
		highlights: [],
	},
];

export const categories: Record<ProjectCategory, { label: string; color: string }> = {
	coding: { label: 'Coding', color: 'var(--color-accent-blue)' },
	science: { label: 'Science', color: 'var(--color-accent-green)' },
	writing: { label: 'Writing', color: 'var(--color-secondary)' },
};

export const statusLabels: Record<ProjectStatus, string> = {
	'in-progress': 'In Progress',
	complete: 'Complete',
	planned: 'Planned',
};

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
	return projects.filter((p) => p.featured);
}

export function getNonFeaturedProjects(): Project[] {
	return projects.filter((p) => !p.featured);
}
