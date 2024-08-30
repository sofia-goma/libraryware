interface IButton {
  title?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void | null;
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
