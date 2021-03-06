import React from 'react';
import axios from 'axios';
import {Text} from 'react-native';

class RetrieveDesc extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            description: '',
        };
    }

    componentWillMount() {
        var that = this;
        axios.get('https://gateway-staging.ncrcloud.com/site/sites/'+this.props.id,{
            headers: {
                'nep-application-key': '8a0084a165d712fd01668f1e973c005d',
            },
            auth: {
                username: 'acct:gooddeed@gooddeedserviceuser',
                password: 'gooddeed',
            },
        }).then(function(response) {
            
            that.setState({
                description: response.data.description,
            });
        })
    }
    
    async componentWillUnmount() {
        this.isCancelled = await true;
    }

    render() {
        return (
            <Text>{this.state.description}</Text>
        )
    }
}

export default RetrieveDesc;