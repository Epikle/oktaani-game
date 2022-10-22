type Props = {
  onEnd: () => void;
};
const End: React.FC<Props> = ({ onEnd }) => {
  const styles: React.CSSProperties = {
    backgroundColor: 'gold',
    width: 30,
    height: 30,
    fontSize: '0.55rem',
    fontWeight: 'bold',
    display: 'grid',
    placeItems: 'center',
    userSelect: 'none',
    color: 'black',
  };

  return (
    <div style={styles} onMouseOver={onEnd}>
      END
    </div>
  );
};

export default End;
