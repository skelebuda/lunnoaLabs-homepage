export const logEvent = (eventName, eventParams = {}) => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };
  
  // Common events you might want to track
  export const analyticsEvents = {
    BUTTON_CLICK: 'button_click',
    FORM_SUBMIT: 'form_submit',
    PAGE_VIEW: 'page_view',
    DOWNLOAD: 'download',
    CONTACT: 'contact',
    // Add more event names as needed
  };