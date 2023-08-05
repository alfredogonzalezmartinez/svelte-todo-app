import { DEFAULT_LOCALE } from '$lib/translations/constants'
import lang from '$lib/translations/lang/lang.json'
import i18n, { type Config } from 'sveltekit-i18n'

const config: Config = {
	initLocale: DEFAULT_LOCALE,
	fallbackLocale: DEFAULT_LOCALE,
	translations: {
		en: { lang },
		es: { lang },
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./common/en/common.json')).default,
		},
		{
			locale: 'es',
			key: 'common',
			loader: async () => (await import('./common/es/common.json')).default,
		},
		{
			locale: 'en',
			key: 'taskInput',
			loader: async () => (await import('./taskInput/en/taskInput.json')).default,
		},
		{
			locale: 'es',
			key: 'taskInput',
			loader: async () => (await import('./taskInput/es/taskInput.json')).default,
		},
		{
			locale: 'en',
			key: 'taskFilter',
			loader: async () => (await import('./taskFilter/en/taskFilter.json')).default,
		},
		{
			locale: 'es',
			key: 'taskFilter',
			loader: async () => (await import('./taskFilter/es/taskFilter.json')).default,
		},
		{
			locale: 'en',
			key: 'tasksLeftCounter',
			loader: async () => (await import('./tasksLeftCounter/en/tasksLeftCounter.json')).default,
		},
		{
			locale: 'es',
			key: 'tasksLeftCounter',
			loader: async () => (await import('./tasksLeftCounter/es/tasksLeftCounter.json')).default,
		},
	],
}

export const {
	addTranslations,
	loading,
	loadTranslations,
	locale,
	locales,
	setLocale,
	setRoute,
	t,
	translations,
} = new i18n(config)
