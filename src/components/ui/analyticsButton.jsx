'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { analyticsEvents, logEvent } from '@/lib/utils/analytics';

const AnalyticsButton = ({buttonOrigin, ButtonName}) => {
  const handleClick = () => {
    logEvent(analyticsEvents.BUTTON_CLICK, {
      button_name: buttonOrigin,
      page_location: window.location.href
    });
  };

  return (
    <Button asChild size="xl" onClick={handleClick}>
      <Link href={"https://calendly.com/lunnoalabs/30min"}>{ButtonName}</Link>
    </Button>
  );
};

export default AnalyticsButton;