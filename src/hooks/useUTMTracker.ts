// src/hooks/useUTMTracker.ts

"use client";

import { useEffect, useState, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getUTMParams, getUTMParamsFromSearchParams, storeUTMData, getStoredUTMData, UTMData, hasUTMData } from '@/lib/utmTracker';
import { CMSUTMCampaign, getUTMFromCMS } from '@/lib/cms-utm';

export function useUTMTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [utmData, setUtmData] = useState<UTMData>({});
    const [hasUtm, setHasUtm] = useState(false);
    const [campaign, setCampaign] = useState<CMSUTMCampaign | null>(null);

    useEffect(() => {
        const readUrlUtmData = (): UTMData => {
            const urlData = getUTMParamsFromSearchParams(searchParams);
            if (Object.keys(urlData).length > 0) {
                return urlData;
            }

            if (typeof window !== 'undefined') {
                return getUTMParams();
            }

            return {};
        };

        const fetchData = async () => {
            const urlUtmData = readUrlUtmData();
            const hasUrlUtm = Object.keys(urlUtmData).length > 0;

            if (hasUrlUtm) {
                const data: UTMData = {
                    ...urlUtmData,
                    referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
                    landingPage: typeof window !== 'undefined' ? window.location.href : '',
                    timestamp: typeof window !== 'undefined' ? new Date().toISOString() : undefined,
                };

                storeUTMData(data);
                setUtmData(data);
                setHasUtm(true);

                try {
                    const campaignData = await getUTMFromCMS(data);
                    if (campaignData) setCampaign(campaignData);
                } catch (error) {
                    console.error('Error fetching campaign from CMS:', error);
                }
            } else {
                const storedData = getStoredUTMData();
                setHasUtm(Object.keys(storedData).length > 0);

                if (Object.keys(storedData).length > 0) {
                    setUtmData(storedData);
                    try {
                        const campaignData = await getUTMFromCMS(storedData);
                        if (campaignData) setCampaign(campaignData);
                    } catch (error) {
                        console.error('Error fetching campaign from CMS:', error);
                    }
                } else {
                    setUtmData({});
                }
            }
        };

        fetchData();
    }, [pathname, searchParams?.toString()]);

    return { utmData, hasUtm, campaign };
}

// ═══════════════════════════════════════════════════════════════
// FIXED useUTMData: Properly reads URL params on initial render
// ═══════════════════════════════════════════════════════════════
export function useUTMData() {
    const searchParams = useSearchParams();
    const [utmData, setUtmData] = useState<UTMData>({});
    const [campaign, setCampaign] = useState<CMSUTMCampaign | null>(null);

    // Helper to read UTMs from URL (works with both searchParams and window.location)
    const readUTMsFromURL = useCallback((): UTMData | null => {
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
        const result: UTMData = {};

        // Method 1: useSearchParams (App Router)
        if (searchParams) {
            let found = false;
            utmKeys.forEach(key => {
                const value = searchParams.get(key);
                if (value) {
                    result[key as keyof UTMData] = value;
                    found = true;
                }
            });
            if (found) {
                console.log('✅ useUTMData: Found UTMs via useSearchParams');
                return result;
            }
        }

        // Method 2: window.location.search (direct fallback)
        if (typeof window !== 'undefined') {
            const directParams = new URLSearchParams(window.location.search);
            let found = false;
            utmKeys.forEach(key => {
                const value = directParams.get(key);
                if (value) {
                    result[key as keyof UTMData] = value;
                    found = true;
                }
            });
            if (found) {
                console.log('✅ useUTMData: Found UTMs via window.location.search');
                return result;
            }
        }

        return null;
    }, [searchParams]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('🔍 useUTMData: Running fetchData...');

            // STEP 1: Try to read from URL first
            const urlUtms = readUTMsFromURL();

            let data: UTMData;

            if (urlUtms) {
                // URL has UTM params — use them and store
                data = urlUtms;
                
                // Add metadata
                if (typeof document !== 'undefined') {
                    data.referrer = document.referrer || '';
                }
                if (typeof window !== 'undefined') {
                    data.landingPage = window.location.href;
                    data.timestamp = new Date().toISOString();
                }

                storeUTMData(data);
                console.log('✅ useUTMData: Captured from URL:', data);
            } else {
                // STEP 2: Fall back to localStorage
                const storedData = getStoredUTMData();
                if (hasUTMData(storedData)) {
                    data = storedData;
                    console.log('ℹ️ useUTMData: No URL params, using stored UTM data:', data);
                } else {
                    data = {};
                    console.log('ℹ️ useUTMData: No URL params and no stored UTM data');
                }
            }

            setUtmData(data);

            // Fetch CMS campaign
            const hasAnyUtm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'].some(
                key => !!data[key as keyof UTMData]
            );

            if (hasAnyUtm) {
                try {
                    const campaignData = await getUTMFromCMS(data);
                    if (campaignData) {
                        setCampaign(campaignData);
                        console.log('✅ useUTMData: CMS campaign found:', campaignData.name);
                    }
                } catch (error) {
                    console.error('Error fetching campaign from CMS:', error);
                }
            }
        };

        // Small delay to ensure URL is fully parsed (handles race conditions)
        const timer = setTimeout(fetchData, 50);
        return () => clearTimeout(timer);
    }, [searchParams, readUTMsFromURL]);

    return { utmData, campaign };
}
