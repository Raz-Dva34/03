export function PageYellow() {
  const style = {
    backgroundColor: '#fff8dc',
    color: '#b8860b',
    padding: '20px',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    mHeight: 'auto',
  };

  return (
    <div style={style}>
      <h2>Жёлтый цвет</h2>
      <p>Жёлтый свет — это сигнал «Приготовься»!</p>
      <p>Он говорит, что скоро загорится зелёный или красный.</p>
      <p>Нужно быть внимательным и не спешить переходить дорогу.</p>
    </div>
  );
}
