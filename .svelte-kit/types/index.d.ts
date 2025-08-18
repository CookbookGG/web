type DynamicRoutes = {
	"/[slug]": { slug: string };
	"/[slug]/[guide]": { slug: string; guide: string };
	"/[slug]/[guide]/[section]": { slug: string; guide: string; section: string }
};

type Layouts = {
	"/": { slug?: string; guide?: string; section?: string };
	"/[slug]": { slug: string; guide?: string; section?: string };
	"/[slug]/[guide]": { slug: string; guide: string; section?: string };
	"/[slug]/[guide]/[section]": { slug: string; guide: string; section: string }
};

export type RouteId = "/" | "/[slug]" | "/[slug]/[guide]" | "/[slug]/[guide]/[section]";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | `/${string}` & {} | `/${string}/${string}` & {} | `/${string}/${string}/${string}` & {};

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/robots.txt";