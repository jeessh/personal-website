import Icon1 from '../../images/pfp-1.JPG'
import Icon2 from '../../images/Beach.jpg'
import Icon3 from '../../images/Floating.svg'



export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: '',
  headline: "My name's Jesse",
  description: "But you can call me Jess if you'd like!",
  imgStart: false,
  img: Icon1,
  alt: 'pfp',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'experiences',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'header?',
  headline: 'headline',
  description: 'xx',
  imgStart: true,
  img: Icon2,
  alt: 'beach',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'projects',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'header',
  headline: 'headline',
  description: 'description',
  imgStart: false,
  img: Icon3,
  alt: 'floating',
  primary: false,
  darkText: true
};
