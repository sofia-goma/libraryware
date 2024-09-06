// team card -> for contributors to the librarywave project
interface ITeam {
  name: string;
  job: string;
  githubLink?: string;
  linkedinLink?: string;
  twitterLink?: string;
  imageSrc?: string;
}

// for the application features

interface IFeatures {
  heading?: string;
  description?: string;
  icon?: any | JSX.Element;
}

// for authentification with autho

interface IAuth0 {
  login: (connection?: string) => Promise<void>;
  logout: () => void | Promise<void>;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  user?: User;
}

// for citation

interface ICitation {
  text: string;
  author: string;
}

// for creating a post

interface IPost {
  body: string;
}
