import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Stepper from '../components/stepper';
import {
  Grid,
  MenuItem,
  Select,
  InputBase,
  Slider,
  FormControlLabel,
  List,
  ListItem,
  Icon,
  Hidden,
} from '@material-ui/core';
import Categories from '../components/categories';
import {productsArray} from '../hadrCodeData/products';
import ProductCard from '../components/productCard';
import thumb from '../images/thumb.svg';
import {CustomCheckbox, Label, BoldLabel} from '../components/customCheckbox';
import manIcon from '../images/icon-man-purple.svg';
import womanIcon from '../images/icon-woman-purple.svg';
import TotalCard from '../components/totalCard';
import arrowRight from '../images/arrow-right.svg';
import {Link} from 'react-router-dom';

const marks = [
  {
    value: 16,
    label: '16',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 35,
    label: '35',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 45,
    label: '45',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 55,
    label: '55',
  },
  {
    value: 60,
    label: '60+',
  },
];

const CustomInput = withStyles(() => ({
  root: {
    background: '#FFF',
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    fontFamily: 'PT Sans',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    color: '#8C9DD0',
  },
}))(InputBase);

const CustomInput2 = withStyles(() => ({
  root: {
    background: '#FFF',
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    fontFamily: 'PT Sans',
    fontSize: 16,
    padding: '10px 12px 10px 12px',
    color: '#8C9DD0',
  },
}))(InputBase);

const CustomInput3 = withStyles(() => ({
  root: {
    background: '#FFF',
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    fontFamily: 'PT Sans',
    fontSize: 16,
    padding: '10px 12px 10px 12px',
    color: '#3E245C',
    fontWeight: 'bold',
  },
}))(InputBase);

const CustomSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
    marginTop: 10,
  },
  thumb: {
    height: 31,
    width: 24,
    backgroundColor: 'transparent',
    backgroundImage: `url(${thumb})`,
    backgroundPosition: '50% 50%',
    marginTop: -14,
    marginLeft: -14,
    transform: 'scale(0.8)',
    transilion: 'transform, 0.3s',
    '&:hover': {
      boxShadow: 'none',
      transform: 'scale(1)',
      transilion: 'transform, 0.3s',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 8px)',
    top: -15,
    '& *': {
      background: 'transparent',
      fontFamily: 'PT Sans',
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: 'center',
      letterSpacing: '0.02em',
      color: '#3E245C',
    },
  },
  track: {
    height: 6,
    backgroundColor: '#3E245C',
  },
  rail: {
    height: 6,
    backgroundColor: '#FFDC00',
    opacity: 1,
  },
  mark: {
    width: 0,
  },
  markLabel: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#000000',
    top: 35,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const useStyles = makeStyles({
  mb: {
    marginBottom: 100,
  },
  w80: {
    width: '80%',
  },
  rootSelect: {
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
  rootInput: {
    maxWidth: 63,
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
  title: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
    marginBottom: 17,
  },
  countryContainer: {
    marginBottom: 56,
  },
  ageContainer: {
    marginBottom: 56,
  },
  rangeSlider: {
    maxWidth: 389,
  },
  icon: {
    color: '#FFDC00',
  },
  genderContainer: {},
  checkedListItem: {
    background: '#F7F7F7',
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    background: '#FFF',
    display: 'flex',
    flexDirection: 'column',
  },
  subContentContainerCheckedList: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  subContentContainerCounter: {
    display: 'flex',
    alignItems: 'center',
  },
  counterBtn: {
    width: 21,
    height: 21,
    borderRadius: '50%',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.02em',
    color: '#000000',
    border: '1px solid #8C9DD0',
    margin: '0 7px',
    cursor: 'pointer',
    '&:disabled': {
      opacity: 0.4,
    },
  },
  nextStep: {
    marginTop: 122,
    marginBottom: 147,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yellowDividder: {
    width: '100%',
    height: 3,
    background: '#FFDC00',
  },
  nextStepBtn: {
    width: 264,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3E245C',
    borderRadius: 8,
    fontFamily: 'Duster Regular',
    fontSize: 26,
    color: '#FFDC00',
  },
  saveBtn: {
    width: '100%',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'Duster Bold',
    fontSize: 26,
    color: '#3E245C',
  },
  survayNameContainer: {
    marginTop: 77,
    marginBottom: 40,
  },
  totalLinks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 141,
    background: '#F7F7F7',
    marginLeft: -40,
  },
  totalLink: {
    display: 'flex',
    marginLeft: 21,
    textDecorationLine: 'none',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
    paddingRight: 10,
  },
  totalLinkText: {
    marginLeft: 10,
    marginRight: 15,
  },
  stepTitle3: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#8C9DD0',
  },
});

const NewSurveyPage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [age, setAge] = useState([18, 50]);
  const [gender, setGender] = useState({female: true, male: true});
  const [childrenCouner, setChildrenCouner] = useState(2);
  const [maritalStatus, setMaritalStatus] = useState([
    {subName: 'Married', subChecked: false},
    {subName: 'Single', subChecked: false},
    {subName: 'Divorced', subChecked: false},
  ]);
  const [demographic, setDemographic] = useState([
    {
      name: 'No additional criteria',
      checked: false,
    },
    {
      name: 'Marital status',
      checked: true,
      actions: {type: 'checkboxList', subContent: maritalStatus},
    },
    {
      name: 'Number of children',
      checked: true,
      actions: {type: 'counter', subContent: childrenCouner},
    },
    {
      name: 'Education​',
      checked: false,
    },
    {
      name: 'Employment',
      checked: false,
    },
    {
      name: 'Career',
      checked: false,
    },
    {
      name: 'Ethnicity',
      checked: false,
    },
    {
      name: 'Household income',
      checked: false,
    },
  ]);
  const classes = useStyles();

  const ageChangeHandler = (event, newAge) => {
    setAge(newAge);
  };
  const changeGenderHandler = ({target: {id}}, value) => {
    setGender((prevState) => ({...prevState, [id]: value}));
  };

  const changeDemographicHandler = ({target: {id}}, value) => {
    setDemographic((prevState) => {
      const newArray = [...prevState];
      newArray[id].checked = value;
      return newArray;
    });
  };

  const changeMaritalStatusHandler = ({target: {id}}, value) => {
    console.log(maritalStatus);
    setMaritalStatus((prevState) => {
      const newArray = [...prevState];
      newArray[id].subChecked = value;
      return newArray;
    });
  };

  const changeChildrenCounter = ({target}) => {
    setChildrenCouner(target.value < 99 ? +target.value : 99);
  };

  const addChildren = () => {
    setChildrenCouner((prevState) =>
      prevState < 99 ? prevState + 1 : prevState,
    );
  };

  const delChildren = () => {
    setChildrenCouner((prevState) =>
      prevState > 0 ? prevState - 1 : prevState,
    );
  };

  return (
    <Grid container justify="center">
      <Grid item lg={12} className={classes.mb}>
        <Stepper
          currentStep={currentStep}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Grid>
      {currentStep === 1 && (
        <>
          <Grid item sm={5}>
            <div className={classes.countryContainer}>
              <h6 className={classes.title}>Country</h6>
              <Select
                defaultValue="USA"
                input={<CustomInput />}
                className={classes.rootSelect}>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
              </Select>
            </div>
            <div className={classes.ageContainer}>
              <h6 className={classes.title}>Age</h6>
              <CustomSlider
                min={16}
                max={60}
                value={age}
                onChange={ageChangeHandler}
                valueLabelDisplay="on"
                className={classes.rangeSlider}
                marks={marks}
              />
            </div>
            <div className={classes.genderContainer}>
              <h6 className={classes.title}>Gender</h6>
              <FormControlLabel
                value="end"
                control={
                  <CustomCheckbox
                    checked={gender.female}
                    id="female"
                    onChange={changeGenderHandler}
                  />
                }
                label={<Label icon={womanIcon} text="Female" />}
                labelPlacement="end"
              />
              <div style={{display: 'inline-block', marginLeft: 40}} />
              <FormControlLabel
                value="end"
                control={
                  <CustomCheckbox
                    checked={gender.male}
                    id="male"
                    onChange={changeGenderHandler}
                  />
                }
                label={<Label icon={manIcon} text="Male" />}
                labelPlacement="end"
              />
            </div>
          </Grid>
          <Grid item sm={5}>
            <h6 className={classes.title}>Demographic Criteria​</h6>
            <List>
              {demographic.map(({name, checked, actions}, index) => (
                <ListItem
                  key={name}
                  className={
                    checked ? classes.checkedListItem : classes.listItem
                  }>
                  <FormControlLabel
                    style={{width: '100%'}}
                    value="end"
                    control={
                      <CustomCheckbox
                        checked={checked}
                        id={`${index}`}
                        onChange={changeDemographicHandler}
                      />
                    }
                    label={
                      checked ? (
                        <BoldLabel text={name} />
                      ) : (
                        <Label text={name} />
                      )
                    }
                    labelPlacement="end"
                  />
                  {checked && actions && actions.type === 'checkboxList' && (
                    <div
                      className={clsx(
                        classes.subContentContainerCheckedList,
                        classes.w80,
                      )}>
                      {actions.subContent.map(
                        ({subName, subChecked}, index) => (
                          <FormControlLabel
                            key={subName}
                            value="end"
                            control={
                              <CustomCheckbox
                                variant="small"
                                checked={subChecked}
                                id={`${index}`}
                                onChange={changeMaritalStatusHandler}
                              />
                            }
                            label={<Label text={subName} />}
                            labelPlacement="end"
                          />
                        ),
                      )}
                    </div>
                  )}
                  {checked && actions && actions.type === 'counter' && (
                    <div
                      className={clsx(
                        classes.subContentContainerCounter,
                        classes.w80,
                      )}>
                      <button
                        className={classes.counterBtn}
                        disabled={childrenCouner <= 0}
                        onClick={delChildren}>
                        -1
                      </button>
                      <CustomInput2
                        className={classes.rootInput}
                        value={childrenCouner}
                        onChange={changeChildrenCounter}
                      />
                      <button
                        className={classes.counterBtn}
                        disabled={childrenCouner >= 99}
                        onClick={addChildren}>
                        +1
                      </button>
                    </div>
                  )}
                </ListItem>
              ))}
            </List>
          </Grid>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Grid item xl={1} />
          <Grid item lg={3} md={3} xs={11}>
            <Categories />
          </Grid>
          <Grid item lg={8} md={8} xs={11}>
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
          <Grid item lg={10} xs={11} className={classes.survayNameContainer}>
            <h6 className={classes.title}>Survey name</h6>
            <CustomInput3
              className={classes.rootSelect}
              value="Habits & Practices Exploratory"
              disabled
            />
          </Grid>
          <Grid item lg={12} xs={11}>
            <Grid container justify="center">
              <Grid item lg={1}></Grid>
              <Grid item md={2} sm={6} xs={12}>
                <TotalCard
                  title="Template in use:"
                  description="Habits & Practices Exploratory"
                />
              </Grid>
              <Grid item md={2} sm={6} xs={12}>
                <TotalCard title="Completes:" description="600+" />
              </Grid>
              <Grid item md={2} sm={6} xs={12}>
                <TotalCard title="Time to complete:" description="24 hours" />
              </Grid>
              <Grid item md={2} sm={6} xs={12}>
                <TotalCard title="Total cost:" description="$600" />
              </Grid>
              <Hidden lgUp smDown>
                <Grid item xs={1} />
              </Hidden>
              <Grid item md={3} xs={11}>
                <div className={classes.totalLinks}>
                  <Link to="/" className={classes.totalLink}>
                    <Icon>format_list_numbered</Icon>
                    <p className={classes.totalLinkText}>
                      Master Questionnaire Preread​
                    </p>
                    <img src={arrowRight} alt="arrow-right" />
                  </Link>
                  <Link to="/" className={classes.totalLink}>
                    <Icon>visibility</Icon>
                    <p className={classes.totalLinkText}>
                      Report Template Preread
                    </p>
                    <img src={arrowRight} alt="arrow-right" />
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
      {currentStep === 3 && (
        <>
          <Grid item xs={10}>
            <h6 className={classes.stepTitle3}>
              Let’s Customize the Master Questionnaire to Your Survey
              Objectives:​
            </h6>
          </Grid>
          <Grid item xs={11}>
            <Grid container>
              <Grid item lg={5} style={{height: 40, background: 'red'}}>
                <div className={classes.verticalGreyDivider} />
                <div>
                  <h6>Description for template:</h6>
                  <p>Habits & Practices Exploratory</p>
                </div>
              </Grid>
              <Grid
                item
                lg={7}
                style={{height: 40, background: 'green'}}></Grid>
            </Grid>
          </Grid>
        </>
      )}
      <Grid item xs={10}>
        <Grid container className={classes.nextStep}>
          {currentStep === 2 && (
            <Hidden only="xs">
              <Grid item lg={3} md={4} sm={5} xs={8}>
                <button className={classes.saveBtn}>
                  Survey saved to drafts
                </button>
              </Grid>
              <Grid item lg={6} md={5} sm={3} xs={4}>
                <div className={classes.yellowDividder} />
              </Grid>
            </Hidden>
          )}
          {currentStep === 1 && (
            <Grid item lg={9} md={8}>
              <div className={classes.yellowDividder} />
            </Grid>
          )}
          <Grid
            item
            lg={3}
            md={3}
            sm={4}
            xs={12}
            style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button
              className={classes.nextStepBtn}
              onClick={() =>
                setCurrentStep((prevState) =>
                  prevState < 4 ? prevState + 1 : 1,
                )
              }>
              Next Step
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewSurveyPage;
