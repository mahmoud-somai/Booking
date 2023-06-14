import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/256531166.jpg?k=de3cdd92f2a24c095f1ba761e590d6037d51dce6236b947b48461dd1ef495af4&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Les Orangers Garden Villas and Bungalows</span>
        <span className="fpCity">Hammamet</span>
        <span className="fpPrice">Starting from 636 DT</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/53076452.jpg?k=5b84a8681767a5754d33a321ea66f878a2873cf8491f73c1792a1738a86d977f&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Iberostar Selection Diar El Andalous</span>
        <span className="fpCity">Sousse</span>
        <span className="fpPrice">Starting from 555 DT</span>
        <div className="fpRating">
          <button>8.3</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/214545978.jpg?k=6cce7c8165f0352aa513345c19966f2ce19c1dc46843ee99630607c65e6139a7&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Dar El Jeld Hotel and Spa</span>
        <span className="fpCity">Tunis</span>
        <span className="fpPrice">Starting from 632 DT</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/239908167.jpg?k=c85e455dd96e75283994d69027c234f03dcec2bfa8ac928f9109ca253902cc30&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hasdrubal Prestige Djerba</span>
        <span className="fpCity">Djerba</span>
        <span className="fpPrice">Starting from 845 DT</span>
        <div className="fpRating">
          <button>8.1</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
