import './components.css';

const activityVerb = {
  favorite: 'added',
  watchLater: 'added',
  removeFavorited: 'removed',
  removeWatchLater: 'removed',
};

const activityDestination = {
  favorite: 'to favorites',
  watchLater: 'to watch later',
  removeFavorited: 'from favorites',
  removeWatchLater: 'from watch later',
};

function Activity({ activity }) {
  const username = activity.user?.username || 'Unknown';
  const titleName = activity.title?.title || 'Unknown';
  const verb = activityVerb[activity.activityType] || 'updated';
  const destination = activityDestination[activity.activityType] || '';
  const date = activity.createdAt
    ? new Date(activity.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <li className="activity-item">
      <p>
        <span className="activity-username">{username}</span>
        {` ${verb} `}
        <span className="activity-title">{titleName}</span>
        {` ${destination}`}
        {date && <em> - {date}</em>}
      </p>
    </li>
  );
}

export default Activity;