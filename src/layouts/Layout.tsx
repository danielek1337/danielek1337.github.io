type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return <div className="xl:px-10 px-2 overflow-hidden ">{children}</div>;
}
