import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchVideo: '', placeHolder:"Taper votre vidéo" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ searchVideo: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
                <input                
                    value={this.state.searchVideo}
                    onChange={this.handleChange} placeholder={this.state.placeHolder}
                />               
            </div>
        );        
    }

}

export default SearchBar;