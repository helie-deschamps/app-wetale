<script lang="ts">
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"
	import CompletionRatio from "../../CompletionRatio/CompletionRatio.svelte"
	import { touchHandlers } from "../../../../utils/component_features/touchHandlers"

	const {
		title,
		blurb,
		type,
		uid,
		lastChapitre,
		completionRatio,
	}: StoryBasic & { lastChapitre: number; completionRatio: number } = $props()
</script>

<div class:global={true}>
	<span class:completion={true}>
		<CompletionRatio {completionRatio} />
	</span>
	<div>
		<h3>{title}</h3>
		<h4>Chapitre: {lastChapitre}</h4>
		<p>{blurb}</p>
		<div class:links={true}>
			<a use:touchHandlers href="/s/{uid}">Voir le résumé</a>
			<a use:touchHandlers href="/s/{uid}">Continuer l’histoire</a>
		</div>
	</div>
</div>

<style lang="scss">
	.global {
		border: 2px solid #000;
		border-radius: 16px;
		margin-bottom: 14px;
		color: #1a191d;
		display: flex;
		padding: 10px 5px 10px 0;
	}
	.completion {
		padding: 0 13px;
		display: flex;
		align-items: center;
	}
	h3 {
		font-weight: 900;
		font-size: 1rem;
		text-transform: uppercase;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	h4 {
		font-size: 0.8rem;
		font-weight: 400;
	}
	p {
		font-size: 0.8rem;
		line-height: 1.1;
		height: 2.2em;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: 0.4em 0;
	}
	.links {
		display: flex;
		justify-content: end;
		gap: 7px;
	}
	a {
		font-size: 0.8rem;
		color: #f7f0e6;
		background-color: #1a191d;
		border-radius: 4px;
		padding: 4px 6px;
		display: inline-block;
	}
</style>
