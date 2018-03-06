import React, { Component } from 'react';
import SearchSection from './search_section';
import PopularitySection from './popularity_section';
import ParticipantSection from './participant_section';

export default class MainPage extends Component {

    render(){
        return(
            <div>
                <SearchSection/>
                <PopularitySection/>
                <ParticipantSection/>
            </div>
        );
    }
}
