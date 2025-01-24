import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    const handleClick = () => {
      console.log("OnNavClick foi disparado em algum momento");
    };

    document.addEventListener('onNavClick',handleClick);

    return () => {
      document.removeEventListener('onNavClick',handleClick);
    };
  }, []);

  return <section>Olá mundo !</section>;
}
