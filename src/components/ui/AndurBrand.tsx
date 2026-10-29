import andurLogoDark from '../../assets/brand/andur-logo-dark.svg';
import andurLogoLight from '../../assets/brand/andur-logo-light.svg';
import andurSymbolDark from '../../assets/brand/andur-symbol-dark.svg';
import andurSymbolLight from '../../assets/brand/andur-symbol-light.svg';
import { Theme } from '../../types';

interface AndurBrandProps {
  theme: Theme;
  variant?: 'lockup' | 'symbol';
  className?: string;
  decorative?: boolean;
}

export default function AndurBrand({
  theme,
  variant = 'lockup',
  className,
  decorative = false,
}: AndurBrandProps) {
  const isDark = theme === 'dark';
  const src =
    variant === 'symbol'
      ? isDark
        ? andurSymbolDark
        : andurSymbolLight
      : isDark
        ? andurLogoDark
        : andurLogoLight;

  return <img src={src} alt={decorative ? '' : 'Andur'} className={className} />;
}
