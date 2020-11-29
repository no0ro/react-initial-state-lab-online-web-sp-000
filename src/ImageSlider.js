import React from 'react';
// use controlled


class ImageSlider extends React.Component {
    constructor() {
        super()
        // set initial state
        this.state = {
            currentSlideIndex: 0
        }
    }

    // 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex

    render() {
        
        return(
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlider
