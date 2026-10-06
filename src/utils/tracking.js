/**
 * Centralized Meta Pixel tracking utility.
 * Safe to call even if window.fbq is not yet fully initialized or blocked.
 */

const firedEvents = new Set();

export const trackEvent = (eventName, data = {}, once = false) => {
  if (once) {
    const eventKey = `${eventName}-${JSON.stringify(data)}`;
    if (firedEvents.has(eventKey)) return;
    firedEvents.add(eventKey);
  }

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  } else {
    console.warn(`Meta Pixel not found, but tried to track: ${eventName}`);
  }
};

export const trackViewContent = (data = {}) => {
  trackEvent('ViewContent', data, true); // true = fire only once
};

export const trackContact = (data = {}) => {
  trackEvent('Contact', data);
};
