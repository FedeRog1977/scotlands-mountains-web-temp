'use client';

import { FC } from 'react';

type ErrorProps = {
  reset: () => void;
};

const Error: FC<ErrorProps> = () => (
  <div style={{ fontSize: '36px', textAlign: 'center' }}>Something went wrong</div>
);

export default Error;
