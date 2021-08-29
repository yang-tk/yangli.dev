import { css, FlattenSimpleInterpolation } from 'styled-components'

export const code_dark: FlattenSimpleInterpolation = css`
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  } /*!
  Theme: StackOverflow Dark
  Description: Dark theme as used on stackoverflow.com
  Author: stackoverflow.com
  Maintainer: @Hirse
  Website: https://github.com/StackExchange/Stacks
  License: MIT
  Updated: 2021-05-15

  Updated for @stackoverflow/stacks v0.64.0
  Code Blocks: /blob/v0.64.0/lib/css/components/_stacks-code-blocks.less
  Colors: /blob/v0.64.0/lib/css/exports/_stacks-constants-colors.less
*/
  .hljs {
    color: #fff;
    background: #1c1b1b;
  }
  .hljs-subst {
    color: #fff;
  }
  .hljs-comment {
    color: #999;
  }
  .hljs-attr,
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-section,
  .hljs-selector-tag {
    color: #88aece;
  }
  .hljs-attribute {
    color: #c59bc1;
  }
  .hljs-name,
  .hljs-number,
  .hljs-quote,
  .hljs-selector-id,
  .hljs-template-tag,
  .hljs-type {
    color: #f08d49;
  }
  .hljs-selector-class {
    color: #88aece;
  }
  .hljs-link,
  .hljs-regexp,
  .hljs-selector-attr,
  .hljs-string,
  .hljs-symbol,
  .hljs-template-variable,
  .hljs-variable {
    color: #b5bd68;
  }
  .hljs-meta,
  .hljs-selector-pseudo {
    color: #88aece;
  }
  .hljs-built_in,
  .hljs-literal,
  .hljs-title {
    color: #f08d49;
  }
  .hljs-bullet,
  .hljs-code {
    color: #ccc;
  }
  .hljs-meta .hljs-string {
    color: #b5bd68;
  }
  .hljs-deletion {
    color: #de7176;
  }
  .hljs-addition {
    color: #76c490;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
`

export const dark_color = {
  default: '#FFFFFF',
  primary: '#1190F5',
  secondary: '#FFFFFF',
  background: '#22272E',
  background_primary: '#4B5563',
  icon: '#CDD9E5',
  headline: '#CDD9E5',
  typography: '#CDD9E5',
  caption: '#FFFFFFB3',
  surface: '#2D333B',
  surface_shadow: '#2D333B',
  surface_variant: '#2D333B',
  overlay: '#0000008A',
  link: '#2EA6FF',
  border_base: '#6D6D6D',
  border_primary: '#1190F5',
  action: '#1190F5',
  error: '#B00020',
  diabled: '#A7A7A7',
  box_shadow:
    '0px 4px 5px 0px hsla(0, 0%, 0%, 0.14),0px 1px 10px 0px hsla(0, 0%, 0%, 0.12),0px 2px 4px -1px hsla(0, 0%, 0%, 0.2);',
  code_blocks: code_dark
}
