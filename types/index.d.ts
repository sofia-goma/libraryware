// import { Id } from "../convex/_generated/dataModel";

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

// post type
type IPost = {
  _id: string;
  _creationTime: number;
  title: string;
  userId: string;
  bookId: string;
  body: string;
  picture?: string;
  pictureId?: string;
};

// application user Interface
type IUser =
  | {
      _id: string;
      _creationTime: number;
      name?: string | undefined;
      image?: string | undefined;
      email?: string | undefined;
      emailVerificationTime?: number | undefined;
      phone?: string | undefined;
      phoneVerificationTime?: number | undefined;
      isAnonymous?: boolean | undefined;
    }
  | undefined;

// for comments
interface IComment {
  _id: string;
  _creationTime: number;
  userId: string;
  postId: string;
  parentId: string | null;
  body: string;
  children?: IComment[];
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

// for book card

interface IBookCard {
  id: Id<"book">;
  author?: string;
  title: string;
  cover?: string;
  href: string;
  openLibraryId: string;
}
