import styles from './VideoCard.module.css';
import Link from 'next/link';

const VideoCard = ({
  video
}) => {
  const bkStyle = {
    background: `url(${video.coverImage.asset.url}) no-repeat center center; background-size: cover !important`,
  };

  return (
    <div className={styles.card} style={bkStyle}>
      <div className={styles.cardinfo}>
        <div className={styles.carddescription}>
          <h3>{video.title}</h3>
          <div className="avatarrow">
            <p className="uppercase">{video.instructor.name}</p>
            <img src={video.instructor.avatar.asset.url} className="avatar" />
          </div>
        </div>
        <div>
          <p>{video.blurb}</p>
        </div>
        <div className={styles.cardbutton}>
          <Link href="/learn/[slug]" as={`/learn/${video.slug.current}`}>
            <a className="btn btndark">Watch Course</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
