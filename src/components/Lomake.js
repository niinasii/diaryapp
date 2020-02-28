import React, { Component } from 'react';

export default class Lomake extends Component {

    state = { title: '', description: '', timetomaster: '', timespent: '', source: '', learningdatestart: '', inprogress: '', completiondate: '' }
    titleMuuttunut = (e) => { this.setState({ title: e.target.value }); }
    descriptionMuuttunut = (e) => { this.setState({ description: e.target.value }); }
    timetomasterMuuttunut = (e) => { this.setState({ timetomaster: e.target.value }); }
    timetospentMuuttunut = (e) => { this.setState({ timetospent: e.target.value }); }
    sourceMuuttunut = (e) => { this.setState({ source: e.target.value }); }
    learningdatestartMuuttunut = (e) => { this.setState({ learningdatestart: e.target.value }); }
    inprogressMuuttunut = (e) => { this.setState({ inprogress: e.target.value }); }
    completiondateMuuttunut = (e) => { this.setState({ completiondate: e.target.value }); }

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
                                <label htmlFor="timetomaster">Time to Master: </label>
                            </td><td>
                                    <input type="text" name="timetomaster" value={this.state.timetomaster} onChange={this.timetomasterMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="title">Time to spent: </label>
                            </td><td>
                                    <input type="text" name="timetospent" value={this.state.timetospent} onChange={this.timetospentMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="title">Source: </label>
                            </td><td>
                                    <input type="text" name="source" value={this.state.source} onChange={this.sourceMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="title">Learning date start: </label>
                            </td><td>
                                    <input type="text" name="learningdatestart" value={this.state.learningdatestart} onChange={this.learningdatestartMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="title">In progress: </label>
                            </td><td>
                                    <input type="text" name="inprogress" value={this.state.inprogress} onChange={this.inprogressMuuttunut} />
                                </td></tr>
                            <tr><td>
                                <label htmlFor="title">Completion date: </label>
                            </td><td>
                                    <input type="text" name="completiondate" value={this.state.completiondate} onChange={this.completiondateMuuttunut} />
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