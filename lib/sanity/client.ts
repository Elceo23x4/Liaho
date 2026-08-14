import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-08-14";

export function getSanityClient() {
  if (!projectId) {
    throw new Error(
      "NEXT_PUBLIC_SANITY_PROJECT_ID is not configured. Sanity is optional until the CMS gate.",
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
  });
}
