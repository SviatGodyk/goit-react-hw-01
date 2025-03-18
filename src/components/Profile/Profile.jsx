import css from "../Profile/Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p> <p>{tag}</p> <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>{followers}</span>
        </li>
        <li>
          <span>{views}</span>
        </li>
        <li>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
