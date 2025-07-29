<template>
	<main>
		Homepage - index.vue
		{{homepage}}
	</main>
</template>


<script setup>
	import { homepageQuery } from "~/sanity/queries";
	const { data: homepage } = useSanityQuery(homepageQuery);
</script>