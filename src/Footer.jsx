import FooterImage from "./logo.jpeg";

export function Footer() {
  return (
    <div className="footer">
      <img src={FooterImage} width="500px" height="100px"></img>
      JCE project team (Liran Libster, Bar David, Stav David, Almog Yitzhak,
      Alona Laskar) ©️ All rights reserved.
    </div>
  );
}

export default Footer;
