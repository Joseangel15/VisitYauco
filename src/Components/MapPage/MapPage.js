import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import './MapPage.css';


class MapPage extends Component {



    render() {
        return (
            <div>
                <NavBar />
                <h1>365 Days of Summer</h1>
                <h3>Map & Weather</h3>

                <div className='googleMap'>

                </div>

                <div className='weatherInfo'>

                </div>

                <div>
                    <h2>It's Always Sunny in Yauco</h2>
                    <p className='weatherText'>Cursus vitae congue mauris rhoncus aenean vel. Vivamus at augue eget arcu dictum varius. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Venenatis cras sed felis eget velit. Pellentesque habitant morbi tristique senectus et netus et. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Faucibus interdum posuere lorem ipsum dolor sit. Eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa placerat duis ultricies lacus sed. Adipiscing diam donec adipiscing tristique risus nec feugiat. Massa placerat duis ultricies lacus sed turpis. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus nulla at volutpat diam ut venenatis. Adipiscing bibendum est ultricies integer quis auctor. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.</p>
                </div>

                <div className='dashFooter'>

                </div>

            </div>
        )
    }

}

export default MapPage;