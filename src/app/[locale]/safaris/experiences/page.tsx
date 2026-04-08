import { redirect } from "next/navigation";

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/safaris/philosophy`);
}
