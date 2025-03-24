import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: any) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
  }
}

export default function HomePage() {
  const t = useTranslations("HomePage")
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  )
}
