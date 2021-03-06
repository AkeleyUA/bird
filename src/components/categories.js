import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {categoriesArray} from '../hardCodeData/categories';

const useStyles = makeStyles({
  container: {
    flex: 'none',
  },
  categoryBtn: {
    minWidth: 192,
    height: 36,
    background: 'transparent',
    borderRadius: 60,
    border: '2px solid transparent',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: 20,
  },
  categoryBtnActive: {
    minWidth: 192,
    height: 36,
    background: 'transparent',
    borderRadius: 60,
    border: '2px solid #222222',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: 20,
  },
  btnText: {
    display: 'block',
    marginLeft: 57,
    marginRight: 25,
    textAlign: 'left',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
  },
  icon: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 1300,
  },
  round: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: 22,
    top: 6,
    zIndex: 1300,
    borderRadius: '50%',
  },
});

const Categories = ({categories = categoriesArray}) => {
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState('All');

  const clickHandler = ({currentTarget: {id}}) => {
    setIsSelected(id);
  };
  return (
    <div className={classes.container}>
      {categories.map(({name, img, color, Icon}) => (
        <button
          key={name}
          id={name}
          onClick={clickHandler}
          className={
            isSelected === name
              ? classes.categoryBtnActive
              : classes.categoryBtn
          }>
          <p className={classes.btnText}>{name}</p>
          {img && <img src={img} alt={name} className={classes.icon} />}
          {color && (
            <div className={classes.round} style={{background: color}} />
          )}
          {Icon && <div className={classes.svg}>{<Icon />}</div>}
        </button>
      ))}
    </div>
  );
};

export default Categories;
