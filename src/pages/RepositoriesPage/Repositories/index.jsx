import React from "react";
import PropTypes from "prop-types";

import Repository from "./Repository";

import { Container } from "./styled";

const Repositories = ({ repositories, currentLang = undefined }) => {
  const repos = repositories
    .filter(
      (repository) =>
        currentLang === undefined || repository.language === currentLang
    )
    .map((repository) => (
      <Repository key={repository.id} repository={repository} />
    ));

  return <Container>{repos}</Container>;
};

Repositories.defaultProps = {
  currentLang: undefined,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLang: PropTypes.string,
};

export default Repositories;
