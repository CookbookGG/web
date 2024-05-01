export const Routes = {
  LOGIN: "/login",
  LOGIN_SUCCESS: "/login/success",
  GAMES_GET_ALL: "/games",
  GFYCAT: "/gfycat",
  POSTS_GET_ALL: (cookbookId) => `/cookbooks/${cookbookId}/posts`,
  POSTS_EDIT: (cookbookId, postId) =>
    `/cookbooks/${cookbookId}/posts/${postId}`,
  DISCORD_AVATAR: (discordId, discordAvatar) =>
    `https://cdn.discordapp.com/avatars/${discordId}/${discordAvatar}`,

  // COOKBOOK
  COOKBOOK_GET_ALL: `/cookbooks`,
  COOKBOOK_GET_FROM_NAME: (cookbookName) => `/cookbookName/${cookbookName}`,
  COOKBOOK_EDIT: (cookbookId) => `/cookbooks/${cookbookId}`,

  // GUIDE
  GUIDES_GET_ALL: (cookbookId) => `/cookbooks/${cookbookId}/guides`,
  GUIDES_ADD: (cookbookId) => `/cookbooks/${cookbookId}/guides`,
  GUIDES_DELETE: (cookbookId, guideId) =>
    `/cookbooks/${cookbookId}/guides/${guideId}`,
  GUIDE_GET_FROM_NAME: (cookbookName, guideName) =>
    `/cookbookName/${cookbookName}/guideName/${guideName}`,

  // SECTION
  SECTIONS_ADD: (cookbookId, guideId) =>
    `/cookbooks/${cookbookId}/guides/${guideId}/sections`,
  SECTIONS_GET_ALL: (cookbookId, guideId) =>
    `/cookbooks/${cookbookId}/guides/${guideId}/sections`,
  SECTION_EDIT: (cookbookId, guideId, sectionId) =>
    `/cookbooks/${cookbookId}/guides/${guideId}/sections/${sectionId}`,
  SECTION_DELETE: (cookbookId, guideId, sectionId) =>
    `/cookbooks/${cookbookId}/guides/${guideId}/sections/${sectionId}`,
  SECTION_GET_FROM_NAME: (cookbookName, guideName, sectionName) =>
    `/cookbookName/${cookbookName}/guideName/${guideName}/sectionName/${sectionName}`,
  SECTION_VIEW_COUNT: (cookbookId, guideId, sectionId) =>
    `/cookbooks/${cookbookId}/guides/${guideId}/sections/${sectionId}/viewcounts`,
  COACHES_GET: () => `/users`,
};

export const MediaRoutes = {
  CHARACTER_ICON: (game: string, character: string) =>
    `https://media.cookbook.gg/${game}/${character}.png`,
};
