type TActiveLink = {
  url: string;
  children: React.ReactNode;
};

type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};

type TChildren = {
  children: React.ReactNode;
};

// User
type TCreateUserParam = {
  clerkId: string;
  userName: string;
  email: string;
  name?: string;
  avatar?: string;
};

export { TActiveLink, TMenuItem, TChildren, TCreateUserParam };
