import React from 'react';
import { connect } from 'react-redux'; //1
import { selectSong } from '../actions'


class SongList extends React.Component {
  renderList(){

    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
              >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render(){
    return <div className="ui divided list">{this.renderList()}</div>
  }
}
//updates state
const mapStateToProps = (state) => {
  return { songs: state.songs }
}//2
//going to take state and run to show up as props


export default connect(mapStateToProps, { selectSong })(SongList);//3
