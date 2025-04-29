import "./globals.css";

export const metadata = {
  title: "Matheus Saito",
  description: "Portfólio de Desenvolvedor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
