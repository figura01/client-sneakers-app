import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import { Stack, TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

// import {useParams} from 'react-router-dom';
import api from '../../../api/apiHandler';
import { useAuth } from '../../../contextes/authCtx';

const validationSchema = yup.object({
  label: yup
    .string('Nom de la catégorie')
    .min(2, 'La catégorie doit contenir au minimum 2 characters')
    .required("Le champ est requis"),
});

const CreateCategorieProduct = () => {
  const authCtx = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      label: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert("values:" + JSON.stringify(values));
      const localInfo = localStorage.getItem('user');
      const { token } = JSON.parse(localInfo);

      try {
        const result = await api.adminCreateOne('http://localhost:8000/v1/admin/categorie-products',
          {
            label: values.label,
          },
          {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
        )
        if(result) {
          navigate('/admin/categorie-products');
        }

      } catch (err) {
        console.log('err: ', err)

      }
    },
  });

  return (
    <div id="create-categorie">
      <h2>Créer un nouveau utilisateur</h2>
      <Box>
        <form id="form-signup" onSubmit={formik.handleSubmit} method="post" action="http://localhost:8000/v1/admin/categorie-products">
          <div className="inner_signup">
            <Stack spacing={2} direction="column">
              <h1>Créer une categorie de produit</h1>

              <TextField
                required
                id="label"
                label="Label"

                placeholder="Categorie"
                name="label"
                size="small"
                value={formik.values.label}
                onChange={formik.handleChange}
                error={formik.touched.label && Boolean(formik.errors.label)}
                helperText={formik.touched.label && formik.errors.label}
              />

              <input type="submit" value="Ajouter" className="main-btn" />
              {error && ( <p className="error">{error.message}</p>)}
            </Stack>
          </div>
        </form>
      </Box>

    </div>
  )
}

export default CreateCategorieProduct
