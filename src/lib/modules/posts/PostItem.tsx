"use client";

import * as React from "react";
import { Post } from "./PostTypes";
import { Markdown } from "@/lib/ui/markdown/Markdown";
import { Routes } from "@/lib/constants/ApiRoutes";
import TagItem from "./TagItem";
import { v4 as uuid } from "uuid";
import styles from "./PostItem.module.css";
import classNames from "classnames";
import { Editor } from "@/lib/ui/editor/editor";
import useEditing from "@/lib/ui/editor/useEditing";
import PostItemToolbar from "./PostItemToolbar";
import HttpService from "@/lib/utils/HttpService";

export default function PostItem({
  post,
  backupImg,
  cookbookId,
}: {
  post: Post;
  backupImg: string;
  cookbookId: string;
}) {
  const { user: postUser, tags, id } = post;
  const { isEditing, setIsEditing, body, setBody, canEdit } = useEditing({
    initialBody: post.body ?? "",
  });

  async function handleSave() {
    post.body = body;
    setIsEditing(false);
    try {
      await HttpService.put(Routes.POSTS_EDIT(cookbookId, id), post);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-1 gap-x-4 items-baseline w-full md:max-w-4xl">
      <div>
        <img
          className={classNames("inline-block rounded-full", styles.avatar)}
          src={Routes.DISCORD_AVATAR(
            postUser.discordId,
            postUser.discordAvatar
          )}
          alt=""
          onError={(e: any) => {
            e.target.src = backupImg;
          }}
        />
      </div>
      <div className="w-full">
        <div className="relative text-lg text-white">
          {postUser.discordUsername}
          {canEdit && (
            <PostItemToolbar
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              onSave={handleSave}
            />
          )}
        </div>
        <div className="text-gray-500 flex gap-x-2 flex-wrap">
          {tags.map((tag) => (
            <TagItem key={uuid()} tag={tag} />
          ))}
        </div>
        {isEditing ? (
          <Editor body={post.body} onChange={setBody} />
        ) : (
          <Markdown body={post.body} />
        )}
      </div>
    </div>
  );
}
