import React from "react";

const Form = () => {
  const [memes, setMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  const handleClick = () => {
    const randomIndex = Math.round(Math.random() * memes.length);
    const url = memes[randomIndex].url;

    setMeme((prevMeme) => ({ ...prevMeme, url: url }));
  };

  const handleChange = (e) => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [e.target.name]: e.target.value,
      };
    });
  };

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setMemes(res.data.memes));
  }, []);

  return (
    <div className="container">
      <div action="#" className="form">
        <div className="form__inputs">
          <input
            type="text"
            placeholder="Top Text!!"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
          />
          <input
            type="text"
            placeholder="Bottom Text!!"
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
          />
        </div>

        <div className="form__button">
          <button className="btn" onClick={handleClick}>
            Generate Meme
          </button>
        </div>
      </div>

      <div className="result">
        <div className="top__text group">{meme.topText}</div>
        <img src={meme.url} alt="Meme Image" className="meme__img" />
        <div className="bottom__text group">{meme.bottomText}</div>
      </div>
    </div>
  );
};

export default Form;
