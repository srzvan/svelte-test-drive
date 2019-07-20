import App from './src/components/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'mother'
	}
});

export default app;