import FooterImage from "./footer.jpeg";

export function Footer() {
  return (
    <div class="footer">
      <div>
        <img src={FooterImage} width="500px"></img>
        JCE project team (Liran Libster, Bar David, Stav David, Almog Yitzhak,
        Alona Laskar) ©️ All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
