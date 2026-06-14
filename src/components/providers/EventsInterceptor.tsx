'use client';
import React from 'react';
import { useDocumentEvent } from '@/hooks/core/use-dom-event';
import { ChildrenProps } from '@/types/components';

export const EventsInterceptor: React.FC<ChildrenProps> = ({ children }) => {
  const handleCopy = (e: ClipboardEvent) => {
    const selection = window.getSelection()?.toString() || '';
    const url = window.location.origin;
    if (!selection) return;
    e.preventDefault();
    const prefixText = `[Nofil's Portfolio]`;
    const modifiedText = `${prefixText} ${selection}`;
    e.clipboardData?.setData('text/plain', modifiedText);
    e.clipboardData?.setData(
      'text/html',
      `<span style="color: #2563eb; font-weight: 500;">
        ${prefixText}
      </span> ${selection} <br /> <span style="color: #2563eb;">${url}</span>`,
    );
  };

  useDocumentEvent('copy', handleCopy);

  return <>{children}</>;
};
