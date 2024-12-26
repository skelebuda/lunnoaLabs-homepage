'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { analyticsEvents, logEvent } from '@/lib/utils/analytics';

const AnalyticsButton = () => {
  const handleClick = () => {
    logEvent(analyticsEvents.BUTTON_CLICK, {
      button_name: "Lets Talk",
      page_location: window.location.href
    });
  };

  return (
    <Button asChild size="xl" onClick={handleClick}>
      <Link href={"https://calendly.com/lunnoalabs/30min"}>Let's Talk</Link>
    </Button>
  );
};

export default AnalyticsButton;