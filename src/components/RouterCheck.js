import {Component} from 'react';
import {connect} from 'react-redux';

class RouterCheck extends Component {
    render(){
        
        return (
            <div className='bg-red-500 border p-4 rounded-md'>
                <h1 className='text-2xl'>Company under scrutiny by tax department for fraudulent activity.</h1>
                <h1 className='text-red-800 text-xl font-semibold'>Bag of Money : {this.props.bagOfMoney}</h1>
            </div>
        );
    }
}

const matchStateToProps = (state)=>({bagOfMoney:state.bagOfMoney});

export default connect(matchStateToProps,{})(RouterCheck);