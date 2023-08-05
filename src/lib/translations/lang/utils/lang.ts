import { LOCALE } from '$lib/translations/constants'
import { en, es } from '$lib/translations/lang/constants/lang'

export function lang(locale: string) {
	if (locale === LOCALE.EN) return en
	if (locale === LOCALE.ES) return es
	return en
}
