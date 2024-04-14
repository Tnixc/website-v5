/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      'sans': ['zed-sans-extended', 'ui-sans-serif', 'system-ui'],
      'bold': ['zed-sans-extendedbold', 'ui-sans-serif', 'system-ui'],
      'display': ['Zodiak-LightItalic', 'ui-serif', 'Georgia'],
    },
    extend: {},
  },
  plugins: [],
};
