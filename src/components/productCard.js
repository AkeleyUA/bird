import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  productCard: {
    padding: 18,
    backgroundColor: '#F7F7F7',
    width: '90%',
    maxWidth: 310,
    minHeight: 248,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  handlerWrapper: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12.5,
  },
  cardTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 26,
    marginTop: 20,
    color: '#3E245C',
    minHeight: 52,
  },
  description: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    letterSpacing: '0.02em',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 11,
  },
  text: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#222222',
  },
});

const ProductCard = ({title, children, description, line}) => {
  const classes = useStyles();
  const [isLike, setIsLike] = useState(false);
  const likeHandler = () => {
    setIsLike((prevState) => !prevState);
  };
  return (
    <div className={classes.productCard}>
      <header className={classes.header}>
        <div
          className={classes.colorLine}
          style={{
            background: line,
            width: '100%',
            height: 8,
          }}
        />
        <div className={classes.handlerWrapper} onClick={likeHandler}>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="16" fill="#E5E5E5" />
            <g clipPath="url(#clip0)">
              <rect
                width="1440"
                height="4754"
                transform="translate(-302 -3653)"
                fill="white"
              />
              <rect
                width="310"
                height="248"
                transform="translate(-275 -14)"
                fill="#F7F7F7"
              />
              <path
                d="M17.5645 3.26312C17.2852 2.62456 16.8825 2.04591 16.379 1.55956C15.875 1.07175 15.2808 0.684095 14.6288 0.417675C13.9526 0.140318 13.2274 -0.00164963 12.4952 1.44615e-05C11.468 1.44615e-05 10.4658 0.277769 9.59485 0.802417C9.38649 0.927921 9.18855 1.06577 9.00103 1.21596C8.81351 1.06577 8.61557 0.927921 8.40721 0.802417C7.53628 0.277769 6.53408 1.44615e-05 5.50688 1.44615e-05C4.76721 1.44615e-05 4.05046 0.139921 3.3733 0.417675C2.71906 0.685143 2.12941 1.06988 1.6231 1.55956C1.11887 2.04536 0.716078 2.62415 0.43755 3.26312C0.147934 3.92767 0 4.63337 0 5.35965C0 6.04478 0.141683 6.75871 0.422965 7.48499C0.658409 8.09194 0.995947 8.72151 1.42725 9.35726C2.11066 10.3634 3.05035 11.4126 4.21715 12.4763C6.1507 14.2396 8.06551 15.4576 8.14677 15.507L8.64057 15.8197C8.85935 15.9575 9.14063 15.9575 9.35941 15.8197L9.85321 15.507C9.93447 15.4555 11.8472 14.2396 13.7828 12.4763C14.9496 11.4126 15.8893 10.3634 16.5727 9.35726C17.004 8.72151 17.3437 8.09194 17.577 7.48499C17.8583 6.75871 18 6.04478 18 5.35965C18.0021 4.63337 17.8541 3.92767 17.5645 3.26312ZM9.00103 14.1923C9.00103 14.1923 1.58351 9.49923 1.58351 5.35965C1.58351 3.26312 3.33997 1.56367 5.50688 1.56367C7.02997 1.56367 8.35096 2.40311 9.00103 3.62934C9.65111 2.40311 10.9721 1.56367 12.4952 1.56367C14.6621 1.56367 16.4185 3.26312 16.4185 5.35965C16.4185 9.49923 9.00103 14.1923 9.00103 14.1923Z"
                fill="#3E245C"
              />
              <path
                d="M9.00101 14.1923C9.00101 14.1923 1.5835 9.49928 1.5835 5.3597C1.5835 3.26317 3.33995 1.56372 5.50686 1.56372C7.02995 1.56372 8.35094 2.40316 9.00101 3.62939C9.65109 2.40316 10.9721 1.56372 12.4952 1.56372C14.6621 1.56372 16.4185 3.26317 16.4185 5.3597C16.4185 9.49928 9.00101 14.1923 9.00101 14.1923Z"
                fill={isLike ? '#3E245C' : '#F7F7F7'}
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="1440"
                  height="4754"
                  fill="white"
                  transform="translate(-302 -3653)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </header>
      <main>
        <h6 className={classes.cardTitle}>{title}</h6>
        <p className={classes.description}>{description}</p>
        <p className={classes.text}>{children}</p>
      </main>
    </div>
  );
};

export default ProductCard;
