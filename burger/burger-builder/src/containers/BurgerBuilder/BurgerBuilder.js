import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from './../../components//Burger/OrderSummary/OrderSummary'
import axios from './../../axios-orders'
import * as actionType from './../../store/action'
import { connect } from 'react-redux'

class BurgerBuilder extends Component {

    state = {
        // ingredients: {
        //     salad: 2,
        //     cheese: 2,
        // },
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
    }

    cancelHandlerFn = () => {
        this.setState({ isButtonClicked: false })
    }

    continueHandler = () => {
        let queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryStr = queryParams.join('&');
        this.props.history.push(
            {
                pathname: '/checkout',
                search: '?' + queryStr
            })
    }

    render() {
        return (
            <div>
                <OrderSummary
                    cancelHandler={this.cancelHandlerFn}
                    buttonClicked={this.state.isButtonClicked}
                    ingredients={this.props.ings}
                    continueHandler={this.continueHandler}></OrderSummary>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    // ingredientAdded={this.addIngredientHandler}
                    ingredientAdded={this.props.onIngredientAdd}
                    // ingredientRemoved={this.removeIngredientHandler}
                    ingredientRemoved={this.props.onIngredientRemove}
                    buttonClicked={this.buttonClicked}></BuildControls>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: (name) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: name }),
        onIngredientRemove: (name) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: name })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)