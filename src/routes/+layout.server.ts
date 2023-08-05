import { loadTranslations, translations } from '$lib/translations'
import { DEFAULT_LOCALE } from '$lib/translations/constants'
import type { ServerLoad } from '@sveltejs/kit'

export const load: ServerLoad = async ({ url, locals }) => {
	const { pathname } = url
	const { lang } = locals

	const route = pathname.replace(new RegExp(`^/${lang}`), '')

	await loadTranslations(lang ?? DEFAULT_LOCALE, route)

	return { i18n: { route, lang }, translations: translations.get() }
}
