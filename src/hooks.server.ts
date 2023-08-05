import { locales } from '$lib/translations'
import { DEFAULT_LOCALE } from '$lib/translations/constants'
import type { Handle } from '@sveltejs/kit'

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/)

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event
	const { pathname } = url

	// If this request is a route request
	if (routeRegex.test(pathname)) {
		// Get defined locales
		const supportedLocales = locales.get().map((l) => l.toLowerCase())

		// Try to get locale from `pathname`.
		const locale = supportedLocales.find(
			(l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase(),
		)

		// We want to redirect the default locale to "no-locale" path
		if (locale === DEFAULT_LOCALE && !request.headers.get('prevent-redirect')) {
			const localeRegex = new RegExp(`^/${locale}`)
			const location = `${pathname}`.replace(localeRegex, '') || '/'

			return new Response(undefined, { headers: { location }, status: 301 })
		}

		// Add html `lang` attribute
		return resolve(
			{ ...event, locals: { lang: locale } },
			{
				transformPageChunk: ({ html }) => html.replace('%lang%', `${locale ?? DEFAULT_LOCALE}`),
			},
		)
	}

	return resolve(event)
}
