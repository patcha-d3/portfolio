export const trackEvent = (eventName, params = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

export const trackPageView = (pagePath) => {
  if (window.gtag) {
    window.gtag('config', 'G-L007RX6SQG', { page_path: pagePath });
  }
};