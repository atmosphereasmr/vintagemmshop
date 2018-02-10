import React, { Component } from 'react'
import './advert.css'
import { connect } from "react-redux";
import { choose, image } from '../../reducer'

class Advert extends Component {

    componentDidMount() {
        console.log('ayeeee', this.props)
        }

    render() {
        return (
            <div>
                <div className="advert-container">
                    <div className="advert">
                        <div className="advert-pic" id="picture">
                        </div>
                        <div className="advert-text">
                        {this.props.chosenItem}
                        </div>
                        <div className="advert-price">
                        {this.props.chosenPrice}
                        </div>
                        <div className="advert-banner">
                        <div>AVAILABLE AT VINTAGEMMSHOP.COM</div>
                    </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

function MapStateToProps(state) {
    return (
        state
    )
}

export default connect(MapStateToProps, { choose, image })(Advert)