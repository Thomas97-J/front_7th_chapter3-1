/**
 * Semantic Design Tokens
 *
 * Tailwind CSS 변수를 참조하는 시맨틱 토큰
 * CSS 변수를 사용하여 다크모드 자동 지원
 */

export const semantic = {
  colors: {
    // Background
    background: {
      default: "bg-background",
      card: "bg-card",
      muted: "bg-muted",
      accent: "bg-accent",
    },

    // Text
    text: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      card: "text-card-foreground",
      accent: "text-accent-foreground",
    },

    // Status
    status: {
      success: {
        bg: "bg-emerald-500",
        text: "text-emerald-500",
        bgLight: "bg-emerald-50 dark:bg-emerald-950",
      },
      warning: {
        bg: "bg-amber-500",
        text: "text-amber-500",
        bgLight: "bg-amber-50 dark:bg-amber-950",
      },
      error: {
        bg: "bg-destructive",
        text: "text-destructive",
        bgLight: "bg-red-50 dark:bg-red-950",
      },
      info: {
        bg: "bg-sky-500",
        text: "text-sky-500",
        bgLight: "bg-sky-50 dark:bg-sky-950",
      },
    },

    // Interactive
    interactive: {
      primary: {
        default: "bg-primary text-primary-foreground",
        hover: "hover:bg-primary/90",
      },
      secondary: {
        default: "bg-secondary text-secondary-foreground",
        hover: "hover:bg-secondary/80",
      },
      destructive: {
        default: "bg-destructive text-white",
        hover: "hover:bg-destructive/90",
      },
    },

    // Border
    border: {
      default: "border-border",
      input: "border-input",
    },
  },

  // Spacing
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },

  // Border Radius
  radius: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },

  // Shadows
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  },
} as const

export type SemanticTokens = typeof semantic
