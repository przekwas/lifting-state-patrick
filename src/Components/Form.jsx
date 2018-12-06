import React from 'react';

const Form = (props) => {
    return (
        <div className="container mt-5 w-50">
            <div className="row">
                <div className="col-md-12">
                    <form className="border border-dark rounded">
                        <label className="m-2 text-center font-weight-bold">
                            What's on your mind?
                            </label>
                        <div className="form-group m-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Who dis is!?"
                                value={props.user}
                                onChange={e => props.handleUser(e.target.value)}
                            />
                        </div>
                        <div className="form-group m-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Chirp Chirp"
                                value={props.chirp}
                                onChange={e => props.handleChirp(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={e => props.handleClick(e)}
                            type="submit"
                            className="btn btn-primary m-2"
                        >Chirp it!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;