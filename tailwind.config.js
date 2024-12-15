/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Update to match your project's structure
    "./public/index.html",
  ],

  plugins: [
    require('daisyui'),
  ],
}

