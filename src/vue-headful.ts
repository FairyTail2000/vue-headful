// @ts-ignore
import headful from 'headful';
import {CreateElement, VNode} from "vue";

export default {
	name: 'vue-headful',
	props: {
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		keywords: {
			type: [String, Array],
			required: false
		},
		image: {
			type: String,
			required: false
		},
		lang: {
			type: String,
			required: false
		},
		ogLocale: {
			type: String,
			required: false
		},
		url: {
			type: String,
			required: false
		}
	},
	watch: {
		"$props": {
			handler: (props: any) => headful(getPassedProps(props)),
			deep: true,
			immediate: true,
		},
	},
	activated() {
		// required for keep-alive components https://vuejs.org/v2/api/#keep-alive
		// @ts-ignore
		handler(this.$props);
	},
	// @ts-ignore
	render(vode: CreateElement): VNode {},
};

function getPassedProps(props: { [x: string]: any; }): { [x: string]: any} {
	return Object.keys(props).reduce((passedProps: { [x: string]: any; }, propKey) => {
		if (props[propKey] !== undefined) {
			passedProps[propKey] = props[propKey];
		}
		return passedProps;
	}, {});
}
