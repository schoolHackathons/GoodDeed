import React from 'react';
import axios from 'axios';
import {Text} from 'react-native';

class RetrieveLocation extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            city: [],
        };
    }

    componentWillMount() {
        var that = this;
        axios.get('https://gateway-staging.ncrcloud.com/site/sites/7da39fda1bdf4bb8952d8a5d2dc0c38c',{
            headers: {
                'nep-application-key': '8a0084a165d712fd01668f1e973c005d',
            },
            auth: {
                username: 'acct:gooddeed@gooddeedserviceuser',
                password: 'gooddeed',
            },
        }).then(function(response) {
            that.setState({
                siteName: response.data.siteName,
                street: response.data.address.street, 
                city: response.data.address.city,
                state: response.data.address.state,
                postalCode: response.data.address.postalCode,
            });
        })
    }
    
    async componentWillUnmount() {
        this.isCancelled = await true;
    }

    render() {
        return (
            <Text>{this.state.siteName+' @ '+this.state.street+', '+this.state.city+', '+this.state.state+' '+this.state.postalCode}</Text>
        )
    }
}

export default RetrieveLocation;