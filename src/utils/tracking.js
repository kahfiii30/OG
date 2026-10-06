/**
 * Centralized Meta Pixel tracking utility.
 * Safe to call even if window.fbq is not yet fully initialized or blocked.
 */

export const trackEvent = (eventName, data = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  } else {
    console.warn(`Meta Pixel not found, but tried to track: ${eventName}`);
  }
};

export const trackViewContent = (data = {}) => {
  trackEvent('ViewContent', data);
};

export const trackContact = (data = {}) => {
  trackEvent('Contact', data);
};
