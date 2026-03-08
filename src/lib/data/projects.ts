export type ProjectStatus = 'in-progress' | 'complete' | 'planned';
export type ProjectCategory = 'coding' | 'science';

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
		link: null,
		highlights: [
			'Pixel art sprites generated with AI and hand-tuned',
			'Sound effects and music via ElevenLabs',
			'PWA — installable on any device',
			'Data-driven enemy waves, weapon stats, and level progression',
		],
	},
	{
		slug: 'chemistry-fun',
		title: 'Chemistry Fun',
		category: 'science',
		status: 'complete',
		featured: false,
		icon: null,
		iconEmoji: '\u{1F9EA}',
		banner: null,
		summary: 'Testing reactions with household materials.',
		description:
			'Exploring chemical reactions using safe, everyday materials found around the house. Documenting color changes, gas production, and temperature shifts to understand the science behind common substances.',
		tech: [],
		link: null,
		highlights: [
			'Baking soda and vinegar volcano variations',
			'Cabbage juice pH indicator experiments',
			'Crystal growing with sugar and borax',
		],
	},
	{
		slug: 'backyard-astronomy',
		title: 'Backyard Astronomy',
		category: 'science',
		status: 'in-progress',
		featured: false,
		icon: null,
		iconEmoji: '\u{1F52D}',
		banner: null,
		summary: 'Observations of night sky phenomena.',
		description:
			'Stargazing and documenting celestial events. Long winter nights and low light pollution make for great conditions to observe planets, meteor showers, and the northern lights.',
		tech: [],
		link: null,
		highlights: [
			'Northern lights photography and tracking',
			'Planet identification through the seasons',
			'Meteor shower observation logs',
		],
	},
];

export const categories: Record<ProjectCategory, { label: string; color: string }> = {
	coding: { label: 'Coding', color: 'var(--color-accent-blue)' },
	science: { label: 'Science', color: 'var(--color-accent-green)' },
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
