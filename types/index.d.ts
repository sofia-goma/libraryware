// team card -> for contributors to the librarywave project

interface ITeam {
  name: string;
  job: string;
  githubLink?: string;
  linkedinLink?: string;
  twitterLink?: string;
  imageSrc?: string;
}

interface IFeatures {
  heading?: string;
  description?: string;
  icon?: any | JSX.Element;
}

interface IAuth0 {
  login: (connection?: string) => Promise<void>;
  logout: () => void | Promise<void>;
  user?: User;
}

interface ICitation {
  text: string;
  author: string;
}

interface IPost {
  body: string;
};