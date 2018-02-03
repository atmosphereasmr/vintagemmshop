import React, { Component } from 'react'
import axios from 'axios'
import '../Shirts/shirts.css'
import { Link } from 'react-router-dom'


const shirts = require('../../Data/socks.js')

export default class Socks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            itemAmount: 0,
            temp_item_name: '',
            temp_item_description: '',
            temp_item_url: '',
            temp_price: 0,
            name_input: '',
            description_input: '',
            price_input: '',
            url_input: '',
            link_input: '',
            specs_input: '',
            reload: 0,
            chosen_name: '',
            chosen_description: '',
            chosen_price: '',
            chosen_link: '',
            chosen_specs: '',
            edited_item_id: 0,
            edited_item_name: '',
            name_change: '',
            description_change: '',
            specs_change: '',
            price_change: '',
            picture_change: ''
        }
    }

    componentDidMount() {
        this.setState({ items: shirts.data, itemAmount: shirts.data.length }, () => {
            console.log(this.state)
            this.setSize()
        }
        )
    }

    setSize() {
        const size = this.state.itemAmount
        const container = document.getElementById('right-container')
        const menu = document.getElementById('left-container')
        const leftBar = document.getElementById('left-bar')
        const home = document.getElementById('home-container')

        console.log("yes", size)

        if (size <= 3) {
            container.style = "height: 275px"
            menu.style = "height: 550px"
            leftBar.style = "height: 550px"
            home.style = "height: 550px"
        } else if (size >= 4 && size <= 6) {
            container.style = "height: 550px"
            menu.style = "height: 550px"
            leftBar.style = "height: 550px"
            home.style = "height: 550px"
        } else if (size >= 7 && size <= 9) {
            container.style = "height: 825px"
            menu.style = "height: 825px"
            leftBar.style = "height: 825px"
            home.style = "height: 825px"
        } else if (size >= 10 && size <= 12) {
            container.style = "height: 1100px"
            menu.style = "height: 1100px"
            leftBar.style = "height: 1100px"
            home.style = "height: 1100px"
        } else if (size >= 13 && size <= 15) {
            container.style = "height: 1375px"
            menu.style = "height: 1375px"
            leftBar.style = "height: 1375px"
            home.style = "height: 1375px"
        } else if (size >= 16 && size <= 18) {
            container.style = "height: 1650px"
            menu.style = "height: 1650px"
            leftBar.style = "height: 1650px"
            home.style = "height: 1650px"
        } else if (size >= 19 && size <= 21) {
            container.style = "height: 1925px"
            menu.style = "height: 1925px"
            leftBar.style = "height: 1925px"
            home.style = "height: 1925px"
        } else if (size >= 22 && size <= 24) {
            container.style = "height: 2200px"
            menu.style = "height: 2200px"
            leftBar.style = "height: 2200px"
            home.style = "height: 2200px"
        } else if (size >= 25 && size <= 27) {
            container.style = "height: 2475px"
            menu.style = "height: 2475px"
            leftBar.style = "height: 2475px"
            home.style = "height: 2475px"
        } else if (size >= 28 && size <= 29) {
            container.style = "height: 2750px"
            menu.style = "height: 2750px"
            leftBar.style = "height: 2750px"
            home.style = "height: 2750px"
        } else if (size == 30) {
            container.style = "height: 2750px"
            menu.style = "height: 2750px"
            leftBar.style = "height: 2750px"
            home.style = "height: 2750px"
            const createItem = document.getElementById('create-item')
            createItem.disabled = "disabled"
        }
    }

nameInput(e) {
    this.setState({ name_input: e }, () => console.log(this.state.name_input))
}

nameChange(e) {
    this.setState({ name_change: e }, () => console.log(this.state.name_change))
}

descriptionChange(e) {
    this.setState({ description_change: e }, () => console.log(this.state.description_change))
}

specsChange(e) {
    this.setState({ specs_change: e }, () => console.log(this.state.specs_change))
}

priceChange(e) {
    this.setState({ price_change: e }, () => console.log(this.state.price_change))
}

pictureChange(e) {
    this.setState({ picture_change: e }, () => console.log(this.state.picture_change))
}

buyChange(e) {
    this.setState({ buy_change: e })
}

descriptionInput(e) {
    this.setState({ description_input: e }, () => console.log(this.state.description_input))
}
priceInput(e) {
    this.setState({ price_input: e }, () => console.log(this.state.price_input))
}
urlInput(e) {
    this.setState({ url_input: e }, () => console.log(this.state.url_input))
}
linkInput(e) {
    this.setState({ link_input: e }, () => console.log(this.state.link_input))
}
specsInput(e) {
    this.setState({ specs_input: e }, () => console.log(this.state.specs_input))
}
submit() {
    const name = this.state.name_input
    const description = this.state.description_input
    const price = this.state.price_input
    const url = this.state.url_input
    const link = this.state.link_input
    const specs = this.state.specs_input

    axios.post("http://localhost:3001/api/items/", {
        name,
        description,
        price,
        url,
        link,
        specs
    }
    )
    alert('Item uploaded and live. Refreshing now!')
    window.location.reload()
}

editSubmit(change_name, id, change_description, change_specs, change_price, change_picture, change_buy) {

    axios.put(`http://localhost:3001/api/items/`, {
        id,
        change_name,
        change_description,
        change_specs,
        change_price,
        change_picture,
        change_buy
    }
    )
    alert("Item changed. Refreshing now!")
    window.location.reload()
}

itemHover(e) {
    const title = document.getElementById("title" + e)
    const price = document.getElementById("price" + e)
    title.className = "title-container-on"
    price.className = "price-container-on"
}

itemHoverOff(e) {
    const title = document.getElementById("title" + e)
    const price = document.getElementById("price" + e)
    title.className = "title-container-off"
    price.className = "price-container-off"
}

itemChosen(item_url, item_name, item_description, item_price, item_link, item_specs) {
    const items = document.getElementsByName("item-tag")
    const chosenItem = document.getElementById("chosen-item")
    const chosenDescription = document.getElementById("chosen-description")
    const chosenBuyBox = document.getElementById("chosen-buy-box")
    const goBackButton = document.getElementById('go-back-button')
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item-off"
    }
    chosenItem.className = "chosen-item-on"
    chosenItem.style = `background-image: url(${item_url})`
    chosenDescription.className = "chosen-description-on"
    chosenBuyBox.className = "chosen-buy-box-on"
    this.setState({ chosen_name: item_name, chosen_description: item_description, chosen_price: item_price, chosen_link: item_link, chosen_specs: item_specs })
    goBackButton.className = "go-back-button-on"
}

buyClick() {
    window.location = this.state.chosen_link
}

goBack() {
    const chosenItem = document.getElementById("chosen-item")
    const chosenDescription = document.getElementById("chosen-description")
    const chosenBuyBox = document.getElementById("chosen-buy-box")
    const goBackButton = document.getElementById('go-back-button')
    const items = document.getElementsByName("item-tag")

    chosenItem.className = "chosen-item-off"
    chosenDescription.className = "chosen-description-off"
    chosenBuyBox.className = "chosen-buy-box-off"
    goBackButton.className = "go-back-button-off"
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item-1"
    }
}

cartOn() {
    const cart = document.getElementById("shopping-cart")
    cart.className = "shopping-cart-on"
}

cartOff() {
    const cart = document.getElementById("shopping-cart")
    cart.className = "shopping-cart-off"
}

delete (id) {
    const result = window.confirm("Confirm delete?");
    if (result) {
        this.itemChosen = function () { }
        axios.delete(`http://localhost:3001/api/items/${id}`, {
            id
        }
        )
        alert("Item deleted. Now refreshing!")
        window.location.reload()
    } else {
        window.location.reload()
    }
}

edit(id, defaultName, defaultDescription, defaultSpecs, defaultPrice, defaultPicture, defaultBuy) {
    this.setState({ edited_item_id: id })
    document.getElementById('edit-name-input').value = defaultName
    this.setState({ name_change: defaultName })
    document.getElementById('edit-description-input').value = defaultDescription
    this.setState({ description_change: defaultDescription })
    document.getElementById('edit-specs-input').value = defaultSpecs
    this.setState({ specs_change: defaultSpecs })
    document.getElementById('edit-price-input').value = defaultPrice
    this.setState({ price_change: defaultPrice })
    document.getElementById('edit-picture-input').value = defaultPicture
    this.setState({ picture_change: defaultPicture })
    document.getElementById('edit-buy-input').value = defaultBuy
    this.setState({ buy_change: defaultBuy })
}

render() {
    return (
        <div>
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
                        <div className="vinyl-tab-on" id="vinyl-tab">
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
                    <div className="go-back-button-off" id="go-back-button" onClick={() => this.goBack()}>
                        <p>⇦ Go back</p>
                    </div>
                    <div className="chosen-item" id="chosen-item" onClick={() => this.buyClick()} onMouseEnter={() => this.cartOn()} onMouseLeave={() => this.cartOff()}>
                        <div className="shopping-cart-off" id="shopping-cart" onClick={() => this.buyClick()}>
                            <img src="http://www.freeiconspng.com/uploads/basket-cart-icon-27.png" />
                        </div>
                    </div>
                    <div className="chosen-description-off" id="chosen-description">
                        <div className="chosen-header">
                            {this.state.chosen_name}
                        </div>
                        <p>{this.state.chosen_description}</p>
                        <p>{this.state.chosen_specs}</p>
                    </div>
                    <div className="chosen-buy-box-off" id="chosen-buy-box">
                        <div className="chosen-price-container">
                            <p>{this.state.chosen_price}</p>
                        </div>
                        <div className="chosen-buy-button" onClick={() => this.buyClick()}>
                            <p>Buy Now</p>
                        </div>
                    </div>
                    {this.state.items.map(item => {
                        return (
                            <div className="item-1" name="item-tag" id={item[0]} key={item[0]} style={{ backgroundImage: `url(${item[3]})` }}
                                onMouseOver={() => this.itemHover(item[0])} onMouseLeave={() => this.itemHoverOff(item[0])} onClick={() => this.itemChosen(item[3], item[1], item[2], item[4], item[5], item[6])}>
                                <div className="title-container-off" id={"title" + item[0]}>
                                    <p>{item[1]}</p>
                                    {/* <div className="edit-button" id={item.id} onClick={() => this.edit(item.id, item.item_name, item.item_description, item.specs, item.price, item.item_url, item.link)}>
                                        </div>
                                        <div className="delete-button" id={item.id} onClick={() => this.delete(item.id)}>
                                        </div> */}
                                </div>
                                <div className="price-container-off" id={"price" + item[0]}>
                                    <p>{item[4]}</p>
                                    <div className="check-out-box">
                                        <p>Buy</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="right-bar">
                </div>
            </div>
            {/* <div className="editor-container">
                    <div className="new-item-box">
                        <div>Create New Item</div>
                        <input placeholder="name" onChange={(e) => this.nameInput(e.target.value)}></input>
                        <input placeholder="description" onChange={(e) => this.descriptionInput(e.target.value)}></input>
                        <input placeholder="item specs, ect." onChange={(e) => this.specsInput(e.target.value)}></input>
                        <input placeholder="price" onChange={(e) => this.priceInput(e.target.value)}></input>
                        <input placeholder="picture url" onChange={(e) => this.urlInput(e.target.value)}></input>
                        <input placeholder="buy link url" onChange={(e) => this.linkInput(e.target.value)}></input>
                        <button id="create-item" onClick={() => this.submit()}>Create new item</button>
                    </div>
                    <div className="edit-box">
                        <div>Edit Item</div>
                        <input id="edit-name-input" onChange={(e) => this.nameChange(e.target.value)}></input>
                        <input id="edit-description-input" onChange={(e) => this.descriptionChange(e.target.value)}></input>
                        <input id="edit-specs-input" onChange={(e) => this.specsChange(e.target.value)}></input>
                        <input id="edit-price-input" onChange={(e) => this.priceChange(e.target.value)}></input>
                        <input id="edit-picture-input" onChange={(e) => this.pictureChange(e.target.value)}></input>
                        <input id="edit-buy-input" onChange={(e) => this.buyChange(e.target.value)}></input>
                        <button id="edit-item" onClick={() => this.editSubmit(this.state.name_change, this.state.edited_item_id, this.state.description_change, this.state.specs_change, this.state.price_change, this.state.picture_change, this.state.buy_change)}>Create new item</button>
                    </div>
                </div> */}
        </div>
    )
}
}