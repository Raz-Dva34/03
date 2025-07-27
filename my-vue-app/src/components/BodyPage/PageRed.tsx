export function PageRed() {
  const style = {
    backgroundColor: '#ffdddd',
    color: '#900000',
    padding: '20px',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    mHeight: 'auto',
  };

  return (
    <div style={style}>
      <h2>Красный цвет</h2>
      <p>Красный свет — это сигнал «СТОЙ»!</p>
      <p>Когда горит красный, нельзя переходить дорогу.</p>
      <p>Он говорит: «Подожди, скоро будет можно идти!»</p>
    </div>
  );
}