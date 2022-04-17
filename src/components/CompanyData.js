import React, { Component } from "react";
import { connect } from "react-redux";

class CompanyData extends Component {
    render() {
        /*
        console.log('Inside Company Data');
        console.log(this.props);
        */
        return (
            <div >
                <div className="flex flex-col justify-start items-center m-4 border rounded-r-md bg-white">
                    <h1 className="text-2xl m-4">Bag of Money</h1>
                    <h1 className="text-3xl mb-4">{this.props.bagOfMoney}</h1>
                </div>
                <div className="flex flex-row items-center justify-start">
                    <div className="flex-1">
                        <div className="flex flex-col m-4 border rounded-md bg-white p-4">
                            <h1 className="text-2xl">Policy Holders</h1>
                            {this.props.policies.map((name, index) => (<div className="my-2" key={`policy${index}`}>{name}</div>))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col m-4 border rounded-md bg-white p-4">
                            <h1 className="text-2xl">Claims History</h1>
                            {this.props.claimsHistory.map((claim, index) => (<div className="my-2" key={`claim-${index}`}>{`${claim.name} - ${claim.claimAmount}`}</div>))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return state;
}

export default connect(matchStateToProps, {})(CompanyData);