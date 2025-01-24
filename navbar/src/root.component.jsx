export default function Root(props) {
  function onClick() {
    const event = new CustomEvent('onNavClick');
    //neste caso podemos utilizar tanto o document quanto o window para fazer broadcast do evento;
    document.dispatchEvent(event);
  }

  return (
    <section>
      {props.name}
      <button onClick={onClick} >Broadcast o evento do navbar</button>
    </section>
  );
}
