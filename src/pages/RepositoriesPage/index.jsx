import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Profile from "./profile";
import Filter from "./filter";
import Repositories from "./Repositories";

import { Loading, Container, Sidebar, Main } from "./styles";

import { getUser, getRepos, getLangsFrom } from "../../services/api";

const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLang, setCurrentLang] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResposonse] = await Promise.all([
        getUser(login),
        getRepos(login),
        console.log("getuser, repo"),
      ]);
      setUser(userResponse.data);
      console.log("setUser")
      setRepositories(repositoriesResposonse.data);
      console.log("serRepo")
      setLanguages(getLangsFrom(repositoriesResposonse.data));
      console.log("setlangs")

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLang(language);
    console.log("clica noq")
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLang={currentLang}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLang={currentLang} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
