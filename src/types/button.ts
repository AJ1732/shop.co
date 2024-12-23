export type ButtonLinkProps = {
  label: string | React.ReactNode;
  link?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};
