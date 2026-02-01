'use client';

import { FC } from 'react';

type ErrorProps = {
  reset: () => void;
};

const NotFound: FC<ErrorProps> = () => (
  <div style={{ fontSize: '36px', textAlign: 'center' }}>Not Found</div>
);

export default NotFound;
