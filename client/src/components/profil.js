import React, { Component } from "react";

class Profil extends Component {
  render() {
    return (
      <>
        <h1 className="profil-title"> Profil </h1>
        <div className="profil-container">
          <p className="label"> Username </p>
          <p className="value"> {this.props.username} </p> <br />
          <p className="label"> Campus </p>
          <p className="value"> {this.props.campus} </p> <br />
          <p className="label"> Course </p>
          <p className="value"> {this.props.course} </p> <br />
        </div>
        <div className="profil-container"> 
          <div className="profil-image-container">
            <div className="profil-image">
              <img src={this.props.image} alt="photo profil" />
            </div>
            <button className="submit-btn" type="submit">Upload your photo</button>
          </div>
          <div>Eu in nisi esse aliquip aliquip.In Lorem nisi non aliquip tempor culpa laboris minim tempor aute commodo. Pariatur incididunt consequat reprehenderit laboris occaecat nisi commodo occaecat. Do ipsum ad ipsum eiusmod culpa pariatur proident. Lorem ullamco eu cupidatat id sit irure cupidatat veniam sit sunt commodo ullamco. Est nostrud irure est aliqua ea voluptate. Sit dolore cupidatat laborum proident et consequat pariatur laboris consectetur enim culpa fugiat in id.</div>
        </div>
      </>
    );
  }
}

export default Profil;
