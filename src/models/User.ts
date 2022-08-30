export interface User {
  username: string;
  discriminator: string;
  avatar?: string;
  links: string[];
  discord_id: string;
  email: string;
  token: string;
}
