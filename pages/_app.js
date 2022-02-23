import "../styles/globals.css";

function MyApp({ Component, pageProps, history }) {
  return <Component {...pageProps} {...history} />;
}

export default MyApp;

// window.renderBlogs = (containerId, history) => {
//   ReactDOM.render(
//     <App history={history} />,
//     document.getElementById(containerId)
//   );
// };

// window.unmountBlogs = (containerId) => {
//   ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
// };

// if (!document.getElementById("Blogs-container")) {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }
