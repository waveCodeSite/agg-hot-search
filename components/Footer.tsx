import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="py-4 flex justify-center font-primary items-center">
      Copyright aituring.club | Powered{" "}
      <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> by{" "}
      <a
        href="https://github.com/waveCodeSite"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
        Wave
      </a>
      |
      <a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary px-2"
      >
        赣ICP备20003562号-1
      </a>
      |
      <span id="busuanzi_container_site_pv" className="text-palette-primary px-2">
        本站总访问量:<span id="busuanzi_value_site_pv"></span>
      </span>
    </footer>
  );
}
