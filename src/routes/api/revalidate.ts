import { FETCH_BYPASS_KEY } from '$env/static/private';

type Headers = Record<string, string>;

export async function get({ headers }: { headers: Headers}) {
  // Check for the bypassToken in the x-prerender-revalidate header
  if (headers['x-prerender-revalidate'] === FETCH_BYPASS_KEY) {
    await fetch('https://3canaries.com', {
      headers: {
        'x-prerender-revalidate': FETCH_BYPASS_KEY
      }
    })
  }

  // Return a response
  return {
    body: {
      message: 'Revalidation triggered'
    }
  };
}
