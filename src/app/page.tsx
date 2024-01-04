import styles from "./page.module.css";
import { SectionBannerMain } from "../components/SectionBannerMain/SectionBannerMain";
import { SectionDescription } from "../components/SectionDescription";
import { SectionProjects } from "../components/SectionProjects";
import { SectionSkills } from "../components/SectionSkills";
import { SectionContact } from "../components/SectionContact";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionBannerMain />
      <SectionDescription />
      <SectionProjects />
      <SectionSkills />
      <SectionContact />
    </main>
  );
}
