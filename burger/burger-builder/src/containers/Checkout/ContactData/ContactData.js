import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import axios from './../../../axios-orders';
import Input from './../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'twoDays', displayValue: 'Two Days' }
                    ]
                },
                value: ''
            },
        }
    }

    orderHandler = () => {
        let formData = {}
        for (let formEl in this.state.orderForm) {
            formData[formEl] = this.state.orderForm[formEl]
        }
        const orders = {
            ingredients: this.state.ingredients,
            orderData: formData
        }
        axios.post('/orders.json', orders).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log('Error Caught')
        })
    }

    checkValidity = (value, rules) => {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() != ''
        }
        return isValid;
    }

    inputHandler = (event, type) => {
        /**
         * The Spread operator doesnot do nested object copying hence we should do
         * it twice
         */
        const updatedOrderForm = { ...this.state.orderForm }
        const updatedForm = { ...updatedOrderForm[type] }
        updatedForm.value = event.target.value
        updatedForm.valid = this.checkValidity(updatedForm.value,updatedForm.validation)
        updatedOrderForm[type] = updatedForm
        console.log(updatedForm)
        this.setState({ orderForm: updatedOrderForm })
    }

    render() {
        let input = Object.keys(this.state.orderForm).map((type, index) => {
            return <Input key={index}
                elementType={this.state.orderForm[type].elementType}
                // value={this.state.orderForm[type].value}
                elementConfig={this.state.orderForm[type].elementConfig}
                changed={(event) => this.inputHandler(event, type)}
            />
        })

        return (
            <div>
                <h4>Enter your contact data</h4>
                <form>
                    {input}
                    {/* <Input elementType='input' elementConfig={} value={}/> */}
                    {/* <Input inputtype='input' type='email' name='email' placeholder='Enter your email' />
                    <Input inputtype='input' type='text' name='street' placeholder='Enter your street' />
                    <Input inputtype='input' type='text' name='postal' placeholder='Enter your postal' /> */}
                    <Button btnClick={this.orderHandler}>Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData