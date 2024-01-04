/* eslint-disable react/no-danger */
import { h, Fragment } from 'preact';

export const Hidayah = ({ content, style, children }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: String(content) }} />
    {children}
  </>
);
