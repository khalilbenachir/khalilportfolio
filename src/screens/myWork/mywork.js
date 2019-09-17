import React from "react";

import NavBar from "../../components/MyWorkNB/navBar";
import Card from "../../components/card/card";
import Cirleprogress from "../../components/progress/Circleprogress";

import { connect } from "react-redux";
import { fetchGithubRepositories } from "../../redux/portfolio/portfolio-actions";

import "./mywork.css";

const AboutMe = props => {
  const { getGithubRepositories, repositories } = props;
  React.useEffect(() => {
    getGithubRepositories();
  }, [getGithubRepositories]);
  let AllCard;
  if (repositories.length > 0) {
    AllCard = repositories.map((repository, index) => {
      const card =
        index < 10 ? (
          <Card
            key={repository.id}
            title={repository.name}
            githubLink={repository.html_url}
          />
        ) : null;

      return card;
    });
  } else {
    AllCard = <Cirleprogress />;
  }

  return (
    <div className="main__mywork">
      <div className="contentWrapper-mywork">{AllCard}</div>
      <div className="navBar-mywork">
        <NavBar className="navBar" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  repositories: state.portfolio.repositories
});

const mapDispatchToProps = dispatch => ({
  getGithubRepositories: () => dispatch(fetchGithubRepositories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe);
