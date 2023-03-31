import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
// import { createFilterOptions } from '@mui/material/Autocomplete';
import { Stack,TextField, MenuItem, Card, Autocomplete, createFilterOptions, Grid } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { useFormik } from 'formik';
import * as yup from 'yup';

// import {useParams} from 'react-router-dom';
import api from '../../../api/apiHandler';
import { useAuth } from '../../../contextes/authCtx';
import '../../../styles/admin/Product.css';

const validationSchema = yup.object({
  name: yup
    .string('Nom de la catégorie')
    .min(2, 'La catégorie doit contenir au minimum 2 characters')
    .required("Le champ est requis"),
  
  gamme: yup
    .string('Doit être une string')
    .required("Selectionné une gamme"),
  
  // colors: yup
  //   .array().of(yup.string())
  //   .required("Sélectionner des couleurs"),
  
  type: yup
    .string('Doit être une string')
    .required("Selectionné un type"),
  
  unit_price: yup
    .number('Doit être un nombre')
    .required("Dois être un nombre"),
  // sizes: yup
  //   .array().of(yup.number())
  //   .required("Sélectionner des tailles")

  description: yup
    .string('Doit être une string')
    .required("Selectionné un type"),
});

const CreateProduct = () => {
  useEffect(() => {
    const fetchCategories = async () => {
      const localInfo = localStorage.getItem('user');
      const { token } = JSON.parse(localInfo);
      const result = await api.adminGetAll(
        'http://localhost:8000/v1/admin/categorie-products', 
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      );
      console.log(result)
      if(result) {
        setCategorie(result)
      }
    }
    fetchCategories()
  }, [])
  const authCtx = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [sizes, setSizes] = useState([
    {lable: 'Homme', sizes: [37, 38, 39, 40, 41, 42, 43,44,45,46,47,48,49]},
    {lable: 'Femme', sizes: [36, 37, 38, 39, 40, 41, 42, 43]},
    {lable: 'Kid', sizes: [22, 23,24,25,26,27,28,29,30,31,32,33,34,35,36]}
  ]);
  const [gammes, setGammes] = useState([
    {label: 'Homme', value: 'homme'},
    {label: 'Femme', value: 'femme'},
    {label: 'Kid', value: 'kid'},
  ])
  const [colors, setColors] = useState([
    {label: 'White', value: 'white'},
    {label: 'Black', value: 'black'},
    {label: 'Red', value: 'red'},
    {label: 'Blue', value: 'blue'},
    {label: 'Yellow', value: 'yellow'},
    {label: 'Green', value: 'green'},
    {label: 'Pink', value: 'pink'},
    {label: 'Gray', value: 'gray'},
  ])

  const [types, setTypes] = useState([
    {label: 'Street', value: 'street'},
    {label: 'Running', value: 'running'},
    {label: 'Trainning', value: 'trainning'},
  ])

  const [categorie, setCategorie] = useState(
    [
      {
          "_id": "641b2014687b4dadb0bacec9",
          "label": "Shoes"
      },
      {
          "_id": "641bac471fc6b8de8e7938f9",
          "label": "Accessoire"
      }
    ]
  )

  const formik = useFormik({
    initialValues: {
      name: '',
      gamme: 'homme',
      type: 'street',
      unit_price: '',
      sizes: sizes[0].sizes,
      colors: [],
      description: '',
      categorie: categorie[0]._id,
      main_image: '',
      images: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('---', values)
      // alert("values:" + JSON.stringify(values));
      console.log('formik submit-------------')
   
      const localInfo = localStorage.getItem('user');
      const { token, _id } = JSON.parse(localInfo);
      console.log(token, _id);
      
      console.log('values:------ ', values)
      //alert(JSON.stringify(values, null, 2));
      try {
        const result = await api.adminCreateOne('http://localhost:8000/v1/admin/products', 
          values,
          {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
        )
        console.log('result in create Product page', result);
        if(result) {
          navigate('/admin/products');
        }
        
      } catch (err) {
        console.log('retour error: ------')
        console.log('err: ', err)
       
      } 
    },
  });
  console.log(formik.values)

  return (
    <div id="create-product">
      <h2>Créer un nouveau produit</h2>
      <Box>
        <Card>
          <form id="form-product" onSubmit={formik.handleSubmit} method="post" action="http://localhost:8000/v1/admin/categorie-products">
            <div className="inner_product">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1>Nouveau produit </h1>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={2} direction="column">

                    <TextField
                      required
                      select
                      id="categorieProducts"
                      label="Categorie du produit"
                      name="categorieProducts"
                      size="small"
                      value={formik.values.categorie}
                      onChange={formik.handleChange}
                      error={formik.touched.categorie && Boolean(formik.errors.categorie)}
                      helperText={formik.touched.categorie && formik.errors.categorie}
                    >
                      {categorie.map((c, i) => {
                        console.log('categorie products: ', c)
                        return <MenuItem key={`categorie-products-${i}`} value={c._id}>
                          {c.label}
                        </MenuItem>
                      })}
                    </TextField>

                    <TextField
                      required
                      id="name"
                      label="Nom du produit"
                      placeholder="Nom du produit"
                      name="name"
                      size="small"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                      required
                      select
                      id="gamme"
                      label="Gamme du produit"
                      placeholder="Gamme du produit"
                      name="gamme"
                      size="small"
                      value={formik.values.gamme}
                      onChange={formik.handleChange}
                      error={formik.touched.gamme && Boolean(formik.errors.gamme)}
                      helperText={formik.touched.gamme && formik.errors.gamme}
                    >
                      {gammes.map((g, i) => {
                        return <MenuItem key={`gamme-${i}`} value={g.value}>
                          {g.label}
                        </MenuItem>
                      })}
                    
                    </TextField>

                    <TextField
                      required
                      id="unit_price"
                      label="Prix unitaire"
                      placeholder="Prix unitaire"
                      name="unit_price"
                      size="small"
                      value={formik.values.unit_price}
                      onChange={formik.handleChange}
                      error={formik.touched.unit_price && Boolean(formik.errors.unit_price)}
                      helperText={formik.touched.unit_price && formik.errors.unit_price}
                    />

                    <Autocomplete
                      multiple
                      id="colors"
                      label="Liste des couleurs"
                      size="small"
                      options={colors}
                      getOptionLabel={(option) => option.label}
                      // getOptionDisabled={(colors) => (colors.length === 2 ? true : false)}

                      onChange={(_, value) => {
                        console.log('value: ', value);
                        formik.values.colors = value
                      }}
                      defaultValue={[]}
                      renderInput={(params) => {
                        return (
                        <TextField {...params} placeholder="Couleurs" label="Liste des couleurs" />
                      )}}
                    />

                    <TextField
                      required
                      select
                      id="type"
                      label="Type du produit"
                      placeholder="Type du produit"
                      name="type"
                      size="small"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      error={formik.touched.type && Boolean(formik.errors.type)}
                      helperText={formik.touched.type && formik.errors.type}
                    >
                      {types.map((t, i) => {
                        console.log(t)
                        return <MenuItem key={`type-${i}`} value={t.value}>
                          {t.label}
                        </MenuItem>
                      })}
                    
                    </TextField>

                    {formik.values.gamme === 'kid' && (
                      <Autocomplete
                        multiple
                        id="sizes"
                        label="Liste des tailles"
                        size="small"
                        options={sizes[2].sizes}
                        getOptionLabel={(option) => option}
                        // getOptionDisabled={(colors) => (colors.length === 2 ? true : false)}
                        
                        defaultValue={sizes[2].sizes}
                        renderInput={(params) => {
                          return (
                          <TextField {...params} placeholder="Tailles" label="Liste des tailles" />
                        )}}
                      />
                    )}
                    {formik.values.gamme === 'homme' && (
                      <Autocomplete
                        multiple
                        id="sizes"
                        label="Liste des tailles"
                        size="small"
                        options={sizes[0].sizes}
                        getOptionLabel={(option) => option}
                        // getOptionDisabled={(colors) => (colors.length === 2 ? true : false)}
                        
                        defaultValue={sizes[0].sizes}
                        renderInput={(params) => {
                          return (
                          <TextField {...params} placeholder="Tailles" label="Liste des tailles" />
                        )}}
                      />
                    )}
                    {formik.values.gamme === 'femme' && (
                      <Autocomplete
                        multiple
                        id="sizes"
                        label="Liste des tailles"
                        size="small"
                        options={sizes[1].sizes}
                        getOptionLabel={(option) => option}
                        // getOptionDisabled={(colors) => (colors.length === 2 ? true : false)}
                        
                        defaultValue={sizes[1].sizes}
                        renderInput={(params) => {
                          return (
                          <TextField {...params} placeholder="Tailles" label="Liste des tailles" />
                        )}}
                      />
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    minRows={6}
                    maxRows={10}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input type="submit" value="Ajouter" className="main-btn" />
                  {error && ( <p className="error">{error.message}</p>)}               
                </Grid>
              </Grid>
              
            </div>
          </form>
        </Card>
      </Box>
  
    </div>
  )
}

export default CreateProduct