import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.marhba.com/images/lifestyle2022/cover-hammamet.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hammamet</h1>
          <h2>150 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://static.jeanmarcmorandini.com/sites/jeanmarcmorandini.com/files/styles/image_750_324/public/url_937.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sousse</h1>
          <h2>153 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://voyages-sensass.com/wp-content/uploads/2019/11/Fiesta_Beach_Club_19.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Djerba</h1>
          <h2>263 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
