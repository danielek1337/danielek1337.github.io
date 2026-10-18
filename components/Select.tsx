'use client';

import * as RS from '@radix-ui/react-select';
import { useId } from 'react';

/* Dropdown built on Radix Select: keyboard and screen-reader support from the
   library, look from globals.css (.sel-*). `name` keeps it in the form's FormData. */
export default function Select({ label, name, placeholder, options }: {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
}) {
  const id = useId();
  return (
    <div className="field">
      <span className="field-label" id={id}>
        {label}
      </span>
      <RS.Root name={name}>
        <RS.Trigger className="sel-trigger" aria-labelledby={id}>
          <RS.Value placeholder={placeholder} />
          <RS.Icon className="sel-icon">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </RS.Icon>
        </RS.Trigger>
        <RS.Portal>
          <RS.Content className="sel-content" position="popper" sideOffset={6}>
            <RS.Viewport className="sel-viewport">
              {options.map((o) => (
                <RS.Item key={o} value={o} className="sel-item">
                  <RS.ItemText>{o}</RS.ItemText>
                  <RS.ItemIndicator className="sel-check">
                    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </RS.ItemIndicator>
                </RS.Item>
              ))}
            </RS.Viewport>
          </RS.Content>
        </RS.Portal>
      </RS.Root>
    </div>
  );
}
