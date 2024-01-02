import { FETCH_BYPASS_KEY } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

const routes: string[] = ['/', '/partner', '/open-times', '/news'];

async function revalidateRoute(route: string) {
	await fetch('https://3canaries.com' + route, {
		headers: {
			'x-prerender-revalidate': FETCH_BYPASS_KEY
		},
		mode: 'same-origin'
	});
}

const corsHeaders = {
	'Access-Control-Allow-Credentials': 'true',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
	'Access-Control-Allow-Headers':
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-prerender-revalidate'
};

export const OPTIONS: RequestHandler = async () => {
	return new Response('ok');
};

export const GET: RequestHandler = async ({ request }) => {
	if (request.headers.get('x-prerender-revalidate') === FETCH_BYPASS_KEY) {
		routes.forEach(async (route) => {
			await revalidateRoute(route);
		});
		return new Response('Success');
	}
	return new Response('Invalid');
};

//export function GET: RequestHandler = ({url}) => {
//  if (headers['x-prerender-revalidate'] === FETCH_BYPASS_KEY) {
//    await fetch('https://3canaries.com', {
//      headers: {
//        'x-prerender-revalidate': FETCH_BYPASS_KEY
//      }
//    })
//  }
//
//  return new Response("Hello World")
//}
