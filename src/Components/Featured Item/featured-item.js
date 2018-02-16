import React, { Component } from 'react'
import axios from 'axios'
import '../Shirts/shirts.css'
import { Link } from 'react-router-dom'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

const shirts = require('../../Data/featured.js')

export default class FeaturedItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feat_items: [],
            feat_name: '',
            feat_desc: '',
            feat_specs: '',
            feat_price: '',
            feat_link: '',
            feat_url: ''
        }
    }

    featDesc() {

    }

    componentDidMount() {
        this.setState({ feat_items: shirts}, () => {
            console.log("items", shirts)
            this.changePic()
        }
        )

        const container = document.getElementById('right-container')
        const menu = document.getElementById('left-container')
        const leftBar = document.getElementById('left-bar')
        const home = document.getElementById('home-container')

        container.style = "height: 825px;"
        menu.style = "height: 825px"
        leftBar.style = "height: 825px"
        home.style = "height: 825px"
    }

    changePic() {
        const chosenItem = document.getElementById("chosen-item")
        chosenItem.style = `background-image: url(${shirts.data[0][3]})`
    }

    buyClick() {
        window.location = shirts.data[0][5]
    }

    cartOn() {
        const cart = document.getElementById("shopping-cart")
        cart.className = "shopping-cart-on"
    }

    cartOff() {
        const cart = document.getElementById("shopping-cart")
        cart.className = "shopping-cart-off"
    }

    render() {
        return (
            <div>
                                <div className="shareOnFacebook">
                    <FacebookShareButton children="Share" url="http://www.vintagemmshop.com" />
                </div>
                <div className="shareOnTwitter">
                    <TwitterShareButton children="Tweet" url="http://www.vintagemmshop.com/" />
                </div>
                <div className="vinyl-home-container" id="home-container">
                    <div className="left-bar" id="left-bar">
                    </div>
                    <div className="left-container" id="left-container">
                        <Link to="/">
                            <div className="shirts-tab-off" id="shirts-tab">
                                <h1>Shirts</h1>
                            </div>
                        </Link>
                        <Link to="/vinyl">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Vinyl</h1>
                            </div>
                        </Link>
                        <Link to="/socks">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Socks</h1>
                            </div>
                        </Link>
                        <Link to="/patches">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Patches & Pins</h1>
                            </div>
                        </Link>
                        <Link to="/posters">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Posters</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="vinyl-right-container" id="right-container">
                        <div className="chosen-item-on" id="chosen-item" onClick={() => this.buyClick()} onMouseEnter={() => this.cartOn()} onMouseLeave={() => this.cartOff()}>
                            <div className="shopping-cart-off" id="shopping-cart" onClick={() => this.buyClick()}>
                                <img src="http://www.freeiconspng.com/uploads/basket-cart-icon-27.png" />
                            </div>
                        </div>
                        <div className="chosen-description-on" id="chosen-description">
                            <div className="chosen-header">
                                {shirts.data[0][1]}
                            </div>
                            <p>{shirts.data[0][2]}</p>
                            <p>{shirts.data[0][6]}</p>
                        </div>
                        <div className="chosen-buy-box-on" id="chosen-buy-box">
                            <div className="chosen-price-container">
                                <p>{shirts.data[0][4]}</p>
                            </div>
                            <div className="chosen-buy-button" onClick={() => this.buyClick()}>
                                <p>Buy Now</p>
                            </div>
                        </div>

                    </div>
                    <div className="right-bar">
                    </div>
                </div>
                {/* <div className="editor-container">
                <input placeholder="name" onChange={(e) => this.nameInput(e.target.value)}></input>
                    <input placeholder="name" onChange={(e) => this.nameInput(e.target.value)}></input>
                    <textarea rows="4" cols="50" onChange={(e) => this.descriptionInput(e.target.value)}></textarea>
                    <textarea rows="4" cols="50" onChange={(e) => this.specsInput(e.target.value)}></textarea>
                    <input placeholder="price" onChange={(e) => this.priceInput(e.target.value)}></input>
                    <input placeholder="picture url" onChange={(e) => this.urlInput(e.target.value)}></input>
                    <input placeholder="buy link url" onChange={(e) => this.linkInput(e.target.value)}></input>
                    <button onClick={() => this.submit()}>Create new item</button>
                </div> */}
            </div>
        )
    }
}