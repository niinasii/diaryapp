import React, { Component } from 'react';

export default class Lomake extends Component {

    state = { title: '', description: '', timetomaster: '', timespent: '', source: '', learningdatestart: '', radio_on: false, completiondate: '' }
    
    titleMuuttunut = (e) => { this.setState({ title: e.target.value }); }
    descriptionMuuttunut = (e) => { this.setState({ description: e.target.value }); }
    timetomasterMuuttunut = (e) => { this.setState({ timetomaster: e.target.value }); }
    timetospentMuuttunut = (e) => { this.setState({ timetospent: e.target.value }); }
    sourceMuuttunut = (e) => { this.setState({ source: e.target.value }); }
    learningdatestartMuuttunut = (e) => { this.setState({ learningdatestart: e.target.value }); }
    completiondateMuuttunut = (e) => { this.setState({ completiondate: e.target.value }); }

    inprogressMuuttunut = (e) => {
        this.setState({ radio_on: JSON.parse(e.target.value)})
    }

    lisääUusi = () => {
        this.props.addTopic(this.state);
        this.setState({ title: '', description: '', timetomaster: '', timespent: '', source: '', learningdatestart: '', inprogress: '', completiondate: '' });
        console.log("Nappia klikattu");
    }

    render() {
        return (
            <section>
                <h2>Lisää uusi aihe</h2>
                <form>
                    <table id="lomaketbl">
                        <tbody>
                            <tr><td>
                                <label htmlFor="title">Title: </label>
                            </td><td>
                                    <input type="text" name="title" value={this.state.title} onChange={this.titleMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="description">Description: </label>
                            </td><td>
                                    <input type="text" name="description" value={this.state.description} onChange={this.descriptionMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="timetomaster">Time to Master (h): </label>
                            </td><td>
                                    <input type="number" name="timetomaster" value={this.state.timetomaster} onChange={this.timetomasterMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="timetospent">Time to spent (h): </label>
                            </td><td>
                                    <input type="number" name="timetospent" value={this.state.timetospent} onChange={this.timetospentMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="source">Source http://</label>
                            </td><td>
                                    <input type="text" name="source" value={this.state.source} onChange={this.sourceMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="learningdatestart">Learning date start: </label>
                            </td><td>
                                    <input type="date" name="learningdatestart" value={this.state.learningdatestart} onChange={this.learningdatestartMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="inprogress">In progress: </label>
                            </td><td>
                                    Kyllä: <input className="radio" type="radio" name="inprogress" value="true" onChange={this.inprogressMuuttunut} checked={this.state.radio_on === true} />
                                    Ei: <input className="radio" type="radio" name="inprogress" value="false" onChange={this.inprogressMuuttunut} checked={this.state.radio_on === false} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="completiondate">Completion date: </label>
                            </td><td>
                                    <input type="date" name="completiondate" value={this.state.completiondate} onChange={this.completiondateMuuttunut} />
                                </td></tr>
                        </tbody>
                    </table>
                    <button type="button" className="lomakebtn" onClick={this.lisääUusi}>Lisää</button>
                </form>
            </section>
        )
    }
}

//title, description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate