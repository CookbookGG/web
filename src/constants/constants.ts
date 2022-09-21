export const ENV = {
  API_URL: 'https://api.dev-cookbook.com',
};

export const ROUTES = {
  USERS: '/users',
  USER: (userId: string) => `/users/${userId}`,
  COOKBOOKS: '/cookbooks',
  COOKBOOK: (cookbookId: string) => `/cookbooks/${cookbookId}`,
  GUIDES: (cookbookId: string) => `/cookbooks/${cookbookId}/guides`,
  GUIDE: (cookbookId: string, guideId: string) =>
    `/cookbooks/${cookbookId}/guides/${guideId}`,
};

export const DISCORD = {
  // authUrl: encodeURI(
  //   `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_ID}&redirect_uri=${window.location.origin}/login&response_type=code&scope=identify email`
  // ),
  getAvatarUrl: function (id, avatar) {
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
  },
};
