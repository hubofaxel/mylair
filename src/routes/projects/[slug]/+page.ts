import { error } from '@sveltejs/kit';
import { getProject, projects } from '$data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = getProject(params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
};

export function entries() {
	return projects.map((p) => ({ slug: p.slug }));
}
