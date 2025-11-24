/**
 * Design System Color Tokens
 *
 * 이 파일은 프로젝트 전체에서 사용되는 색상을 정의합니다.
 * 모든 색상은 이 토큰을 통해 사용하여 일관성을 유지합니다.
 */

// =============================================================================
// Primitive Colors (기본 색상 팔레트)
// =============================================================================

export const primitiveColors = {
  // Blue
  blue50: '#e3f2fd',
  blue100: '#90caf9',
  blue500: '#1976d2',
  blue600: '#1565c0',
  blue700: '#0d47a1',
  blue800: '#007bff',
  blueInfo: '#0288d1',

  // Green
  green50: '#e8f5e9',
  green100: '#81c784',
  green500: '#388e3c',
  green600: '#2e7d32',
  green700: '#1b5e20',

  // Red
  red50: '#ffebee',
  red100: '#e57373',
  red400: '#ef4444',
  red500: '#d32f2f',
  red600: '#c62828',
  red700: '#b71c1c',

  // Orange
  orange50: '#fff3e0',
  orange100: '#ffb74d',
  orange500: '#f57c00',
  orange600: '#ed6c02',
  orange700: '#e65100',

  // Gray
  gray50: '#fafafa',
  gray100: '#f7fafc',
  gray150: '#f5f5f5',
  gray200: '#f0f0f0',
  gray250: '#e5e7eb',
  gray300: '#e0e0e0',
  gray350: '#ddd',
  gray400: '#d1d5db',
  gray450: '#ccc',
  gray500: '#bdbdbd',
  gray550: '#999',
  gray600: '#757575',
  gray650: '#718096',
  gray700: '#6b7280',
  gray750: '#666',
  gray800: '#424242',
  gray850: '#374151',
  gray900: '#333',
  gray950: '#1a202c',

  // Neutral
  white: '#ffffff',
  black: '#000000',
} as const;

// =============================================================================
// Alpha Colors (투명도가 있는 색상)
// =============================================================================

export const alphaColors = {
  blackAlpha4: 'rgba(0, 0, 0, 0.04)',
  blackAlpha8: 'rgba(0, 0, 0, 0.08)',
  blackAlpha10: 'rgba(0, 0, 0, 0.1)',
  blackAlpha12: 'rgba(0, 0, 0, 0.12)',
  blackAlpha14: 'rgba(0, 0, 0, 0.14)',
  blackAlpha20: 'rgba(0, 0, 0, 0.2)',
  blackAlpha23: 'rgba(0, 0, 0, 0.23)',
  blackAlpha50: 'rgba(0, 0, 0, 0.5)',
  blackAlpha54: 'rgba(0, 0, 0, 0.54)',
  blackAlpha60: 'rgba(0, 0, 0, 0.6)',
  blackAlpha87: 'rgba(0, 0, 0, 0.87)',
} as const;

// =============================================================================
// Semantic Colors (의미 기반 색상)
// =============================================================================

export const semanticColors = {
  // Primary
  primary: {
    main: primitiveColors.blue500,
    dark: primitiveColors.blue600,
    light: primitiveColors.blue50,
    border: primitiveColors.blue100,
    contrastText: primitiveColors.white,
  },

  // Success
  success: {
    main: primitiveColors.green500,
    dark: primitiveColors.green600,
    darker: primitiveColors.green700,
    light: primitiveColors.green50,
    border: primitiveColors.green100,
    contrastText: primitiveColors.white,
  },

  // Error / Danger
  error: {
    main: primitiveColors.red500,
    dark: primitiveColors.red600,
    darker: primitiveColors.red700,
    light: primitiveColors.red50,
    border: primitiveColors.red100,
    accent: primitiveColors.red400,
    contrastText: primitiveColors.white,
  },

  // Warning
  warning: {
    main: primitiveColors.orange500,
    dark: primitiveColors.orange600,
    darker: primitiveColors.orange700,
    light: primitiveColors.orange50,
    border: primitiveColors.orange100,
    contrastText: primitiveColors.white,
  },

  // Info
  info: {
    main: primitiveColors.blueInfo,
    dark: primitiveColors.blue700,
    light: primitiveColors.blue50,
    border: primitiveColors.blue100,
    contrastText: primitiveColors.white,
  },

  // Secondary (Neutral)
  secondary: {
    main: primitiveColors.gray600,
    dark: primitiveColors.gray800,
    light: primitiveColors.gray150,
    border: primitiveColors.gray350,
    contrastText: primitiveColors.white,
  },
} as const;

// =============================================================================
// Component Colors (컴포넌트별 색상)
// =============================================================================

export const componentColors = {
  // Button
  button: {
    primary: {
      background: semanticColors.primary.main,
      backgroundHover: semanticColors.primary.dark,
      border: semanticColors.primary.dark,
      text: primitiveColors.white,
    },
    secondary: {
      background: primitiveColors.gray150,
      backgroundHover: primitiveColors.gray300,
      border: primitiveColors.gray350,
      text: primitiveColors.gray900,
    },
    danger: {
      background: semanticColors.error.main,
      backgroundHover: semanticColors.error.dark,
      border: semanticColors.error.dark,
      text: primitiveColors.white,
    },
    success: {
      background: semanticColors.success.main,
      backgroundHover: semanticColors.success.dark,
      border: semanticColors.success.dark,
      text: primitiveColors.white,
    },
    disabled: {
      background: primitiveColors.gray150,
      border: primitiveColors.gray350,
      text: primitiveColors.gray600,
    },
  },

  // Badge
  badge: {
    primary: {
      background: semanticColors.primary.main,
      text: primitiveColors.white,
    },
    secondary: {
      background: semanticColors.secondary.main,
      text: primitiveColors.white,
    },
    success: {
      background: semanticColors.success.main,
      text: primitiveColors.white,
    },
    danger: {
      background: semanticColors.error.main,
      text: primitiveColors.white,
    },
    warning: {
      background: semanticColors.warning.main,
      text: primitiveColors.white,
    },
    info: {
      background: semanticColors.info.main,
      text: primitiveColors.white,
    },
  },

  // Alert
  alert: {
    info: {
      background: semanticColors.info.light,
      border: semanticColors.info.border,
      text: semanticColors.info.dark,
    },
    success: {
      background: semanticColors.success.light,
      border: semanticColors.success.border,
      text: semanticColors.success.darker,
    },
    warning: {
      background: semanticColors.warning.light,
      border: semanticColors.warning.border,
      text: semanticColors.warning.darker,
    },
    error: {
      background: semanticColors.error.light,
      border: semanticColors.error.border,
      text: semanticColors.error.darker,
    },
    default: {
      background: primitiveColors.gray150,
      border: primitiveColors.gray500,
      text: primitiveColors.gray800,
    },
  },

  // Form
  form: {
    label: primitiveColors.gray900,
    input: {
      background: primitiveColors.white,
      border: primitiveColors.gray450,
      borderFocus: semanticColors.primary.main,
      borderError: semanticColors.error.main,
      text: primitiveColors.black,
      placeholder: primitiveColors.gray750,
      disabled: {
        background: primitiveColors.gray150,
        border: alphaColors.blackAlpha12,
      },
    },
    helperText: primitiveColors.gray750,
    errorText: semanticColors.error.main,
    requiredIndicator: semanticColors.error.main,
  },

  // Checkbox
  checkbox: {
    border: primitiveColors.gray400,
    background: primitiveColors.white,
    checked: {
      background: semanticColors.primary.main,
      border: semanticColors.primary.main,
      checkmark: primitiveColors.white,
    },
    label: primitiveColors.gray850,
    labelError: semanticColors.error.accent,
    hint: primitiveColors.gray700,
  },

  // Card
  card: {
    background: primitiveColors.white,
    border: alphaColors.blackAlpha12,
    borderHover: alphaColors.blackAlpha8,
    header: {
      background: primitiveColors.gray50,
    },
    title: alphaColors.blackAlpha87,
    subtitle: alphaColors.blackAlpha60,
    flat: {
      background: primitiveColors.gray50,
    },
  },

  // Table
  table: {
    background: primitiveColors.white,
    header: {
      background: primitiveColors.gray50,
      text: alphaColors.blackAlpha60,
      borderBottom: alphaColors.blackAlpha12,
      borderBottomLight: alphaColors.blackAlpha8,
    },
    cell: {
      text: alphaColors.blackAlpha87,
      border: alphaColors.blackAlpha8,
    },
    striped: primitiveColors.gray50,
    hover: alphaColors.blackAlpha4,
  },

  // Modal
  modal: {
    overlay: alphaColors.blackAlpha50,
    background: primitiveColors.white,
    header: {
      border: alphaColors.blackAlpha12,
    },
    title: alphaColors.blackAlpha87,
    closeButton: {
      text: alphaColors.blackAlpha54,
      hover: alphaColors.blackAlpha4,
    },
  },

  // Header
  header: {
    background: primitiveColors.white,
    border: primitiveColors.gray250,
    shadow: alphaColors.blackAlpha10,
    logo: {
      background: primitiveColors.blue800,
      text: primitiveColors.white,
    },
    title: primitiveColors.gray950,
    subtitle: primitiveColors.gray650,
    avatar: {
      background: primitiveColors.blue50,
      text: primitiveColors.blue800,
    },
  },

  // Page
  page: {
    background: primitiveColors.gray100,
    backgroundAlt: primitiveColors.gray200,
    title: primitiveColors.gray900,
    text: primitiveColors.gray750,
    divider: primitiveColors.gray450,
    border: primitiveColors.gray350,
  },

  // Status Indicators
  status: {
    active: semanticColors.success.dark,
    draft: semanticColors.warning.dark,
    suspended: semanticColors.error.main,
    admin: semanticColors.primary.main,
  },
} as const;

// =============================================================================
// Shadow Colors (그림자)
// =============================================================================

export const shadowColors = {
  sm: `0 1px 2px ${alphaColors.blackAlpha10}`,
  md: `0 2px 4px ${alphaColors.blackAlpha12}`,
  lg: `0 4px 6px ${alphaColors.blackAlpha10}, 0 2px 4px ${alphaColors.blackAlpha14}`,
  xl: `0 10px 15px ${alphaColors.blackAlpha10}, 0 4px 6px ${alphaColors.blackAlpha20}`,
  card: `0 1px 3px ${alphaColors.blackAlpha12}, 0 1px 2px ${alphaColors.blackAlpha8}`,
  header: `0 1px 3px ${alphaColors.blackAlpha10}`,
} as const;

// =============================================================================
// Export All
// =============================================================================

export const colors = {
  primitive: primitiveColors,
  alpha: alphaColors,
  semantic: semanticColors,
  component: componentColors,
  shadow: shadowColors,
} as const;

export default colors;
