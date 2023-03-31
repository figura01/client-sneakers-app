import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../contextes/authCtx';
import { Box } from "@mui/system";
import { Stack, TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import api from '../../../api/apiHandler'

import '../../../styles/admin/CategorieProducts.css';

const DetailProductAdmin = () => {
  const {id} = useParams();
  const authCtx = useAuth();
  const [error, setError] = useState();
  const [product, setProduct] = useState([
    {}
  ]);

  useEffect(() => {
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    console.log(token)
    const fetchProduct = async () => {
      const results = await api.adminGetOne(
        `http://localhost:8000/v1/admin/products/${id}`,
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      )
      console.log(results);
      setProduct(results)
    }
    fetchProduct();
  }, []);

  return (
    <div id="categorie-products-detail">
      <header>
        <h2>Detail du produit</h2>
      </header>
      
      <Box>
        <form id="form-detail" >
          <div className="inner_detail">
            <Stack spacing={2} direction="column">
              <h3>Detail</h3>

              <div className="product">
                <div className="product-row">
                  Id: {product._id}
                </div>
                <div className="product-row">
                  Nom: {product.name}
                </div>
                <div className="product-row">
                  Prix unitaire: <p>{product.unit_price}</p>
                </div>
                <div className="product-row">
                  Quantitée: {product.quantity}
                </div>
                

                {/* 
                <div className="product-row">
                  tailles: {product && product.sizes.map((s,i) => {
                    return <span key={`size-product-${i}`} className="size">{s}</span>
                  })}
                </div>

                <div className="product-row">
                  Couleurs: {product.colors.map((c,i) => {
                    return <span key={`color-product-${i}`} className="size">{c.label}</span>
                  })}
                </div>
                */}
                
                <div className="product-row">
                  Image Principal: <img src={product.main_image} alt="#" />
                </div>
                <div className="product-row">
                  Description: <p>{product.description}</p>
                </div>
              </div>

              {error && ( <p className="error">{error.message}</p>)}
            </Stack>
          </div>
        </form>
      </Box>
    </div>
  )
}

export default DetailProductAdmin