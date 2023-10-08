import * as React from "react"

// Preload font (server-side) for better performance
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/bandeins-strange-variable.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="bandeinsStrangeFont"
    />,
  ])
}