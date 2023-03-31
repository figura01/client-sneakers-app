import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../contextes/authCtx';
import { Box } from "@mui/system";
import { Stack, TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import api from '../../../api/apiHandler'

import '../../../styles/admin/CategorieProducts.css';

const DetailCategorieProductAdmin = () => {
  const {id} = useParams();
  const authCtx = useAuth();
  const [error, setError] = useState();
  const [categorieProduct, setCategorieProduct] = useState([
    {}
  ]);

  useEffect(() => {
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    console.log(token)
    const fetchCategorieProduct = async () => {
      const results = await api.adminGetOne(
        `http://localhost:8000/v1/admin/categorie-products/${id}`,
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      )
      console.log(results);
      setCategorieProduct(results)
    }
    fetchCategorieProduct();
  }, []);

  return (
    <div id="categorie-products-detail">
      <header>
        <h2>Detail catégorie produit</h2>
      </header>
      
      <Box>
        <form id="form-detail" >
          <div className="inner_detail">
            <Stack spacing={2} direction="column">
              <h3>Detail</h3>

              <div>
                Id: {categorieProduct._id}
              </div>
              <div>
                Label: {categorieProduct.label}
              </div>

              {error && ( <p className="error">{error.message}</p>)}
            </Stack>
          </div>
        </form>
      </Box>
    </div>
  )
}

export default DetailCategorieProductAdmin