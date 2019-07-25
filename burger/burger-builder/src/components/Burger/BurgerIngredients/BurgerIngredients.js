import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import "./BurgerIngredients.css"

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = <div className="BreadBottom"></div>
                break;
            case 'bread-top':
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                )
                break;
            case 'meat':
                ingredient = <div className="Meat"></div>
                break;
            case 'salad':
                ingredient = <div className="Salad"></div>
                break;
            case 'cheese':
                ingredient = <div className="Cheese"></div>
                break;
            case 'patty':
                ingredient = <div className="Patty"></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

/**
 * Props Types will mention which prop should be
 * of which type and if any validation is required or not
 */
// BurgerIngredient.propTypes = {
//     type: PropTypes.string.isRequired
// }

export default BurgerIngredient;