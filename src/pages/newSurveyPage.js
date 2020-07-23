import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/styles';
import Stepper from '../components/stepper';
import {Grid, MenuItem, Select, InputBase} from '@material-ui/core';
import Categories from '../components/categories';
import {productsArray} from '../hadrCodeData/products';
import ProductCard from '../components/productCard';

const CustomInput = withStyles(() => ({
  root: {},
  input: {
    borderRadius: 4,
    position: 'relative',
    fontFamily: 'PT Sans',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    color: '#8C9DD0',
  },
}))(InputBase);

const useStyles = makeStyles({
  mb: {
    marginBottom: 100,
  },
  root: {
    width: '100%',
    maxWidth: 405,
    border: '2px solid #8C9DD0',
    outline: 'none',
    boxSizing: 'border-box',
    borderRadius: 8,
    '&:focuse': {
      outline: 'none',
    },
    '&:hover': {
      outline: 'none',
    },
  },
  select: {
    padding: 14,
  },
});

const NewSurveyPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item lg={12} className={classes.mb}>
        <Stepper currentStep={currentStep} />
      </Grid>
      {currentStep === 1 && (
        <>
          <Grid item sm={5}>
            <div className={classes.countryContainer}>
              <h6 className={classes.title}>Country</h6>
              <Select
                defaultValue="USA"
                input={<CustomInput />}
                className={classes.root}>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item sm={5}></Grid>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Grid item lg={3} md={4} xs={12}>
            <Categories />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Grid container spacing={3}>
              {productsArray.map(
                ({title, description, text, lineColors}, index) => (
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    key={title + index}
                    className={classes.productWrapper}>
                    <ProductCard
                      title={title}
                      description={description}
                      btn
                      colors={lineColors}>
                      {text}
                    </ProductCard>
                  </Grid>
                ),
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default NewSurveyPage;
