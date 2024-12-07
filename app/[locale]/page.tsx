import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations();
  return <h1>{t("home")}</h1>;
}
