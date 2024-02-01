import styles from "./description.module.scss";
import Button from "antd/es/button";
import { SolutionOutlined } from "@ant-design/icons";

interface IDescriptionProps {
  setMode: (value: "info" | "feedback") => void;
}

export const Description = ({ setMode }: IDescriptionProps) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.block}>
          <span className={styles.subtitle}>Palimpsest</span>
          <span className={styles.description}>
            City is a complex cultural phenomenon and a museum by itself. The
            concept of palimpsest in Urbanism refers to cities as being written
            more than once.<sup>1</sup> Originally, palimpsest is a “paper,
            parchment, or other writing material designed to be reusable after
            any writing on it has been erased.”<sup>2</sup> The term also can be
            used to describe an object that “having usually diverse layers or
            aspects apparent beneath the surface”<sup>3</sup>. So, a
            contemporary city can be considered as a palimpsest: urban
            morphology consists of different layers from different periods of
            time that intertwine and coexist together. This phenomenon is not
            always explicit to people's minds. Our map will reveal the hidden
            story of the city - the living past of Munich.
          </span>
        </div>
        <div className={styles.block}>
          <span className={styles.subtitle}>Project</span>
          <span className={styles.description}>
            The web map is the final result of the "Mapping Project" course at
            the Technical University of Munich during the winter semester of
            2023/24. Due to our passion for web mapping, cartography, urbanism,
            and architecture, we intend to continue working on the project
            beyond the course. You can give us your feedback or help us
            collecting more data by filling out the form. We would really
            appreciate it.
          </span>
          <Button
            className={styles.button}
            type="link"
            onClick={() => setMode("feedback")}
          >
            <SolutionOutlined />
            Feedback Form
          </Button>
        </div>
        <div className={styles.block}>
          <span className={styles.subtitle}>References</span>
          <span className={styles.description}>
            <ol className={styles.list}>
              <li>
                Harvard. The Urban Imagination course.
                <a
                  href="https://hum54-15.omeka.fas.harvard.edu/exhibits/show/the-urban-city-as-a-palimpsest/the-palimpsest-in-urbanism"
                  target="_blank"
                >
                  Website
                </a>
              </li>
              <li>
                Dictionary, Oxford English. "Oxford english dictionary."
                Simpson, Ja & Weiner, Esc 3 (1989).
              </li>
              <li>
                Dictionary, Merriam-Webster. "Merriam-webster." Online at
                http://www.mw.com/home.htm8.2 (2002).
              </li>
            </ol>
          </span>
        </div>
        <div className={styles.block}>
          <span className={styles.subtitle}>Data Sources</span>
          <span className={styles.description}>
            <ol className={styles.list}>
              <li>
                <a href="https://www.muenchen.de/" target="_blank">
                  Muenchen.de
                </a>
              </li>
              <li>
                <a href="https://www.atlasobscura.com" target="_blank">
                  Atlas Obscura
                </a>
              </li>
              <li>
                <a href="https://www.muenchner-stadtmuseum.de/" target="_blank">
                  The Collection of the Munich City Museum
                </a>
              </li>
              <li>
                <a
                  href="https://www.archdaily.com/993086/munich-architecture-city-guide-from-skyscrapers-to-small-pavilions-brutalism-to-art-nouveau"
                  target="_blank"
                >
                  Munich Architecture City Guide: From Skyscrapers to Small
                  Pavilions, Brutalism to Art Nouveau, Arch Daily
                </a>
              </li>
              <li>
                <a
                  href="https://wikimapia.org/#lang=en&lat=48.140000&lon=11.580000&z=11&m=w&search=munich"
                  target="_blank"
                >
                  Wikimapia
                </a>
              </li>
              <li>
                <a
                  href="https://storymaps.arcgis.com/stories/43f129d10a01478f85b5b358c691b8b1"
                  target="_blank"
                >
                  A Tale of the City (Milana Glebova, Olesya Ignatyeva)
                </a>
              </li>
            </ol>
          </span>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.copyright}>
          Bella Mironova, Joselyn Salinas<br></br>&copy; TUM, Cartography M.Sc,
          2024
        </span>
      </div>
    </>
  );
};
