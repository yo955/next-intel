import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
