import { addTranslations, setLocale, setRoute } from '$lib/translations'
import { DEFAULT_LOCALE } from '$lib/translations/constants'

export const load = async ({ data }) => {
	const { i18n, translations } = data
	const { lang, route } = i18n

	addTranslations(translations)

	await setRoute(route)
	await setLocale(lang ?? DEFAULT_LOCALE)

	return i18n
}
