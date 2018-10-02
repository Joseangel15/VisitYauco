import React, { Component } from 'react';
import './Carousel.css';
import { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

class CarouselPage extends Component {
    render() {
        return (
            <Container className='carContainer'>
                <Carousel
                    activeItem={1}
                    length={4}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                            <View>
                                <div className='cerroBox'>
                                    <p className='mainYauco'>Yauco</p>
                                </div>
                            </View>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                            <View>
                                <div className='lakeBox'>
                                    <p className='mainYauco'>Yauco</p>
                                </div>
                            </View>
                        </CarouselItem>
                        <CarouselItem itemId="3">
                            <View>
                                <div className='alcalBox'>
                                    <p className='mainYauco'>Yauco</p>
                                </div>
                            </View>
                        </CarouselItem>
                        <CarouselItem itemId="4">
                            <View>
                                <div className='seaBox'>
                                    <p className='mainYauco'>Yauco</p>
                                </div>
                            </View>
                        </CarouselItem>
                    </CarouselInner>
                </Carousel>
            </Container>
        );
    }
}

export default CarouselPage;