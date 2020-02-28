import React, { Component } from 'react'
import Aihe from './Aihe';
export default class AiheetList extends Component {
    render() {
        //const self = this;
        const aiheet = this.props.aiheet.map(function (aihe) {
            return (
                <Aihe key={aihe.id} title={aihe.title} description={aihe.description} timetomaster={aihe.timetomaster} timespent={aihe.timespent} source={aihe.source} learningdatestart={aihe.learningdatestart} inprogress={aihe.inprogress} completiondate={aihe.completiondate} />
            );
        })
        return (
            <table id="aihelistaus">
                {aiheet}
            </table>
        )
    }
}
