import React, { Component } from 'react';
import AiheetList from './AiheetList';
import { haeAiheet } from '../restClient';
export default class AiheetBox extends Component {

    state = {
        aiheet: []
    };

    componentDidMount = () => {
        this.haeJaPäivitä();
    }

    haeJaPäivitä = () => {
        haeAiheet(lista => {
            this.setState({ aiheet: lista })
        });
    }

    render() {
        return (
            <section>
                <h2>Aiheet</h2>
                <AiheetList aiheet={this.state.aiheet} />
            </section>
        )
    }
}