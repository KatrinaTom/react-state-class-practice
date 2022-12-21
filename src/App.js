import React, {Component} from "react";

class App extends Component {
      constructor(props){
        super(props)
        this.state = {
          userInput: "",
          songs: ["Despacito", "Summer Of 69", "Hotel California", "Single Ladies", "If I were a boy", "Run the World", "Waka Waka" ],
        }; 
        this.handleClick = this.handleClick.bind(this);
        this.filterSongs = this.filterSongs.bind(this);
      }

      handleClick(event){
        event.preventDefault()
      }

      filterSongs(event){
        this.setState({
          userInput: event.target.value
        })
      }

      render(){
        const filteredSongs = this.state.songs.filter( song => song.includes(this.state.userInput))
        return(
          <div data-testid="app" >
            <h1> SEARCH SONG </h1>
            <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.filterSongs} />
                    <input type="submit" value="Filter" />
            </form>
            {filteredSongs.map((song, index) => {
              return <li style={{listStyleType: "none"}} key={index}>{song}</li>
            })}
          </div>

        )
      }
}
export default App
