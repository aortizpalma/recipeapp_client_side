import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createRecipe, updateRecipe } from '../../actions/recipes';


const FormR = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({instructions: '', title: '', ingredients: '', category: '', selectedFile: ''});
    const recipe = useSelector((state) => currentId ? state.recipes.find((r) => r._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(recipe) setPostData(recipe);
    }, [recipe])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateRecipe(currentId, postData));
        } else {
// ****CHECK if this should use postData or recipeData*****
            dispatch(createRecipe(postData));
        }        
        clear();     
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Create'} Recipe</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="ingredients" variant="outlined" label="Ingredients" fullWidth value={postData.ingredients} onChange={(e) => setPostData({ ...postData, ingredients: e.target.value })} multiline rows={4}/>
                <TextField name="instructions" variant="outlined" label="Instructions" fullWidth value={postData.instructions} onChange={(e) => setPostData({ ...postData, instructions: e.target.value })} multiline rows={8}/>
                <TextField name="category" variant="outlined" label="Category" fullWidth value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase  type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 }) }/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    );
};

export default FormR;