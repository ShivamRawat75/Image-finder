
import {AppBar,Toolbar,Typography,styled} from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';


const Header=styled(AppBar)`

    background:#445A6F;

`

const NavBar=()=>{
    return(
        <div>
            <Header position='static'>
                <Toolbar>

                    <CollectionsIcon/>
                    <Typography variant='h5'>Image Finder</Typography>

                </Toolbar>
            </Header>

        </div>
    )
}

export default NavBar;