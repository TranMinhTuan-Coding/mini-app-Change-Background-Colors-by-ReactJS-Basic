import React from 'react';

class InputBox extends React.Component{

    constructor(props){
        super(props)
        this.state={
            inputColor: '',
        }
    }

    // Code sai: gây ra lỗi state truyền sang Main App bị "lỡ nhịp"
    // InputColorFunc = (e) => {
    //     this.setState({
    //         inputColor: e.target.value
    //     });

    //     this.props.InputColorFunc00(this.state.inputColor);
    //     console.log(this.state.inputColor);
    // }

    // Code đúng: Truyền thẳng giá trị nhập được từ input vào hàm sang MainApp
    // Không nên thông qua việc thay đổi giá trị state => truyền giá trị state sang
    InputColorFunc = (e) => {
        var value = e.target.value;

        this.setState({
            inputColor: value
        });

        this.props.InputColorFunc00(value);
    }

    render(){
        return(
            <div className='input-box'>
                    <p 
                        className='input-box-title'
                        style={this.props.changeTextColorFunc()}
                        
                    >Color: {this.props.color}</p>
                    <input 
                        name='inputColor'

                        className='enter-color-input'
                        placeholder='Enter color name ???'

                        onChange={this.InputColorFunc}
                        value={this.state.inputColor}
                    />
            </div>
        )
    }
}
export default InputBox;