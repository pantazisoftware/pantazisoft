import type { ComponentType } from "react";
import type { ProductSlug } from "@/lib/products";
import { fabricatorProReplicas } from "./fabricator-pro";
import { remotoReplicas } from "./remoto";
import { feedfastReplicas } from "./feedfast";
import { bookifyReplicas } from "./bookify";
import { webscoreReplicas } from "./webscore";
import { gdprfixReplicas } from "./gdprfix";
import { memoReplicas } from "./memo";

/**
 * One replica per feature, in the same order as `features` in each product's
 * copy. A feature without one falls back to its icon on the product colour.
 */
export const replicas: Record<ProductSlug, ComponentType[]> = {
  "fabricator-pro": fabricatorProReplicas,
  remoto: remotoReplicas,
  feedfast: feedfastReplicas,
  bookify: bookifyReplicas,
  webscore: webscoreReplicas,
  gdprfix: gdprfixReplicas,
  memo: memoReplicas,
};

export { ReplicaStage } from "./stage";
