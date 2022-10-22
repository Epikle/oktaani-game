type Props = {
  onOver: () => void;
};

const Wall: React.FC<Props> = ({ onOver }) => {
  return (
    <div
      style={{ backgroundColor: 'black', width: 30, height: 30 }}
      onMouseOver={onOver}
    ></div>
  );
};

export default Wall;
