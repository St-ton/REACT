import React from "react";
import { useParams } from "react-router-dom";

export const AboutPage = () => {
  const { userName } = useParams();

  return (
    <div>
      <h1>Добрый день, {userName ?? "Незнакомец"}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in totam
        tenetur repellendus sed ipsa laboriosam placeat possimus, sunt debitis
        quod odit dolore ex perferendis asperiores numquam. Nihil, ratione
        temporibus.
      </p>
    </div>
  );
};

//todo доработать AboutPage таким образом, чтобы в параментах URL передавалось имя пользователя и в странице отображалась строка Добрый день, <имя пользователя>
