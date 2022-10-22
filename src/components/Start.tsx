type Props = {
  onLeave: () => void;
};

const Start: React.FC<Props> = ({ onLeave }) => {
  const styles: React.CSSProperties = {
    backgroundColor: 'darkgray',
    width: 30,
    height: 30,
    fontSize: '0.55rem',
    fontWeight: 'bold',
    display: 'grid',
    placeItems: 'center',
    userSelect: 'none',
    color: 'purple',
  };

  return (
    <div style={styles} onMouseLeave={onLeave}>
      START
    </div>
  );
};

export default Start;
