import { FETCH_BYPASS_KEY } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';



export const GET: RequestHandler = ({ request }) => {
  console.log(request.headers);
  if (request.headers.get('x-prerender-revalidate') === FETCH_BYPASS_KEY) {
    return new Response("yippi");
  }

  return new Response("t");
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