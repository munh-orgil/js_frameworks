import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { useUserToken } from "./useUser";

type HTTPMethod = "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE";

export async function useCustomFetch<T>(url: string, method: HTTPMethod, options: UseFetchOptions<T> = {}, baseUrl: string = "https://web.gerege.mn/support/api") {
    const token = useUserToken();
    const headers: any = {};

    headers["Authorization"] = `Bearer ${token.value}`;

    const defaults: UseFetchOptions<T> = {
        baseURL: baseUrl,
        key: url,
        method: method,
        headers: headers,
    };
    const params = defu(options, defaults);

    const { data: response, error } = await useFetch(url, params);

    if (error.value) {
        return null;
    }

    return response;
}

