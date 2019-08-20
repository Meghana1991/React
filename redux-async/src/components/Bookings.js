import React, { Component } from 'react';
import { connect } from 'react-redux'

class Bookings extends Component {
    render() {
        return (
            <div>
                {this.props.bks.map((each) => {
                    return (
                        <div>
                            <div><span>Your Train - {each.trainName} is successfully booked for the passenger(s) {each.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        'bks': state.myBookings
    }
}

export default connect(mapStateToProps)(Bookings);