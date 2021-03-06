import React, { Component } from 'react'
import {
  View
} from 'react-native'
import {connect} from 'react-redux'

import Player from '../components/Player'

class PlayerContainer extends Component {
  render() {
    const { playingSongId } = this.props

    if (playingSongId === null) {
      return <View />
    }

    return (
      <Player {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { entities, player, playlists } = state
  const playingSongId = player.currentSongIndex !== null ? playlists[player.selectedPlaylists[player.selectedPlaylists.length - 1]].items[player.currentSongIndex] : null

  return {
    player,
    playingSongId,
    songs: entities.songs,
    users: entities.users
  }
}

export default connect(mapStateToProps)(PlayerContainer)
