import CONSTANTES from './CONSTANTES';

export const actionRegistro = values => ({
  type: CONSTANTES.REGISTRO,
  datos: values,
});

export const actionLogin = values => ({
  type: CONSTANTES.LOGIN,
  datos: values,
});

export const actionEstablecerSession = usuario => ({
  type: CONSTANTES.ESTABLECER_SESION,
  usuario,
});
export const actionCerrarSession = () => ({
  type: CONSTANTES.CERRAR_SESSION,
});
