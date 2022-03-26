import React, {useEffect, useState} from 'react';
import {requests} from '../../../../api/requests';

export const MyOrderHook = () => {
  const [open, setOpen] = useState(false);
  return {open, setOpen};
};
