import React from 'react';
import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Modal, Radio, RadioGroup, TextareaAutosize, TextField, Typography } from '@mui/material';
import FileBase64 from 'react-file-base64';
// import { ModalEditState$ } from '../../redux/selectors';
// import {EditPostReducer} from '../../redux/reducers/edit';
// import {PostReducer} from '../../redux/reducers/posts';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { systemSelector } from '../redux/Selector';
import { useEffect } from 'react';
import { updatePosts } from '../api';

export default function EditProduct() {
  const data = useSelector(systemSelector);
  // console.log('data isOpenModalEdit : ',data.isOpenModalEdit);
  // console.log('data  : ',data.data);
  const [values, setValues] = React.useState({
    id : '',
    name: '',
    category: "",
    shortDescription: '',
    detailDescription: '',
    price: undefined,
    attachment : '',
    likeCount : 0,
    isNew : false,
  });
  const handleEdit = async() => {
    updatePosts(values);
    window.location.reload();
  }
  useEffect(() => {
    setValues({
        ...values,
        id : data.data._id,
        name : data.data.name,
        category : data.data.category,
        shortDescription : data.data.shortDescription,
        detailDescription : data.data.detailDescription,
        price : data.data.price,
        attachment : '',
        isNew : data.data.isNew,
        likeCount : data.data.likeCount,
      });
  },[])
    const style = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        gap : '5px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    // const {isShowEditModal} = editValueAVailable;
  return (
    <div>
        <Modal open={data.isOpenModalEdit}>
             <FormGroup sx={style} >
                <Typography variant='h5' align='center'>EDIT POST</Typography>
                <FormLabel>
                    <TextField value={values.name} onChange={((e) => setValues({...values, name : e.target.value}))} fullWidth label='Enter name' variant='standard' />
                    <FormControl>
                  <FormLabel sx={{display : 'flex'}} id="demo-radio-buttons-group-label">CAREGORY</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={values.category}
                    onChange={((e) => setValues({...values, category : e.target.value}))}
                  >
                    <FormControlLabel value="cellphone" control={<Radio />} label="cellphone" />
                    <FormControlLabel value="laptop" control={<Radio />} label="laptop" />
                    <FormControlLabel value="other" control={<Radio />} label="other" />
                  </RadioGroup>
                    </FormControl>
                    <TextField fullWidth value={values.shortDescription} onChange={((e) => setValues({...values, shortDescription : e.target.value}))} label='Enter shortDescription' variant='standard' />
                </FormLabel>
                <TextareaAutosize
                    minRows={10}
                    placeholder="Enter Detail description..."
                    style={{ width: '100%' , margin : '10px 0' , border: '1px solid #000' }}
                    value={values.detailDescription}
                    onChange={((e) => setValues({...values, detailDescription : e.target.value}))}
                />
                <TextField fullWidth onChange={((e) => setValues({...values, price : e.target.value}))} label='Enter Price' value={values.price} variant='standard' />
                <TextField fullWidth onChange={((e) => setValues({...values, likeCount : e.target.value}))} label='Enter likeCount' value={values.likeCount} variant='standard' />
                <FormControl>
                <FormLabel sx={{display : 'flex'}} id="demo-radio-buttons-group-label">IS NEW ARRIVAL</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={values.isNew}
                  onChange={((e) => setValues({...values, isNew : e.target.value}))}
                >
                  <FormControlLabel value={true} control={<Radio />} label="true" />
                  <FormControlLabel value={false} control={<Radio />} label="false" />
                </RadioGroup>
              </FormControl>
                <FileBase64 accept='image/*' multiple={false} type='file' onDone={({ base64 }) => setValues({...values,attachment : base64})} />
                <div>
                <Button onClick={handleEdit} sx={{marginTop : '20px' , width : '100%'}} variant="contained" >SAVE CHANGE</Button>
                </div>
             </FormGroup>
             
        </Modal>
    </div>
  )
}