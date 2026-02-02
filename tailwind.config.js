export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        surface: "#0f172a",
        primary: "#f7df1e",
        text: "#e5e7eb",
        muted: "#94a3b8"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
}
