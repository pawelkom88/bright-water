import Button from "components/Button/Button";
import classes from "./topBannerSection.module.scss";

export default function TopBannerSection({ topBannerImage }) {
  return (
    <section className={classes.hero}>
      <h1 className={classes.heading}>The sip of Joy</h1>
      <p className={classes.paragraph}>Eco-friendly water bottles just for you.</p>
      <Button className={classes.button}>
        <a href="#products">Shop now</a>
        {/* check if Link component works */}
      </Button>
    </section>
  );
}
