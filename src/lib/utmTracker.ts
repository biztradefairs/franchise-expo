// src/lib/utmTracker.ts

export interface UTMData {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    utm_id?: string;
    utm_url?: string;
    referrer?: string;
    landingPage?: string;
    timestamp?: string;
}

export function getUTMParamsFromSearchParams(searchParams?: URLSearchParams): UTMData {
    const utmParams: UTMData = {};
    if (!searchParams) return utmParams;

    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'] as const;
    utmKeys.forEach(key => {
        const value = searchParams.get(key);
        if (value) utmParams[key] = value;
    });

    return utmParams;
}

/**
 * Extract UTM parameters from URL
 * Note: Should only be called on the client side (e.g., inside useEffect or event handlers)
 * to avoid Next.js hydration mismatches.
 */
export function getUTMParams(): UTMData {
    if (typeof window === 'undefined') return {};

    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: UTMData = {};

    // Extract only actual UTM parameters
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'] as const;
    utmKeys.forEach(key => {
        const value = urlParams.get(key);
        if (value) utmParams[key] = value;
    });

    return utmParams;
}

export function hasUTMData(data: UTMData): boolean {
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'] as const;
    return utmKeys.some(key => !!data[key]);
}

/**
 * Store UTM data in localStorage for persistence across pages
 */
export function storeUTMData(data: UTMData) {
    if (typeof window === 'undefined') return;

    // Merge with existing UTM data
    const existing = getStoredUTMData();
    const merged = { ...existing, ...data };

    try {
        localStorage.setItem('utm_data', JSON.stringify(merged));

        // Notify same-tab listeners about UTM updates
        const event = new CustomEvent('utm_data_updated', { detail: merged });
        window.dispatchEvent(event);
    } catch (error) {
        console.error('Error storing UTM data:', error);
    }
}

/**
 * Get stored UTM data from localStorage
 * Note: Should only be called on the client side (e.g., inside useEffect)
 * to avoid Next.js hydration mismatches.
 */
export function getStoredUTMData(): UTMData {
    if (typeof window === 'undefined') return {};

    try {
        const data = localStorage.getItem('utm_data');
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('Error retrieving UTM data:', error);
        return {};
    }
}

/**
 * Clear stored UTM data (useful after form submission)
 */
export function clearUTMData() {
    if (typeof window === 'undefined') return;

    try {
        localStorage.removeItem('utm_data');
    } catch (error) {
        console.error('Error clearing UTM data:', error);
    }
}

/**
 * Generate full UTM tracking URL
 */
export function generateUTMLink(baseUrl: string, utmData: UTMData): string {
    try {
        const url = new URL(baseUrl);
        const params = new URLSearchParams(url.search);

        Object.entries(utmData).forEach(([key, value]) => {
            if (value && key.startsWith('utm_')) {
                params.set(key, value);
            }
        });

        url.search = params.toString();
        return url.toString();
    } catch (e) {
        console.error('Invalid base URL:', baseUrl);
        return baseUrl;
    }
}

/**
 * Sync UTM parameters into the current browser URL without dropping existing query params.
 */
export function syncUTMParamsToUrl(utmData: UTMData, path?: string, search?: string): boolean {
    if (typeof window === 'undefined') return false;

    const currentPath = path || window.location.pathname;
    const currentSearch = search || window.location.search;
    const params = new URLSearchParams(currentSearch);
    let updated = false;

    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
    utmKeys.forEach(key => {
        const value = utmData[key as keyof UTMData];
        if (typeof value === 'string' && value.trim()) {
            const existingValue = params.get(key);
            if (existingValue !== value) {
                params.set(key, value);
                updated = true;
            }
        }
    });

    if (!updated) return false;

    const queryString = params.toString();
    const newUrl = `${currentPath}${queryString ? `?${queryString}` : ''}${window.location.hash}`;
    window.history.replaceState(window.history.state, '', newUrl);
    return true;
}

/**
 * Check if URL has any UTM parameters
 */
export function hasUTMParams(url?: string): boolean {
    if (typeof window === 'undefined') return false;

    try {
        const search = url ? new URL(url).search : window.location.search;
        const params = new URLSearchParams(search);

        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
        return utmKeys.some(key => params.has(key));
    } catch (e) {
        return false;
    }
}
