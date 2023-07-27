import React from "react";
import star from "../assets/images/star.png";

const Card = ({ item }) => {

    let badgeText;
    if(item.openSpots === 0)
        badgeText = "sold out";
    else if(item.location === "Online")
        badgeText = "online";

  return (
    <div className="card box">
      {badgeText && <div className="card__badge">{ badgeText }</div>}
      <figure className="card__img">
        <img src={"src/assets/images/" + item.coverImg} alt="Person Image" />
        <figcaption className="card__img__info">
          <img src={ star } alt="Star" />
          <span>{ item.stats.rating }</span>
          <span>
            ({ item.stats.reviewCount })-{ item.location }
          </span>
        </figcaption>
      </figure>

      <div className="card__content">
        <div className="card__content__text">{ item.title }</div>

        <div className="card__content__price">
          <strong>From ${ item.price }</strong> / person
        </div>
      </div>
    </div>
  );
};

export default Card;
