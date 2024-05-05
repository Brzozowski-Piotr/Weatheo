const projectVersion = "v1.0";
const author = "Piotr Brzozowski";
const AuthorProfileLink = "https://www.linkedin.com/in/piotr-b-99677b2b4/";
const githubProjectLink = "https://github.com/Brzozowski-Piotr/Weatheo";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footerTextDimmed">
        Created by: <a href={AuthorProfileLink}>{author}</a>
      </p>
      <span className="footerTextDimmed">{projectVersion} </span>
      <span className="footerTextDimmed">
        <a href={githubProjectLink}>{"(GitHub Project Page)"}</a>
      </span>
    </div>
  );
};
