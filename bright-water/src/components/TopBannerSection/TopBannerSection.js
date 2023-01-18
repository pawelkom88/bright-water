import classes from "./topBannerSection.module.scss";

export default function TopBannerSection({ topBannerImage }) {
  return (
    <section className={classes.hero}>
      <h1 className={classes.heading}>The sip of Joy</h1>
      <p className={classes.paragraph}>Eco-friendly water bottles just for you.</p>
      <a className={classes.cta} href="#products">
        Shop now
      </a>
    </section>
  );
}
