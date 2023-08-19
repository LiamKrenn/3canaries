import { FETCH_BYPASS_KEY } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

const routes: string[] = ['/', '/partner', '/open-times', 'news'];

async function revalidateRoute(route: string) {
	return await fetch('3canaries' + route, {
		headers: {
			'x-my-custom-header': FETCH_BYPASS_KEY
		}
	});
}

export const GET: RequestHandler = async ({ request }) => {
	if (request.headers.get('x-prerender-revalidate') === FETCH_BYPASS_KEY) {
		routes.forEach((route) => {
			revalidateRoute(route);
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
