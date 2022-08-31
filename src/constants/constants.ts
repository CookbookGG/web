export const ENV = {
  API_URL: 'https://api.dev-cookbook.com',
};

export const ROUTES = {
  COOKBOOKS: '/cookbooks',
  GUIDES: id => `/cookbooks/${id}/guides`,
};

export const DISCORD = {
  // authUrl: encodeURI(
  //   `https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_ID}&redirect_uri=${window.location.origin}/login&response_type=code&scope=identify email`
  // ),
  getAvatarUrl: function (id, avatar) {
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
  },
};