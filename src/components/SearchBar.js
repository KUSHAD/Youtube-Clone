import React, { Component } from 'react'
import {Paper , TextField,AppBar,Toolbar,Typography,Button} from '@material-ui/core'
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
             searchTerm:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            searchTerm:event.target.value
        })
    }
    handleSubmit=(event)=>{
        const {searchTerm}=this.state
        const {onFormSubmit}=this.props
        onFormSubmit(searchTerm)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <AppBar position="static" style={{backgroundColor:'red'}}>
                    <Toolbar>
                        <Typography variant="h6"  style={{ flexGrow: '1px'}}>
                            Youtube Clone Developed By Kushad
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper elevation={6} style={{padding:'25px'}}>
                    <form onSubmit={this.handleSubmit} >
                        <TextField fullWidth label='Search.... ' onChange={this.handleChange}/>
                        <Button color="primary" variant="contained" style={{backgroundColor:'red'}} onClick={this.handleSubmit}>Search</Button>
                    </form>
                </Paper>
            </div>
        )
    }
}
export default SearchBar
