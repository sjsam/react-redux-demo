import React, { Component } from "react";
import { connect } from "react-redux";
import { createPolicy, cancelPolicy, createClaim } from '../redux/actions'
import { CREATE_POLICY, CREATE_CLAIM, CANCEL_POLICY } from "../utils/constants"

class FrontOffice extends Component {
    // We need to give three options to a user  CREATE_POLICY, CANCEL_POLICY, CREATE_CLAIM
    constructor(props) {
        super(props);
        this.state = {
            displayOption: CREATE_POLICY,
            createPolicyAmount: 5000,
            createPolicyName: '',
            cancelPolicyName: '',
            createClaimName: '',
            createClaimAmount: 0.0,
        };
        // Without bingig to this object we cannot call the below functions directly from onClick in 'Submit'
        this.createPolicyNameChange = this.createPolicyNameChange.bind(this);
        this.createPolicyAmountChange = this.createPolicyAmountChange.bind(this);
        this.cancelPolicyNameChange = this.cancelPolicyNameChange.bind(this);
        this.createClaimAmountChange = this.createClaimAmountChange.bind(this);
        this.createClaimNameChange = this.createClaimNameChange.bind(this);
    }
    /*
     * Events related to CREATE_POLICY
     */
    createPolicyNameChange($event) {
        $event.preventDefault();
        this.setState({ createPolicyName: $event.target.value });
    }

    createPolicyAmountChange($event) {
        $event.preventDefault();
        this.setState({ createPolicyAmount: $event.target.value });
    }
    /*
     * Events related to CANCEL_POLICY
     */
    cancelPolicyNameChange($event) {
        $event.preventDefault();
        this.setState({ cancelPolicyName: $event.target.value });
    }
    /*
     * Events related to CREATE_CLAIM
     */
    createClaimNameChange($event) {
        $event.preventDefault();
        this.setState({ createClaimName: $event.target.value });
    }

    createClaimAmountChange($event) {
        $event.preventDefault();
        this.setState({ createClaimAmount: $event.target.value });
    }

    processOption(option) {
        this.setState({
            displayOption: option,
            // We wish to clear all the form values too.
            createPolicyAmount: 5000,
            createPolicyName: '',
            cancelPolicyName: '',
            createClaimName: '',
            createClaimAmount: 0.0,
        });
    }

    processSubmit(option) {
        switch (option) {
            case CREATE_POLICY:
                // Validation skipped for simplicity
                if ('' !== this.state.createPolicyName) {
                    this.props.createPolicy(this.state.createPolicyName, Number.parseFloat(this.state.createPolicyAmount));
                    this.setState({ createPolicyName: '', createPolicyAmount: 5000 })
                }
                break;
            case CANCEL_POLICY:
                // Validation skipped for simplicity
                this.props.cancelPolicy(this.state.cancelPolicyName);
                break;
            case CREATE_CLAIM:
                // Validation skipped for simplicity
                console.log('Creating Claim Name : ' + this.state.createClaimName);
                console.log('Creating Claim Amount : ' + this.state.createClaimAmount);
                if ('' !== this.state.createClaimName) {
                    this.props.createClaim(this.state.createClaimName, Number.parseFloat(this.state.createClaimAmount));
                    this.setState({createClaimAmount: 0.0 })
                }
                break;
            default:
                break;
        }
    }

    render() {
        /*
        console.clear();
        console.log('Inside Front Office');
        console.log(this.props);
        */
        return (
            <div>
                <div className="p-4" onClick={($event) => {
                    $event.preventDefault();
                    this.processOption(CREATE_POLICY)
                }}>
                    <h1 className="text-lg">Create Policy</h1>
                </div>
                <div
                    style={{ display: this.state.displayOption === CREATE_POLICY ? 'initial' : 'none' }}>
                    <form className="p-4 pl-6 pt-0">
                        <div className="flex flex-row justify-start items-center my-4">
                            <label className="block flex-none flex-shrink mr-2">
                                Policy Holder Name :
                            </label>
                            <input className="flex-1 p-2" type="text" value={this.state.createPolicyName} onChange={this.createPolicyNameChange} />
                        </div>
                        <div className="flex flex-row justify-start items-center my-4">
                            <label className="block flex-none flex-shrink mr-2">
                                Policy First Installment :
                            </label>
                            <input className="flex-1 p-2" type="number" value={this.state.createPolicyAmount} onChange={this.createPolicyAmountChange} />
                        </div>
                        <button className="my-4 p-4 text-white border rounded-md bg-green-700" onClick={($event) => {
                            $event.preventDefault();
                            this.processSubmit(CREATE_POLICY);
                        }}>Submit</button>
                    </form>
                </div>
                <div className="p-4" onClick={($event) => {
                    $event.preventDefault();
                    this.processOption(CANCEL_POLICY)
                }}>
                    <h1 className="text-lg">Cancel Policy</h1>
                </div>
                <div style={{ display: this.state.displayOption === CANCEL_POLICY ? 'initial' : 'none' }}>
                    <form className="p-4 pl-6 pt-0" >
                        <div className="flex flex-row justify-start items-center my-4">
                            <label className="block flex-none flex-shrink mr-2">
                                Whose policy to terminate?
                            </label>
                            <select className="flex-1 p-2" value={this.state.cancelPolicyName} onChange={this.cancelPolicyNameChange}>
                                {this.props.policies.map((holderName, index) => (<option key={index + (holderName.toLowerCase().replaceAll(' ', ''))} value={holderName}>{holderName}</option>))}
                            </select>
                        </div>
                        <button className="my-4 p-4 text-white border rounded-md bg-green-700" onClick={($event) => {
                            $event.preventDefault();
                            this.processSubmit(CANCEL_POLICY);
                        }}>Submit</button>
                    </form>
                </div>
                <div className="p-4" onClick={($event) => {
                    $event.preventDefault();
                    this.processOption(CREATE_CLAIM)
                }}>
                    <h1 className="text-lg">Create Claim</h1>
                </div>
                <div className="p-4 pl-6" style={{ display: this.state.displayOption === CREATE_CLAIM ? 'initial' : 'none' }}>
                    <form className="p-4 pl-6 pt-0">
                        <div className="flex flex-row justify-start items-center my-4">
                            <label className="block flex-none flex-shrink mr-2">
                                Whose is claiming?
                            </label>
                            <select className="flex-1 p-2" value={this.state.createClaimName} onChange={this.createClaimNameChange}>
                                {this.props.policies.map((holderName, index) => (<option key={index + (holderName.toLowerCase().replaceAll(' ', ''))} value={holderName}>{holderName}</option>))}
                            </select>
                        </div>
                        <div className="flex flex-row justify-start items-center my-4">
                            <label className="block flex-none flex-shrink mr-2">
                                Claim Amount :
                            </label>
                            <input className="flex-1 p-2" type="number" value={this.state.createClaimAmount} onChange={this.createClaimAmountChange} />
                        </div>
                        <button className="my-4 p-4 text-white border rounded-md bg-green-700" onClick={($event) => {
                            $event.preventDefault();
                            this.processSubmit(CREATE_CLAIM);
                        }}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return { policies: state.policies };
}

export default connect(matchStateToProps,
    { createPolicy, cancelPolicy, createClaim })(FrontOffice)

