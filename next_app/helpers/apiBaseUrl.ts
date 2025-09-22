const apiBaseUrl = typeof window === 'undefined'
	? process.env.INTERNAL_API_URL
	: process.env.NEXT_PUBLIC_DOMAIN

export default apiBaseUrl