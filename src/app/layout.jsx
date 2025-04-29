import "./globals.css";

export const metadata = {
  title: "Matheus Saito",
  description: "Portfólio de Desenvolvedor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="52NdwcnzmnAzuho2LZZi8yUK4E01KCtjf7kKTh4qU30"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
