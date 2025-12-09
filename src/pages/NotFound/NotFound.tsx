import { useTranslation } from "react-i18next";
import { NotFoundCard } from "./components/NotFoundCard";
import { getNotFoundData } from "./data";

export default function NotFound() {
  const { t, i18n } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-16" key={i18n.language}>
      <NotFoundCard data={getNotFoundData(t)} />
    </section>
  );
}

