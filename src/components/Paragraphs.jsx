import React from "react";
import { useTranslation } from "react-i18next";

const Paragraphs = ({ keys }) => {
  const { t } = useTranslation();

  return (
    <>
      {keys.map((key, index) => (
        <p key={index}>{t(key)}</p>
      ))}
    </>
  );
};

export default Paragraphs;
