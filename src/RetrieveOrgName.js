import React from 'react';
import axios from 'axios';
import {Text} from 'react-native';

class RetrieveOrgName extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            enterpriseUnitName: [],
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
                enterpriseUnitName: response.data.enterpriseUnitName,
            });
        })
    }
    
    async componentWillUnmount() {
        this.isCancelled = await true;
    }

    render() {
        return (
            <Text>{this.state.enterpriseUnitName}</Text>
        )
    }
}

export default RetrieveOrgName;