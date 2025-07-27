export function HomePage() {
  const style = {
    padding: '20px',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    textAlign: 'center' as const,
    backgroundColor: '#f0f8ff',
  };

  return (
    <div style={style}>
      <h1>Привет! Это Светофор</h1>
      <img 
        src="/traffic.png" 
        alt="Светофор"
        style={{ width: '150px', margin: '20px' }} 
      />
      <p>
        Светофор — это очень важный помощник на дорогах! 
        Он показывает свет красного, жёлтого и зелёного цвета и помогает пешеходам и водителям быть внимательными и безопасными.
      </p>
      <p>
        Красный — «Стой», жёлтый — «Приготовься», зелёный — «Идти!»
      </p>
      <p>Давай учиться вместе, что означает каждый цвет!</p>
    </div>
  );
}