<script lang="ts">
	import '../theme.postcss';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
