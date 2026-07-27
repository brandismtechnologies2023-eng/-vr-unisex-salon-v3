import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/services/ServiceDetail";
import InstagramFeed from "@/components/home/InstagramFeed";
import { getServices, getServiceBySlug } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Content is DB-backed and admin-editable, so pages revalidate rather than
// being frozen at build time.
export const revalidate = 60;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle ?? `${service.title} | ${siteConfig.name}`,
    description: service.metaDescription ?? service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} instagramFeed={<InstagramFeed />} />;
}
