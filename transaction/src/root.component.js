import { fetchTransactions } from "@bytebank/util";

export default function Root(props) {

  function buttonClick(){
    fetchTransactions();
  }

  return (
    <section>
      {props.name} is mounted!
      <button onClick={buttonClick}>Testando Clique</button>
    </section>
  );
}
