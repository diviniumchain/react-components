/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

interface Element extends React.HTMLProps<any> {
  disabled?: boolean;
  className?: string;
  id?: string;
}

export interface ICalendarInput extends Element {
  label?: string;
  onBlur?: (event: any) => void;
  defaultValue?: string;
  onFocus?: (event: any) => void;
  check?: boolean;
  error?: string;
  light?: boolean;
  info?: string;
  daterange?: boolean;
  maxDate?: Date;
  minDate?: Date;
  onSelect?: (event: any) => void;
}
