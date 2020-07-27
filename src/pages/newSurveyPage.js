import React, {useState, Fragment, useEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Stepper from '../components/stepper';
import {
  Grid,
  MenuItem,
  Select,
  Slider,
  FormControlLabel,
  List,
  ListItem,
  Icon,
  Hidden,
  Chip,
} from '@material-ui/core';
import Categories from '../components/categories';
import {productsArray} from '../hardCodeData/products';
import ProductCard from '../components/productCard';
import thumb from '../images/thumb.svg';
import {
  CustomCheckbox,
  Label,
  BoldLabel,
  CustomInput,
  CustomInput2,
  CustomInput3,
} from '../components/customsElements';
import manIcon from '../images/icon-man-purple.svg';
import womanIcon from '../images/icon-woman-purple.svg';
import TotalCard from '../components/totalCard';
import arrowRight from '../images/arrow-right.svg';
import brokenLineBlue from '../images/broken-line-step-3-blue.svg';
import brokenLineYellow from '../images/broken-line-step-3-yellow.svg';
import {Link} from 'react-router-dom';
import example1 from '../images/step-3-example-1.png';
import example2 from '../images/step-3-example-2.png';
import example3 from '../images/step-3-example-3.png';
import radioSVG from '../images/radio.svg';
import textSVG from '../images/text.svg';
import starSVG from '../images/star.svg';
import dotsSVG from '../images/dots.svg';
import arrowsSVG from '../images/arrows.svg';
import smilesSVG from '../images/smiles.svg';
import Chioce from '../components/choice';
import TextCategory from '../components/textCategory';
import Rating from '../components/rating';
import Likert from '../components/likert';
import Ranking from '../components/ranking';
import PromoterScore from '../components/promoterScore';
import EyeIcon from '@material-ui/icons/Visibility';

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

const questionTypes = [
  {label: 'Choice', icon: radioSVG},
  {label: 'Text', icon: textSVG},
  {label: 'Rating', icon: starSVG},
  {label: 'Likert', icon: dotsSVG},
  {label: 'Ranking', icon: arrowsSVG},
  {label: 'Net promoter score', icon: smilesSVG},
];

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
  rootTextAria: {
    width: '100%',
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
  stepTitle4: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#8C9DD0',
    marginBottom: 73,
  },
  verticalGreyDividerFirst: {
    width: 8,
    background: '#8C9DD0',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -8,
  },
  verticalGreyDivider: {
    width: 8,
    background: '#8C9DD0',
    position: 'absolute',
    top: -20,
    bottom: 0,
    left: -8,
  },
  verticalYellowDivider: {
    width: 8,
    background: '#FFDC00',
    position: 'absolute',
    top: -20,
    bottom: 0,
    left: -8,
  },
  borderBlockTextBlock: {
    marginBottom: 10,
  },
  addQuestionBlock: {
    marginBottom: 46,
    display: 'flex',
    alignItems: 'center',
  },
  brokenLineImg: {
    position: 'absolute',
    bottom: -20,
    left: -2,
  },
  brokenLineImgTop: {
    position: 'absolute',
    top: -20,
    left: -2,
  },
  borderBlockTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
  },
  borderBlockSubTitle: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3E245C',
    letterSpacing: '0.02em',
  },
  borderBlockDescription: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    color: '#222',
    letterSpacing: '0.02em',
  },
  borderBlockPlaceholder: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8C9DD0',
  },
  firstBorderBlock: {
    marginTop: 57,
  },
  borderBlockLast: {
    marginTop: 38,
    marginBottom: 118,
  },
  borderBlock: {
    marginTop: 38,
  },
  borderBlocInput: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 10,
  },
  borderBlockLink: {
    display: 'flex',
    width: '100%',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
    textDecorationLine: 'none',
  },
  borderBlockLinkIcon: {
    color: '#8C9DD0',
    marginRight: 5,
  },
  addImage: {
    width: 92,
    height: 92,
    background: '#FFFFFF',
    border: '2px solid #8C9DD0',
    borderRadius: '50%',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#8C9DD0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  examplesContainer: {
    marginTop: 56,
  },
  relative: {
    position: 'relative',
  },
  imgWrapper: {
    position: 'relative',
    width: 'max-content',
  },
  closeIconYellow: {
    position: 'absolute',
    top: 8,
    right: 11,
    width: 26,
    height: 26,
    background: '#FFDC00',
    borderRadius: '50%',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addQuestionIcon: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3E245C',
    color: '#FFDC00',
    marginLeft: 15,
    cursor: 'pointer',
  },
  addQuestionIconYellow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFDC00',
    color: '#3E245C',
    marginLeft: 15,
    cursor: 'pointer',
  },
  questionsIcons: {
    display: 'flex',
  },
  questionTitile: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
    marginBottom: 10,
  },
  chip: {
    background: '#FFF',
    border: '1px solid #E3E7F4',
    borderRadius: 48,
    height: 35,
    marginRight: 10,
    '&:hover': {
      background: '#FFF',
    },
    '&:focus': {
      background: '#FFF',
    },
  },
  chipActive: {
    background: '#FFF',
    border: '4px solid #FFDC00;',
    borderRadius: 48,
    marginLeft: -3,
    marginRight: 7,
    height: 35,
    '&:hover': {
      background: '#FFF',
    },
    '&:focus': {
      background: '#FFF',
    },
  },
  chipLabel: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
    paddingLeft: 14,
    paddingRight: 14,
  },
  chipIcon: {
    marginLeft: 12,
    marginRight: -8,
  },
  questionOptionsWrapper: {
    marginBottom: 101,
  },
  previewLink: {
    display: 'flex',
    width: 'max-content',
    textDecorationLine: 'none',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 23,
  },
  previewLinkText: {
    marginRight: 15,
  },
  finalCheckSubTitile: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
  },
  finalCheckBlock: {
    marginTop: 46,
    display: 'flex',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
  smallYellowDivider: {
    width: '100%',
    height: 2,
    background: '#FFDC00',
    alignSelf: 'flex-end',
    marginBottom: 3,
  },
  previewButton: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 135,
    width: '100%',
    height: 36,
    background: '#3E245C',
    borderRadius: 8,
    fontFamily: 'PT Sans',
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#FFDC00',
  },
  previewButtonIcon: {
    marginLeft: '15%',
    marginRight: '7%',
  },
  finalCheckDescription: {
    marginTop: 15,
    paddingLeft: 12,
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
    borderLeft: '1px solid #8C9DD0',
  },
  noWrap: {
    marginRight: 11,
    whiteSpace: 'nowrap',
  },
  bigInteger: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    textAlign: 'center',
    color: '#3E245C',
    marginBottom: -5,
  },
  totalWithOutLinksContainer: {
    background: '#F7F7F7',
    marginTop: 65,
    marginBottom: 50,
    paddingTop: 33,
    minHeight: 192,
  },
  activate: {
    maxWidth: 328,
    width: '100%',
    height: 56,
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'Duster Bold',
    fontSize: 26,
    color: '#3E245C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'none',
  },
  totalContainer: {
    marginTop: 60,
  },
});

const Total = () => {
  const classes = useStyles();
  return (
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
            <p className={classes.totalLinkText}>Report Template Preread</p>
            <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

const TotalWithOutLinks = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-evenly"
      className={classes.totalWithOutLinksContainer}>
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
    </Grid>
  );
};

const NewSurveyPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [images, setImages] = useState([example1, example2, example3]);
  const [questions, setQuestions] = useState([
    {
      add: false,
      type: 'Choice',
    },
    {
      add: false,
      type: 'Choice',
    },
    {
      add: false,
      type: 'Choice',
    },
  ]);
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

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

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const addImageHandler = () => {
    setImages((prevState) => [
      ...prevState,
      prevState[getRandomInt(prevState.length)],
    ]);
  };

  const deleteImgHandler = ({target: {id}}) => {
    console.log(id);
    setImages((prevState) => prevState.filter((_, index) => index !== +id));
  };

  const addQuestionHandler = ({target: {id}}) => {
    setQuestions((prevState) => {
      const newArr = [...prevState];
      newArr[id].add = true;
      return newArr;
    });
  };

  const delQuestionHandler = ({target: {id}}) => {
    setQuestions((prevState) => {
      const newArr = [...prevState];
      newArr[id].add = false;
      return newArr;
    });
  };

  const changeTypeHandler = (event) => {
    const type = event.currentTarget.getAttribute('value');
    const id = event.currentTarget.id;
    setQuestions((prevState) => {
      const newArr = [...prevState];
      newArr[id].type = type;
      return newArr;
    });
  };

  const dropStepsHandler = () => {
    setCurrentStep(1);
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
          <Grid item lg={12} xs={11} className={classes.TotalContainer}>
            <Total />
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
          <Grid item xs={11} className={classes.firstBorderBlock}>
            <Grid
              container
              className={classes.relative}
              style={{
                paddingBottom: 50,
                paddingLeft: 30,
              }}>
              <div className={classes.verticalGreyDividerFirst} />
              <img
                src={brokenLineBlue}
                alt="broken-line-blue"
                className={classes.brokenLineImg}
              />
              <Grid container>
                <Grid item lg={4} md={5} sm={5} xs={12}>
                  <div className={classes.borderBlockTextBlock}>
                    <h6 className={classes.borderBlockTitle}>
                      Description for template:
                    </h6>
                    <p className={classes.borderBlockSubTitle}>
                      Habits & Practices Exploratory
                    </p>
                  </div>
                </Grid>
                <Grid item lg={5} md={6} sm={7} xs={12}>
                  <p className={classes.borderBlockDescription}>
                    Reconstruct and monitor the user journey to strengthen
                    customer engagement & growth strategies, fuel new product
                    development with customer perspectives.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.borderBlock}>
            <Grid
              container
              style={{
                padding: '50px 0 50px 30px',
              }}
              className={classes.relative}
              alignItems="center">
              <div className={classes.verticalYellowDivider} />
              <img
                src={brokenLineYellow}
                alt="broken-line-yellow"
                className={classes.brokenLineImg}
              />
              <img
                src={brokenLineYellow}
                alt="broken-line-yellow"
                className={classes.brokenLineImgTop}
              />
              <Grid item lg={2} md={2} xs={12}>
                <div className={classes.borderBlockTextBlock}>
                  <h6 className={classes.borderBlockTitle}>Sample Size</h6>
                </div>
              </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <div className={classes.borderBlockTextBlock}>
                  <p className={classes.borderBlockPlaceholder}>
                    Min 200 samples
                  </p>
                </div>
              </Grid>
              <Grid item lg={2} md={2} sm={6} xs={12}>
                <div className={classes.borderBlocInput}>
                  <CustomInput3 className={classes.rootSelect} value={200} />
                </div>
              </Grid>
              <Grid item lg={3} md={4} xs={12}>
                <div className={classes.borderBlocInput}>
                  <Link to="/" className={classes.borderBlockLink}>
                    <Icon className={classes.borderBlockLinkIcon}>
                      calculate
                    </Icon>
                    Sample Size Calculator
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.borderBlock}>
            <Grid
              container
              style={{
                padding: '50px 0 50px 30px',
                position: 'relative',
              }}
              alignItems="center">
              <div className={classes.verticalGreyDivider} />
              <img
                src={brokenLineBlue}
                alt="broken-line-blue"
                className={classes.brokenLineImg}
              />
              <img
                src={brokenLineBlue}
                alt="broken-line-blue"
                className={classes.brokenLineImgTop}
              />
              <Grid item lg={4} xs={12}>
                <div className={classes.borderBlockTextBlock}>
                  <h6 className={classes.borderBlockTitle}>
                    Add image to visualize
                  </h6>
                </div>
              </Grid>
              <Grid item lg={2} xs={12}>
                <div className={classes.borderBlockTextBlock}>
                  <button
                    className={classes.addImage}
                    onClick={addImageHandler}>
                    <Icon>add</Icon>
                    <p>Drop image</p>
                  </button>
                </div>
              </Grid>
              <Grid item xs={11}>
                <Grid container className={classes.examplesContainer}>
                  {images.map((img, index) => (
                    <Grid key={img} item lg={3} xs={12}>
                      <div className={classes.imgWrapper}>
                        <img
                          src={img}
                          alt={`example-${index}`}
                          className={classes.exampleImg}
                        />
                        <Icon
                          className={classes.closeIconYellow}
                          id={`${index}`}
                          onClick={deleteImgHandler}>
                          close
                        </Icon>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.borderBlock}>
            <Grid
              container
              style={{
                padding: '50px 0 50px 30px',
              }}
              className={classes.relative}
              alignItems="center">
              <div className={classes.verticalYellowDivider} />
              <img
                src={brokenLineYellow}
                alt="broken-line-yellow"
                className={classes.brokenLineImg}
              />
              <img
                src={brokenLineYellow}
                alt="broken-line-yellow"
                className={classes.brokenLineImgTop}
              />
              <Grid
                item
                lg={4}
                md={2}
                xs={12}
                style={{alignSelf: 'flex-start'}}>
                <div className={classes.borderBlockTextBlock}>
                  <h6 className={classes.borderBlockTitle}>
                    Add Other Description​
                  </h6>
                </div>
              </Grid>
              <Grid item lg={5} md={3} sm={6} xs={12}>
                <CustomInput3
                  className={classes.rootTextAria}
                  placeholder="Description"
                  multiline
                  rows={5}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.borderBlockLast}>
            <Grid
              container
              style={{
                padding: '50px 0 50px 30px',
                position: 'relative',
              }}
              alignItems="center">
              <div className={classes.verticalGreyDivider} />
              <img
                src={brokenLineBlue}
                alt="broken-line-blue"
                className={classes.brokenLineImgTop}
              />
              <Grid item xs={12}>
                {questions.map(({add, type}, index) => (
                  <Fragment key={index}>
                    <div className={classes.addQuestionBlock}>
                      <h6 className={classes.borderBlockTitle}>
                        Add custom question{` ${index + 1}`}
                      </h6>
                      {add ? (
                        <div className={classes.questionsIcons}>
                          <Icon
                            className={classes.addQuestionIcon}
                            id={`${index}`}>
                            arrow_upward
                          </Icon>
                          <Icon
                            className={classes.addQuestionIcon}
                            id={`${index}`}>
                            arrow_downward
                          </Icon>
                          <Icon
                            className={classes.addQuestionIcon}
                            id={`${index}`}>
                            content_copy
                          </Icon>
                          <Icon
                            className={classes.addQuestionIconYellow}
                            id={`${index}`}
                            onClick={delQuestionHandler}>
                            close
                          </Icon>
                        </div>
                      ) : (
                        <Icon
                          className={classes.addQuestionIcon}
                          id={`${index}`}
                          onClick={addQuestionHandler}>
                          add
                        </Icon>
                      )}
                    </div>
                    {add && (
                      <Grid
                        container
                        className={classes.questionOptionsWrapper}>
                        <Grid item xs={12}>
                          <h6 className={classes.questionTitile}>Question</h6>
                        </Grid>
                        <Grid item lg={8} xs={12}>
                          <CustomInput3
                            className={classes.rootTextAria}
                            placeholder="Question #1"
                          />
                        </Grid>
                        <Grid item xs={12} style={{marginTop: 34}}>
                          <h6 className={classes.questionTitile}>
                            Question type
                          </h6>
                        </Grid>
                        <Grid item xs={12}>
                          {questionTypes.map(({label, icon}) => (
                            <Chip
                              classes={{
                                label: classes.chipLabel,
                                icon: classes.chipIcon,
                              }}
                              className={
                                type === label
                                  ? classes.chipActive
                                  : classes.chip
                              }
                              key={label}
                              onClick={changeTypeHandler}
                              icon={<img alt="radio" src={icon} />}
                              label={label}
                              value={label}
                              id={`${index}`}
                            />
                          ))}
                        </Grid>
                        {type === 'Choice' && <Chioce />}
                        {type === 'Text' && <TextCategory />}
                        {type === 'Rating' && <Rating />}
                        {type === 'Likert' && <Likert />}
                        {type === 'Ranking' && <Ranking />}
                        {type === 'Net promoter score' && <PromoterScore />}
                      </Grid>
                    )}
                  </Fragment>
                ))}
              </Grid>
              <Grid item xs={12}>
                <Link to="/" className={classes.previewLink}>
                  <p className={classes.previewLinkText}>
                    Preview Your Questionnaire
                  </p>
                  <img src={arrowRight} alt="arrow-right" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Total />
          </Grid>
        </>
      )}
      {currentStep === 4 && (
        <>
          <Grid item xs={10}>
            <h6 className={classes.stepTitle4}>
              Final Checks Before you active the Survey
            </h6>
          </Grid>
          <Grid item xs={10}>
            <h6 className={classes.borderBlockTitle}>
              Habits & Practices Exploratory
            </h6>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              alignItems="flex-end"
              className={classes.finalCheckBlock}>
              <Grid item xs={4} className={classes.flex}>
                <h6
                  className={clsx(classes.borderBlockTitle, classes.noWrap)}
                  style={{marginBottom: -3}}>
                  Questionnaire
                </h6>
                <div className={classes.smallYellowDivider} />
              </Grid>
              <Grid item xs={2} className={classes.flex}>
                <button className={classes.previewButton}>
                  <EyeIcon className={classes.previewButtonIcon} />
                  Preview
                </button>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  value="end"
                  control={<CustomCheckbox id="confirm 1" variant="large" />}
                  label={<BoldLabel text="Check to confirm" />}
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} className={classes.finalCheckDescriptionBlock}>
            <h6 className={classes.finalCheckDescription}>
              10 questions <br /> +3 custom questions
            </h6>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              alignItems="flex-end"
              className={classes.finalCheckBlock}>
              <Grid item xs={4} className={classes.flex}>
                <h6 className={clsx(classes.borderBlockTitle, classes.noWrap)}>
                  Report Template
                </h6>
                <div className={classes.smallYellowDivider} />
              </Grid>
              <Grid item xs={2} className={classes.flex}>
                <button className={classes.previewButton}>
                  <EyeIcon className={classes.previewButtonIcon} />
                  Preview
                </button>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  value="end"
                  control={<CustomCheckbox id="confirm 1" variant="large" />}
                  label={<BoldLabel text="Check to confirm" />}
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              alignItems="flex-end"
              className={classes.finalCheckBlock}>
              <Grid item xs={5} className={classes.flex}>
                <h6 className={clsx(classes.borderBlockTitle, classes.noWrap)}>
                  Sample Size{' '}
                  <b className={classes.borderBlockPlaceholder}>
                    Min 200 samples
                  </b>
                </h6>
                <div
                  className={classes.smallYellowDivider}
                  style={{marginBottom: 4}}
                />
              </Grid>
              <Grid item xs={1} className={classes.flex}>
                <h6 className={classes.bigInteger}>200</h6>
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  value="end"
                  control={<CustomCheckbox id="confirm 1" variant="large" />}
                  label={<BoldLabel text="Check to confirm" />}
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              alignItems="flex-end"
              className={classes.finalCheckBlock}>
              <Grid item xs={6} className={classes.flex}>
                <h6 className={clsx(classes.borderBlockTitle, classes.noWrap)}>
                  Target Market & ​Audience
                </h6>
                <div className={classes.smallYellowDivider} />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  style={{marginBottom: -5}}
                  value="end"
                  control={<CustomCheckbox id="confirm 1" variant="large" />}
                  label={<BoldLabel text="Check to confirm" />}
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <p
              className={classes.finalCheckDescription}
              style={{lineHeight: 2.2}}>
              <b>Country: </b>USA <br />
              <b>Gender: </b>Female, Male
              <br />
              <b>Marital status: </b>Married <br />
              <b>Children: </b>2 <br />
            </p>
          </Grid>
          <Grid item xs={11}>
            <TotalWithOutLinks />
          </Grid>
        </>
      )}
      <Grid item xs={10}>
        {currentStep !== 4 ? (
          <Grid container className={classes.nextStep}>
            {currentStep === 2 ? (
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
            ) : (
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
        ) : (
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{marginBottom: 121}}>
            <Grid item lg={4} md={5} sm={7} xs={12}>
              <Link
                to="/"
                className={classes.activate}
                onClick={dropStepsHandler}>
                Activate your Survey
              </Link>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default NewSurveyPage;
