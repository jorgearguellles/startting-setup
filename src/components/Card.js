import './Card.css';

const Card = (props) => {
  const {children, className} = props;
  const classes = 'card ' + className;

  return(
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;