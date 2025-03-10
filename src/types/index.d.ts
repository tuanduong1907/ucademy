export type ActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

export type TMenuItems = {
  url: string;
  title: string;
  icon: React.ReactNode;
};

// User
export type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};
