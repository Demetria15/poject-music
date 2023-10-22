import Buttons from "./Buttons";
import Artist from "./Artist";
import PropTypes from "prop-types";

const Single = (props) => {
  return (
    <section>
      <h2 className="sub-title">New Singles</h2>
      <div className="albums albums-type-singles">
        {props.data.albums.items.map((singleItem) => {
          if (singleItem.album_type === 'single') {
            return (
              <div className="album-info" key={singleItem.id}>
                <div className="img-btn-cover">
                  <div className="album-img-container">
                    <img className="album-img" src={singleItem.images[0].url} alt={singleItem.name} />
                  </div>
                  <Buttons />
                </div>
                <a
                  className="album-name"
                  target="_blank"
                  href={singleItem.external_urls.spotify}
                  alt={singleItem.name}
                  rel="noreferrer"
                >
                  {singleItem.name}
                </a>
                <Artist artistName={singleItem.artists} />
              </div>
            );
          } else {
            return null; // or <div key={singleItem.id}></div>
          }
        })}
      </div>
    </section>
  );
};

Single.propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          album_type: PropTypes.string,
          id: PropTypes.string,
          images: PropTypes.arrayOf(
            PropTypes.shape({
              url: PropTypes.string,
            })
          ),
          name: PropTypes.string,
          external_urls: PropTypes.shape({
            spotify: PropTypes.string,
          }),
          artists: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              external_urls: PropTypes.shape({
                spotify: PropTypes.string,
              }),
              name: PropTypes.string,
            })
          ),
        })
      ),
    }),
  }),
};

export default Single;
