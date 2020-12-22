import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

import { notifyCurrentPage } from '../redux/actions';

import UniverseLG from '../components/universe-lg';
import UniverseSM from '../components/universe-sm';

const Universe = (props: any) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  dispatch(notifyCurrentPage('Universe'));

  return (
    <>
      { isMobile ? <UniverseSM /> : <UniverseLG /> }
    </>
  );
};

export default Universe;
