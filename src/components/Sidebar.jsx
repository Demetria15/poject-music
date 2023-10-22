

import PropTypes from "prop-types";

const SideBar = (props) => {
  return (
    <section className="sidebar">
      <h2 className="playlist-title">Editors pick</h2>
      <div className="playlist-items">
        {props.sidebarData.playlists.items.map((singlePlaylist) => {
          return (
            <a
            key={singlePlaylist.id}
              target="_blank"
              className="playlist"
              href={singlePlaylist.external_urls.spotify}
              alt="playlist name"
              rel="noreferrer"
            >
              {singlePlaylist.name}
            </a>
          );
        })}
      </div>
    </section>
  );
};

SideBar.propTypes = {
  sidebarData: PropTypes.shape({
    playlists: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          external_urls: PropTypes.shape({
            spotify: PropTypes.string,
          }),
        })
      ),
    }),
  }),
};

export default SideBar;
