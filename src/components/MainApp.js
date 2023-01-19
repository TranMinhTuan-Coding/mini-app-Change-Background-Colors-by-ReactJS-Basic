import React from 'react';
import InputBox from './InputBox';
import MainAppTitle from './MainAppTitle';

class MainApp extends React.Component{

    constructor(props){
        super(props)
        this.state={
            color: 'white',
        }
    }

    // Hàm nhận chuỗi input từ component con
    InputColorFunc00 = (x) => {
        this.setState({
            color: x
        });
        // console.log(this.state.color);
    }

    // Hàm thay đổi màu nền background theo chuỗi state
    changeMainBackgroundColorFunc = () => {
        return{
            backgroundColor: this.state.color
        }
    }

    // Hàm quản lý màu chữ bên InputBox
    changeTextColorFunc = () => {
        return{
            color: this.state.color
        }
    }

    render(){
        return(
            <div 
                className='main-background'
                style={this.changeMainBackgroundColorFunc()}

            >
                <MainAppTitle 
                    changeTextColorFunc={this.changeTextColorFunc}
                />

                <InputBox
                    InputColorFunc00={this.InputColorFunc00}
                    color={this.state.color}
                    changeTextColorFunc={this.changeTextColorFunc}
                />
            </div>
        )
    }
}
export default MainApp;