import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Cities</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Regions</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hotels</li>
        </ul>
      </div>
      <div className="fText">Projet Tek-Up</div>
    </div>
  );
};

export default Footer;
