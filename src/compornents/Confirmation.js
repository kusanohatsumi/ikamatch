import React from 'react'

import "../scss/_compornents/form.scss";
import { useState } from 'react';
import { doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
// ---
import { useForm } from 'react-hook-form';
// ---
import { useDispatch } from 'react-redux';
import { addPost } from './features/Posts';
import { useSelector } from 'react-redux';

import db from './Firebase';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";

import { Link } from 'react-router-dom';


export const Confirmation = () => {
  return (
    <div>
        <h2>ha</h2>
    </div>
  )
}
