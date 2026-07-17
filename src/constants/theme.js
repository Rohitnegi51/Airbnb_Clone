/**
 * Centralized Design Tokens for Visual Parity
 * These constants represent the design tokens extracted from the reference screenshots.
 */

export const COLORS = {
  brand: {
    primary: '#FF385C',     // Airbnb vibrant pink-red
    hover: '#DE1260',       // Darker pink-red for hovers
    light: '#FFF0F2',       // Light brand pink backdrop
  },
  text: {
    primary: '#222222',     // Near-black for titles and headings
    secondary: '#6A6A6A',   // Slate gray for sub-metrics & details
    muted: '#717171',       // Muted gray for small captions
    disabled: '#B0B0B0',    // Light gray for inactive states
  },
  bg: {
    white: '#FFFFFF',
    light: '#F7F7F7',       // Warm light gray for promo panels/boxes
    hover: '#F7F7F7',       // Light gray on hover
    backdrop: 'rgba(0, 0, 0, 0.45)', // Modal overlay shadow
  },
  border: {
    light: '#DDDDDD',       // Standard thin borders
    dark: '#222222',        // Focused or active borders
  },
  success: '#10B981',       // Emerald green for verified badges & checks
};

export const TYPOGRAPHY = {
  family: 'Inter, system-ui, -apple-system, sans-serif',
  sizes: {
    heroTitle: 'text-[26px] font-semibold tracking-tight leading-8',
    sectionTitle: 'text-[22px] font-semibold tracking-tight leading-[26px]',
    subSectionTitle: 'text-[18px] font-semibold tracking-tight leading-[22px]',
    body: 'text-[16px] leading-[24px] text-primary',
    bodyMuted: 'text-[16px] leading-[24px] text-secondary',
    caption: 'text-[14px] leading-[18px] text-secondary',
    metadata: 'text-[12px] leading-[16px] text-muted',
    price: 'text-[22px] font-bold text-primary',
  },
};

export const LAYOUT = {
  container: 'max-w-[1280px] mx-auto px-6',
  gridGap: 'gap-2',         // Used for photo gallery grid
  sidebarWidth: 'w-[380px]', // Fixed sidebar width for booking card
  divider: 'border-b border-borderlight py-6', // Standard vertical spacing rhythm
};

export const SHADOWS = {
  card: 'shadow-[0_6px_16px_rgba(0,0,0,0.12)]',     // Booking card & host profile
  dropdown: 'shadow-[0_2px_16px_rgba(0,0,0,0.15)]', // User navigation menus
  search: 'shadow-[0_3px_12px_rgba(0,0,0,0.08),_0_1px_2px_rgba(0,0,0,0.04)]', // Search pill
  sticky: 'shadow-[0_1px_12px_rgba(0,0,0,0.08)]',   // Pinned top navigation tabs
};

export const BORDER_RADIUS = {
  sm: 'rounded-sm',         // 4px - Input/tag boundaries
  md: 'rounded-md',         // 8px - Secondary buttons
  lg: 'rounded-lg',         // 12px - Photo grid perimeter / nearby cards
  xl: 'rounded-xl',         // 16px - Booking card / sleep arrangements
  full: 'rounded-full',     // Search pill / avatars
};

export const TRANSITIONS = {
  fast: 'transition-all duration-150 ease-in-out',
  normal: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
};

export const Z_INDEX = {
  base: 'z-0',
  sticky: 'z-30',           // Scroll tabs
  header: 'z-40',           // Top Navbar
  modal: 'z-50',            // Fullscreen lightbox/amenities popup
};
