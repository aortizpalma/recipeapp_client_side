import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import { getPosts } from './actions/posts';
// import { getRecipes } from './actions/recipes';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
// import Recipes from './components/Recipes/Recipes';
// import FormR from './components/FormR/FormR';
import dish from './images/dish.png';
import useStyles from './styles';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import About from './components/About/About';
// import MoreRecipes from './components/MoreRecipes/MoreRecipes';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    // useEffect(() => {
    //     dispatch(getRecipes());
    // }, [dispatch]);

    return (
        // <Router>
        <Container maidth="lg">
            {/* <Header /> */}
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">YumCards</Typography>

                <img className={classes.image} src={dish} alt="dish" height="60"/>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                            {/* <Recipes setCurrentId={setCurrentId}/> */}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            {/* <FormR currentId={currentId} setCurrentId={setCurrentId}/> */}
                        </Grid>
                    </Grid>
                </Container>
            </Grow> 
            <Footer />
        </Container>

/*          <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/more_recipes" component={MoreRecipes}/>
            </Switch> */

        // </Router>
    );
};

export default App;