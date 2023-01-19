import React from 'react';

class MainAppTitle extends React.Component{

    render(){
        return(
            <div className='main-app-title-box'>
                <p 
                    className='main-app-title'
                    style={this.props.changeTextColorFunc()}
                >Change BackGround Color mini-App</p>
            </div>
        )
    }
}
export default MainAppTitle;