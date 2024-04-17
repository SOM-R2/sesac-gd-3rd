// export default function PracContainer(props) {
// const {children} = propsp;
export default function PracContainer({ children }) {
  return (
    <>
      <header>PostList 📝</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
