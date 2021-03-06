import React from 'react';
import axios from 'axios';
import {Text} from 'react-native';

class RetrieveOrgName extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            coordinates: [],
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
                coordinates: [response.data.coordinates.latitude,response.data.coordinates.longitude],
            });
        })
    }
    
    async componentWillUnmount() {
        this.isCancelled = await true;
    }

    render() {
        return (
            this.state.coordinates
        )
    }
}

export default RetrieveOrgName;