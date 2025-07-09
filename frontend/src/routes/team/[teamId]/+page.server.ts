import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const { teamId } = params;

	try {
		const response = await fetch(`https://findworks-server.andyy.dev/team/${teamId}`);

		if (!response.ok) {
			throw error(response.status, `Failed to load team: ${response.statusText}`);
		}

		const team = await response.json();

		return {
			team
		};
	} catch (err) {
		console.error('Error fetching team data:', err);
		throw error(500, 'Failed to load team data');
	}
};
