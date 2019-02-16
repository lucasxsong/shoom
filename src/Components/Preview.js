import React from "react";

class Preview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  image: []
		};
	}

  componentDidMount() {
    fetch("https://restpack.io/api/screenshot/v5/capture?access_token=ClC9N9G2l8FamLPpBAG16x4wUC1DM594EkLQ4J16jLYVlYZe&url=https://reactjs.org/&json=true&thumbnail_width=800&thumbnail_height=200")
      .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  image: result.image
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }

  render() {
      const { error, isLoaded, image } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <img src={image} alt="page preview" />
          </div>
        );
      }
    }

  

}

export default Preview;