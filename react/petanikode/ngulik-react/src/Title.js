import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Ngulik React uhuy",
            subTitle: "Dibuat dengan uhuy uhuy"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subTitle}</h2>
            </div>
        )
    }
}

export default Title;