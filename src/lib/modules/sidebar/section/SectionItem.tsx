import * as React from "react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { Cookbook } from "../../cookbooks/CookbookTypes";
import { Guide } from "../../guides/GuideTypes";
import { Section } from "../../sections/SectionTypes";

export default function SectionItem({
  cookbook,
  guide,
  section,
}: {
  cookbook: Cookbook;
  guide: Guide;
  section: Section;
}) {
  return (
    <li>
      <Link
        href={`/${cookbook.name}/${guide.name}/${section.name}`}
        className={classNames(
          "text-indigo-200 hover:text-white hover:bg-teal-500",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <DocumentIcon
          className={classNames(
            "text-indigo-200 group-hover:text-white",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        <span className="truncate text-ellipsis">{section.name}</span>
      </Link>
    </li>
  );
}