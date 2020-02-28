import React, { Component } from 'react'

export default class Aihe extends Component {
    render() {
        return (
            <tbody>
                 <tr><td>Title:</td><td>{this.props.title}</td></tr>
                 <tr><td>Description:</td><td>{this.props.description}</td></tr>
                 <tr><td>Time to master:</td><td>{this.props.timetomaster} h</td></tr>
                 <tr><td>Time spent:</td><td>{this.props.timespent} h</td></tr>
                 <tr><td>Source: </td><td>{this.props.source}</td></tr>
                 <tr><td>Learning start date:</td><td>{this.props.learningdatestart}</td></tr>
                 <tr><td>In progress:</td><td>{this.props.inprogress}</td></tr> 
                 {/* boolean datatyyppi kannassa */}
                 <tr><td>Completion date:</td><td>{this.props.completiondate}</td></tr>
            </tbody>     
        );
    }
}

//description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate

