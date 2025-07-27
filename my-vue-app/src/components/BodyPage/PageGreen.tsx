export function PageGreen() {
  const style = {
    backgroundColor: '#ddffdd',
    color: '#006600',
    padding: '20px',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    mHeight: 'auto',
  };

  return (
    <div style={style}>
      <h2>Зелёный цвет</h2>
      <p>Зелёный свет — это сигнал «Идти!»</p>
      <p>Когда горит зелёный, можно безопасно переходить дорогу.</p>
      <p>Но всё равно смотри по сторонам — безопасный пешеход всегда внимателен!</p>
    </div>
  );
}
