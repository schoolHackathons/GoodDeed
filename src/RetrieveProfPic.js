import React from 'react';
import axios from 'axios';
import {Text,Image} from 'react-native';

class RetrieveProfPic extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            profPic: '',
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
                profPic: response.data.contact.contactPerson,
            });
        })
    }
    
    async componentWillUnmount() {
        this.isCancelled = await true;
    }

    render() {
        return (
            this.state.profPic ? <Image source={{uri: this.state.profPic}} style={{width: 50,height: 50}}/> : <Image source={{uri: 'https://i.stack.imgur.com/34AD2.jpg'}} style={{width: 50,height: 50}}/>
        )
    }
}

export default RetrieveProfPic;