import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ContactCard extends Component {
    render() {
        const {name, number, email} = this.props
        return <div>
            Name: {name} <br></br>Number: {number} <br></br>email: {email} 
        </div>
    }
}

ContactCard.propTypes = {
    name: PropTypes.string,
    Number: PropTypes.string,
    email: PropTypes.string,
}

export default ContactCard;