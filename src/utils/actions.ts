"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { TagTypesType } from "../redux/backendApi";

// Reset server data
export const revalidatePathAction = async (pathname?: string, pathtype?: "layout" | "page") => {
  const name = pathname ?? "/";
  const type = pathtype ?? "layout";

  revalidatePath(name, type);
  return true;
};

// **
export const revalidateTagsAction = async (tags: TagTypesType[]) => {
  tags.forEach((tag) => revalidateTag(tag));
  return true;
};

// **
// export const checkModalHeaderAction = async () => {
//   return !!headers().get("x-middleware-custom-modal-header");
// };
