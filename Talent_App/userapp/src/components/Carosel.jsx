import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../css/subcomp.css'

const items = [
  {
    src: require('../images/career_img1.jpg'),
    altText: 'Slide 1',
    caption: 'Find your path',
    header: 'Warm Welcome to Ram Careers Solutions',
    key: '1'
  },
  {
    src: require('../images/career_img2.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Plant your Career and Harvest the Wisdom',
    key: '2'
  },
  {
    src: require('../images/career_img3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carosels = () => <UncontrolledCarousel items={items} />;
  
export default Carosels;