import React from 'react';

/**
 * Container
 * ─────────
 * Reusable layout wrapper that enforces the project's canonical content-width
 * pattern. Use it for the *inner* content div of any full-width section so that
 * colored backgrounds remain edge-to-edge while copy/grids stay aligned.
 *
 * Size variants (max-width):
 *   default  → 1450px  — primary content sections (hero copy, stats, intro, news)
 *   wide     → 1850px  — feature card grid (intentionally expansive)
 *   narrow   → 1200px  — banners, legal bars, narrow centered text
 *
 * Responsive horizontal padding (mirrors every existing section in the project):
 *   ≥1280px  → 60px (px-[60px])
 *   ≥1024px  → 40px (max-xl:px-10)
 *   ≥640px   → 24px (max-lg:px-6)
 *   ≥375px   → 20px (max-sm:px-5)
 *   <375px   → 16px (max-[375px]:px-4)
 */

type ContainerSize = 'default' | 'wide' | 'narrow';

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-[1450px]',
  wide: 'max-w-[1850px]',
  narrow: 'max-w-[1200px]',
};

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** The HTML element to render. Defaults to `div`. */
  as?: React.ElementType;
  /** Width variant. Defaults to `'default'` (1450px). */
  size?: ContainerSize;
  children: React.ReactNode;
}

export default function Container({
  as: Tag = 'div',
  size = 'default',
  className = '',
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={[
        'mx-auto w-full',
        sizeClasses[size],
        // Canonical responsive horizontal padding used across all project sections
        'px-[60px] max-xl:px-10 max-lg:px-6 max-sm:px-5 max-[375px]:px-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
