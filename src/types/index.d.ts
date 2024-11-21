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

export { TActiveLink, TMenuItem, TChildren };
