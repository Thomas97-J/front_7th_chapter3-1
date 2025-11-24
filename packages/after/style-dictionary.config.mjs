/**
 * Style Dictionary Configuration
 *
 * 이 설정 파일은 tokens.json을 다양한 플랫폼 포맷으로 변환합니다.
 *
 * 사용법:
 *   npx style-dictionary build --config style-dictionary.config.mjs
 *
 * 출력 포맷:
 *   - CSS Variables (Web)
 *   - SCSS Variables (Web)
 *   - TypeScript (React/React Native)
 *   - iOS (Swift)
 *   - Android (XML)
 */

export default {
  source: ["src/styles/tokens/tokens.json"],
  platforms: {
    // ==========================================================================
    // Web - CSS Custom Properties
    // ==========================================================================
    css: {
      transformGroup: "css",
      buildPath: "dist/tokens/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    // ==========================================================================
    // Web - SCSS Variables
    // ==========================================================================
    scss: {
      transformGroup: "scss",
      buildPath: "dist/tokens/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    // ==========================================================================
    // Web - JavaScript/TypeScript
    // ==========================================================================
    js: {
      transformGroup: "js",
      buildPath: "dist/tokens/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
        {
          destination: "tokens.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },

    // ==========================================================================
    // React Native
    // ==========================================================================
    reactNative: {
      transformGroup: "react-native",
      buildPath: "dist/tokens/",
      files: [
        {
          destination: "tokens.native.js",
          format: "javascript/es6",
        },
      ],
    },

    // ==========================================================================
    // iOS - Swift
    // ==========================================================================
    ios: {
      transformGroup: "ios-swift",
      buildPath: "dist/tokens/ios/",
      files: [
        {
          destination: "DesignTokens.swift",
          format: "ios-swift/class.swift",
          className: "DesignTokens",
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    // ==========================================================================
    // Android - XML Resources
    // ==========================================================================
    android: {
      transformGroup: "android",
      buildPath: "dist/tokens/android/",
      files: [
        {
          destination: "colors.xml",
          format: "android/colors",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "dimens.xml",
          format: "android/dimens",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },

    // ==========================================================================
    // JSON - For design tools (Figma plugins, etc.)
    // ==========================================================================
    json: {
      transformGroup: "js",
      buildPath: "dist/tokens/",
      files: [
        {
          destination: "tokens.flat.json",
          format: "json/flat",
        },
        {
          destination: "tokens.nested.json",
          format: "json/nested",
        },
      ],
    },
  },
};
