import { locales } from '$lib/translations'
import { DEFAULT_LOCALE } from '$lib/translations/constants'
import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = (param) => {
	const definedLocales = locales.get()
	const paths = [...definedLocales, '']
	const slashPaths = paths.map((l) => `${l}/`)

	return [...paths, ...slashPaths].includes(param ?? DEFAULT_LOCALE)
}
