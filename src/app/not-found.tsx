'use client';

import { FC } from 'react';

type ErrorProps = {
  reset: () => void;
};

const NotFound: FC<ErrorProps> = () => <div>Not found</div>;

export default NotFound;
