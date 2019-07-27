import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from './../../components//Burger/OrderSummary/OrderSummary'
import axios from './../../axios-orders'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 2,
            cheese: 2,
        },
        totalPrice: 4,
        isButtonClicked: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;
        this.setState({ ingredients: updatedIngredients })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const newCount = oldCount - 1
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;
        this.setState({ ingredients: updatedIngredients })
    }

    buttonClicked = () => {
        let currentState = this.state.isButtonClicked
        this.setState({ isButtonClicked: !currentState })
        console.log(this.state.isButtonClicked)
    }

    cancelHandlerFn = () => {
        this.setState({ isButtonClicked: false })
    }

    continueHandler = () => {
        const orders = {
            ingredients: this.state.ingredients,
            customer: {
                name: 'Sai',
                address: {
                    street : 'Heart',
                    zipCode: '212332',
                    country : 'India'
                },
                email : 'testtest.test'
            }
        }
        console.log('continueHandler')
        axios.post('/orders.json', orders).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log('Error Caught')
        })
    }

    render() {
        return (
            <Aux>
                <OrderSummary
                    cancelHandler={this.cancelHandlerFn}
                    buttonClicked={this.state.isButtonClicked}
                    ingredients={this.state.ingredients}
                    continueHandler={this.continueHandler}></OrderSummary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    buttonClicked={this.buttonClicked}></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder