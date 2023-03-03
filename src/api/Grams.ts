import Profile from './Profile';

declare global {
  interface Window {
    grams?: {
      profile: Profile;
    };
  }
}

class Grams {
  public static get profile(): Profile | undefined {
    return window.grams?.profile;
  }
}

export default Grams;
