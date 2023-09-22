import * as Yup from 'yup'

export const SchemaBrief = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(1),
  email: Yup.string()
    .email('Email invalido')
    .required('Este campo es requerido'),
  celular: Yup.string()
    .required('Este campo es requerido')
    .min(9, 'El numero debe tener 9 digitos')
    .max(9, 'El numero debe tener 9 digitos')
})

// CATEGORIAS
export const SchemaRegistros = Yup.object().shape({
  nombres: Yup.string().required('El nombre es requerido').min(3, 'Debe tener 3 digitos como minimo'),
  apellidos: Yup.string().required('El apellido es requerido').min(3, 'Debe tener 3 digitos como minimo'),
  email: Yup.string().email('Email invalido').required('El email es requerido'),
  celular: Yup.string().required('El celular es requerido').min(7, '7 digitos como minimo').max(9, '9 digitos como maximo')
})

// CATEGORIAS
export const SchemaCodigo = Yup.object().shape({
  codigo: Yup.string().required('El codigo es requerido').min(4, 'El codigo debe ser de 4 digitos').max(9, 'El codigo debe ser de 4 digitos')
})

// CATEGORIAS
export const SchemaCategorias = Yup.object().shape({
  nombre: Yup.string().required('Este campo es requerido').min(1)
})

// PRODUCTOS
export const ScheamaProductos = Yup.object().shape({
  nombre: Yup.string().required('El campo es requerido'),
  descripcion: Yup.string().required('El campo es requerido'),
  idCategoria: Yup.number().required('El campo es requerido')
})

// PRIMERASECCION
export const ScheamaPrimeraSeccion = Yup.object().shape({
  nombre: Yup.string().required('El campo es requerido'),
  descripcion: Yup.string().required('El campo es requerido')
})

// SEGUNDA SECCION
export const ScheamaSegundaSeccion = Yup.object().shape({
  titulo: Yup.string().required('El campo es requerido'),
  descripcion: Yup.string().required('El campo es requerido')
})

// VALORES
export const ScheamaValores = Yup.object().shape({
  titulo: Yup.string().required('El campo es requerido')
})

// VALORES
export const SchemaValores = Yup.object().shape({
  mapa: Yup.string().required('El campo es requerido'),
  mapa2: Yup.string().required('El campo es requerido')
})
