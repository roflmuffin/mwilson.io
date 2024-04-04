// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string;
  link: string;
}

export const siteConfig: Config = {
  title: "mwilson",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Michael Wilson",
    description: "Full Stack Software Engineer"
  }
}

/** 
  Uses https://github.com/natemoo-re/astro-icon#readme
  Find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/roflmuffin",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/michael-wilson-a0791798/",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:shortguy014@gmail.com",
  },

];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "about",
    path: "/about",
  },
  {
    title: "projects",
    path: '/projects'
  }
];
