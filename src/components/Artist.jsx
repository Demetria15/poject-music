import PropTypes from "prop-types";

const Artist = (props) => {
  return (
    <div className="artist">
      {props.artistName.map((artist, index) => {
        return (
          <a
            key={artist.id}
            className="artist-name"
            target="_blank"
            href={artist.external_urls.spotify}
            alt="artist-name"
            rel="noreferrer"
          >
            {artist.name} {props.artistName.length - 1 > index ? ", " : ""}
          </a>
        );
      })}
    </div>
  );
};

// Define prop types for the Artist component
Artist.propTypes = {
  artistName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      external_urls: PropTypes.shape({
        spotify: PropTypes.string,
      }),
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Artist;
