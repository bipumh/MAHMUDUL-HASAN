import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { experience, careerMilestones } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { education, recognition } from "@/data/education";
import {
  executiveMetrics,
  impactMetrics,
  achievementStories,
} from "@/data/achievements";
import { aiFeatures, aiPipeline, securityChains } from "@/data/ai";
import { governmentProjects, governmentEquipment } from "@/data/government";
import { capabilityJourney, principles } from "@/data/journey";
import { trainingCourses } from "@/data/training";
import { competencyGroups } from "@/data/competencies";

/**
 * The single source of truth for portfolio content, assembled from the static
 * data modules. This is the fallback used by the public site before any
 * published content exists in Supabase, and the seed for the admin draft.
 *
 * `competencyGroups` stores its `icon` as a string key (see icons.ts) so the
 * whole document is JSON-serializable for storage.
 */
const rawContent = {
  cvUrl: site.cvHref as string | null,
  profile,
  site,
  experience,
  careerMilestones,
  certifications,
  education,
  recognition,
  executiveMetrics,
  impactMetrics,
  achievementStories,
  aiFeatures,
  aiPipeline,
  securityChains,
  governmentProjects,
  governmentEquipment,
  capabilityJourney,
  principles,
  trainingCourses,
  competencyGroups: competencyGroups.map((g) => ({
    id: g.id,
    icon: g.id,
    title: g.title,
    description: g.description,
    items: g.items,
  })),
};

type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? DeepWiden<U>[]
        : T extends object
          ? { [K in keyof T]: DeepWiden<T[K]> }
          : T;

export type PortfolioContent = DeepWiden<typeof rawContent>;

export type MutableContent = PortfolioContent;

export const defaultContent: PortfolioContent = rawContent as unknown as PortfolioContent;
