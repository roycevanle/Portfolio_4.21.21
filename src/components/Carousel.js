import React from 'react';

import Card from '../components/Card';

import proj1 from '../assets/images/proj1.jpg';
import proj2 from '../assets/images/proj2.jpg';
import proj3 from '../assets/images/proj3.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'Royce ipsum proj',
                    imgSrc: proj1,
                    link: 'https://github.com/roycevanle',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'Royce ipsum proj2',
                    imgSrc: proj2,
                    link: 'https://github.com/roycevanle',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'Royce ipsum proj3',
                    imgSrc: proj3,
                    link: 'https://github.com/roycevanle',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        // get us all the items
        let items = [...this.state.items];

        // to keep the item state of each card
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    // create a card component for each item that we have
    // so we don't have to bind it to soemthing later
    makeItems = (items)  => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;