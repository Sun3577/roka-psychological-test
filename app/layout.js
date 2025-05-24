import "./globals.css";

export const metadata = {
  title: "또상이",
  description: "육군 대화형 심리 검사",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        {children}
      </body>
    </html>
  );
}
