import './layout.css';
import { createElement, ElementType, FC, ReactNode } from 'react';
import { Footer } from '../footer/footer.jsx';
import { Header } from '../header/header.jsx';

type LayoutProps = {
  children: ReactNode;
  element?: ElementType;
  appVersion: string;
};

export const Layout: FC<LayoutProps> = ({ children, element = 'main', appVersion }) => (
  <div className="layout-wrapper">
    <Header appVersion={appVersion} />

    {createElement(
      element,
      { className: 'layout-main' },
      <div className="layout-container">{children}</div>,
    )}

    <Footer />
  </div>
);
