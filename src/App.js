import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import {SearchBar , VideoList , VideoDetail} from './components/index'
import youtube from './api/youtube';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       videos:[],
       selectedVideo:null
    }
  }
  componentDidMount(){
    this.handleSubmit('pdf generation with react and node')
  }
  onVideoSelect=(video)=>{
    this.setState({
      selectedVideo:video
    })
  }  
  handleSubmit=async(searchTerm)=>{
    const response = await youtube.get('search', {params: {
      part: 'snippet',
      maxResults: '50',
      key: 'AIzaSyCIDJGjcXO9wq6FAEN68ZJaEd2gmEtFEi8',
      q:searchTerm
    }});
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    })
  }
  render() {
    const {selectedVideo,videos}=this.state
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default App