import React from 'react'
import useStyles from './styles/SectionFiveStyles'
import Item from "./SectionFiveItem";
import Carousel from 'react-material-ui-carousel'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function SectionFive() {
    const classes = useStyles()
    const items = [
        {
            name: "MARY SMITH",
            description: "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
            img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f86236aeb432544da74f5648/1.jpg?version='
        },
        {
            name: "FRANK KINNEY",
            description: "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
            img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4a1fc1c3fe6e52cebb2083ed/3.jpg?version='
        }
    ]
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Carousel
                    NextIcon={<NavigateNextIcon />}
                    PrevIcon={<NavigateBeforeIcon />}
                    navButtonsProps={{
                        style: {
                            backgroundColor: '#803BEC',
                            '&:hover': {
                                backgroundColor: 'red',
                            }
                        }
                    }}
                    interval={5000}
                    animation='slide'
                    timeout={700}
                    navButtonsAlwaysVisible={true}
                >
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )
}
