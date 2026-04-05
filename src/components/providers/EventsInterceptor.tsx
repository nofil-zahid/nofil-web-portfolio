'use client';
import React from 'react';
import { useDocumentEvent } from '@/hooks/core/use-dom-event';
import { ChildrenProps } from '@/types/components';

export const EventsInterceptor: React.FC<ChildrenProps> = ({ children }) => {
  const handleCopy = (e: ClipboardEvent) => {
    const selection = window.getSelection()?.toString() || '';
    if (!selection) return;
    e.preventDefault();
    const prefixText = `[Copied from Nofil's portfolio]:`;
    const modifiedText = `${prefixText} ${selection}`;
    e.clipboardData?.setData('text/plain', modifiedText);
    e.clipboardData?.setData('text/html', `<span style="color: #f00;">${prefixText}</span> ${selection}`);
  };

  useDocumentEvent('copy', handleCopy);

  return <>{children}</>;
};
