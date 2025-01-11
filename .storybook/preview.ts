import type { Preview } from "@storybook/svelte"

import "../src/styles/base.scss"
import "../src/styles/reset.scss"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
