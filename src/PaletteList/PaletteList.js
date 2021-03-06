import React, {Component} from 'react'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

import MiniPalette from './PaletteList-components/MiniPalette'

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a" : {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        height: "20%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    }
}

class PaletteList extends Component{

    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`)
    }

    deletePalette = (id) => {
        this.props.deletePalette(id)
    }

    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {this.props.palettes.map(palette=> (
                            <div  key={palette.id}>
                                <MiniPalette palette={palette} handleClick={()=>this.goToPalette(palette.id)} deletePalette={()=>this.deletePalette(palette.id)}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)