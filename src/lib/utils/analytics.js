export const logEvent = (eventName, eventParams = {}) => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
    console.log("analytics fired")
  };
  
  // Common events you might want to track
  export const analyticsEvents = {
    BUTTON_CLICK: 'button_click',
    FORM_SUBMIT: 'form_submit',
    PAGE_VIEW: 'page_view',
    DOWNLOAD: 'download',
    CONTACT: 'contact',
    SCHEDULE_APPOINTMENT_PODCAST: 'schedule_appointment_podcast',
    SCHEDULE_APPOINTMENT_HEADER: "schedule_appointment.header",
    GENERATE_PODCAST: 'generate_podcast'
    // Add more event names as needed
  };