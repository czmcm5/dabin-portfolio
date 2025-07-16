/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Tailwind가 스타일 적용할 파일 경로
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js 사용 시
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgwhite: "#fff",
        customGray: "#888888",
      },
    },
  },
  plugins: [],
};
