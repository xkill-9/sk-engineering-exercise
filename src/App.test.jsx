import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';

import App from './App';

describe('Landing Page', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  describe('Navigation', () => {
    test('should have a nav', () => {
      render(<App />);

      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    test('should have the brand logo as a link to the home page', () => {
      render(<App />);

      const logo = screen.getByAltText(/better paint/i);
      expect(logo.closest('a')).toHaveAttribute('href', '/');
    });

    test('should have a shopping bag icon as a link to the shop page', () => {
      render(<App />);

      const shoppingBagIcon = screen.getByAltText(/shopping bag/i);
      expect(shoppingBagIcon.closest('a')).toHaveAttribute('href', '/shop');
    });
  });

  describe('Hero', () => {
    test('should have a heading', () => {
      render(<App />);

      const heroHeading = screen.getByRole('heading', { level: 1 });
      expect(heroHeading).toHaveTextContent(/squeaky. clean. paint./i);
    });

    test('should have a subheading', () => {
      render(<App />);

      const heroSubHeading = screen.getByRole('heading', {
        level: 2,
        name: /hight-quality, non-toxic paint shipped right to your door./i,
      });
      expect(heroSubHeading).toBeInTheDocument();
    });

    test('should have a call to action to the shop', () => {
      render(<App />);

      const shopCta = screen.getByRole('link', {
        name: /shop the collection/i,
      });
      expect(shopCta).toHaveAttribute('href', '/shop');
    });
  });

  describe('Form', () => {
    test('should have an email input', () => {
      render(<App />);

      expect(
        screen.getByPlaceholderText(/enter your email address/i),
      ).toBeInTheDocument();
    });

    test('should have a submit button', () => {
      render(<App />);

      expect(
        screen.getByRole('button', { name: /submit/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    test('should have SHOP links', () => {
      render(<App />);

      expect(
        screen.getByRole('heading', { level: 3, name: /shop/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /face paint/i })).toHaveAttribute(
        'href',
        '/face',
      );
      expect(
        screen.getByRole('link', { name: /craft paint/i }),
      ).toHaveAttribute('href', '/craft');
      expect(
        screen.getByRole('link', { name: /spray paint/i }),
      ).toHaveAttribute('href', '/spray');
    });

    test('should have RESOURCES links', () => {
      render(<App />);

      expect(
        screen.getByRole('heading', { level: 3, name: /resources/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /blog/i })).toHaveAttribute(
        'href',
        '/blog',
      );
      expect(screen.getByRole('link', { name: /faq/i })).toHaveAttribute(
        'href',
        '/faq',
      );
      expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute(
        'href',
        '/contact',
      );
    });

    test('should have COMPANY links', () => {
      render(<App />);

      expect(
        screen.getByRole('heading', { level: 3, name: /company/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /privacy policy/i }),
      ).toHaveAttribute('href', '/privacy');
      expect(
        screen.getByRole('link', { name: /terms of use/i }),
      ).toHaveAttribute('href', '/terms');
      expect(screen.getByRole('link', { name: /about us/i })).toHaveAttribute(
        'href',
        '/us',
      );
      expect(
        screen.getByRole('link', { name: /join the team/i }),
      ).toHaveAttribute('href', '/join');
    });
  });
});
