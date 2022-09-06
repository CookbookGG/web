const NODE_ENV = process.env.NODE_ENV;

const isLocal = NODE_ENV === 'development';

export const ENV = {
  API_URL: 'https://api.dev-cookbook.com',
  TWITCH_PARENT: isLocal ? 'localhost' : window.location.host,
};

export const ROUTES = {
  COOKBOOKS: '/cookbooks',
  COOKBOOK: cookbook_id => `/cookbooks/${cookbook_id}`,
  GUIDES: cookbook_id => `/cookbooks/${cookbook_id}/guides`,
  GUIDE: (cookbook_id, guide_id) =>
    `/cookbooks/${cookbook_id}/guides/${guide_id}`,
};

export const DISCORD = {
  // authUrl: encodeURI(
  //   `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_ID}&redirect_uri=${window.location.origin}/login&response_type=code&scope=identify email`
  // ),
  getAvatarUrl: function (id, avatar) {
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
  },
};
