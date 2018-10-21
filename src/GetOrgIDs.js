import React from 'react';
import axios from 'axios';
import {Text,Image} from 'react-native';

class GetOrgIDs extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            IDs: [],
        };
    }

    componentWillMount() {
        var that = this;
        axios.post('https://gateway-staging.ncrcloud.com/site/sites/find-by-criteria?pageSize=10&pageNumber=0',{
            'criteria': {

            }},{
            method: 'post',
            headers: {
                'nep-application-key': '8a0084a165d712fd01668f1e973c005d',
                'Content-Type': "application/json",
                'nep-application-id': 'gooddeed:1.0:default',
            },
            auth: {
                username: 'acct:gooddeed@gooddeedserviceuser',
                password: 'gooddeed',
            },
        })
        .then(function(response) {
            var numEntries = response.data.totalResults;
            console.log(numEntries);
            var i;
            for(i=0;i<numEntries;i++){
                that.setState({
                    IDs: [...that.state.IDs, response.data.pageContent[i].id],
                });
            }
            console.log(JSON.stringify(that.state.IDs));
        })
        .catch(error => {
            console.log(error.response)
        })
    }
    
    async componentWillUnmount() {
        this.isCancelled = await true;
    }

    render() {
        return (
            this.state.IDs
        )
    }
}

export default GetOrgIDs;