function LanguageNav({ maoriSelected, setMaoriSelected }) {
  const EnglishSelectedHandler = () => {
    setMaoriSelected(false);
  };

  const MaoriSelectedHandler = () => {
    setMaoriSelected(true);
  };
  return (
    <>
      <a
        href={() => false}
        onClick={EnglishSelectedHandler}
        className={`${maoriSelected ? "" : "active"}`}
      >
        English
      </a>
      <a
        href={() => false}
        className={`px-3 ${maoriSelected ? "active" : " "}`}
        onClick={MaoriSelectedHandler}
      >
        Maori
      </a>
    </>
  );
}

export default LanguageNav;
