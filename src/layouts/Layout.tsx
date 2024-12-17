type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return <div className="xl:px-24 px-4 overflow-hidden">{children}</div>;
}
